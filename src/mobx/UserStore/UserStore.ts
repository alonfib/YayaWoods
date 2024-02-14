import { action, makeObservable, observable } from "mobx";
import { UserData } from "./types";
import initialUser from "./initialUser";
import { User, onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../../../firebaseConfig";
import { COLLECTIONS, addDocument, getDocument, setDocument } from "../../utils/fireUtils";
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
      createFireBaseUser: action,
      clearUserData: action,
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
              if (userDataDoc) {
                this.handleSuccsessfulUserLoad(userDataDoc);
              } else if (user) {
                this.createFireBaseUser(user);
              }
              return;
            } catch (error) {
              console.log(`error in getUserData: ${error}`);
              this.isLoadingUser = false;
              throw error;
            }
          } else {
            console.log("No user found");
          }
        })
      );
    } catch (error) {
      console.error(`Login Failed: ${error}`);
    }
  }

  private handleSuccsessfulUserLoad(userDataDoc: UserData) {
    this.userData = userDataDoc;
    this.isLoadingUser = false;
    console.log("User loaded successfully");
  }

  async createFireBaseUser(firebaseUser: User) {
    try {
      console.log("Creating a new FireBase user doc");
      this.userData = {
        ...this.userData,
        id: firebaseUser.uid,
        email: firebaseUser.email ?? "",
        name: firebaseUser.displayName ?? "",
      };
      const docId = await addDocument(COLLECTIONS.users, firebaseUser.uid, this.userData);
      return docId;
    } catch (error) {
      console.log(`error in createFireBaseUser: ${error}`);
      throw error;
    }
  }

  clearUserData() {
    this.userData = { ...initialUser };
  }
}

export default new UserStoreClass();
