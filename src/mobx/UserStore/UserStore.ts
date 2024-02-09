import { action, makeObservable, observable } from "mobx";
import { UserData } from "./types";
import initialUser from "./initialUser";
import { User, onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../../../firebaseConfig";
import { COLLECTIONS, addDocument, getDocument } from "../../utils/fireUtils";
import { v4 as uuid } from "uuid";

interface UserProps {
  userData: UserData;
  isLoadingUser: boolean;
}

export class UserStoreClass implements UserProps {
  userData = { ...initialUser };
  isLoadingUser: boolean = false;

  constructor() {
    makeObservable(this, {
      userData: observable,
      isLoadingUser: observable,
      getUserData: action,
    });
  }

  async getUserData(firebaseUser?: User) {
    try {
      return await new Promise(() =>
        onAuthStateChanged(firebaseAuth, async (user) => {
          if (user) {
            try {
              this.isLoadingUser = true;
              const user: User | null = firebaseUser || firebaseAuth.currentUser;
              const uid = user?.uid ?? "";

              const userDataDoc = (await getDocument(COLLECTIONS.users, uid)) as UserData | null;
              if (uid.length && userDataDoc) {
                this.handleSuccsessfulUserLoad(userDataDoc);
              } else {
                this.handleFailedUserLoad();
              }
            } catch (error) {
              console.log(`error in getUserData: ${error}`);
              this.isLoadingUser = false;
              throw error;
            }
          } else {
            this.handleFailedUserLoad();
            // await userStore.fetchLocalUser();
          }
        })
      );
    } catch (error) {
      // console.error(`error in onAuthStateChanged: ${error}`);
    }
  }

  private async handleFailedUserLoad() {
    // in case there is no user doc yet in the db we create one
    console.log("Creating a user doc");
    const newDocId = await this.updateFireBaseUser(this.userData);
    if (newDocId) {
      await this.getUserData();
    }
  }

  private handleSuccsessfulUserLoad(userDataDoc: UserData) {
    this.userData = userDataDoc;
    this.isLoadingUser = false;
    console.log("User loaded successfully");
  }
  /** Create & Update FireBaser users */
  private async updateFireBaseUser(newUserData: UserData) {
    try {
      const isNewUser = !newUserData.id;

      let updatedUser = newUserData;
      if (isNewUser) {
        updatedUser.id = uuid();
      }

      return await addDocument(COLLECTIONS.users, updatedUser.id, {
        ...newUserData,
        id: updatedUser.id,
      });
    } catch (error) {
      console.log(`error in setNewUserData: ${error}`);
      throw error;
    }
  }
}

export default new UserStoreClass();
