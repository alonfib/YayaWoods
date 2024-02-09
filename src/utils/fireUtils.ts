import { firebaseDb } from "../../firebaseConfig";
import { collection, doc, DocumentData, getDoc, getDocs, setDoc } from "firebase/firestore";

export enum COLLECTIONS {
  users = "users",
  products = "products",
  orders = "orders",
}

export const getDocument = async (collectionName: COLLECTIONS, docName: string): Promise<DocumentData | null> => {
  try {
    const documentRef = doc(firebaseDb, collectionName, docName);
    const documentSnapshot = await getDoc(documentRef);
    return documentSnapshot.data() ?? null;
  } catch (error) {
    console.error(`Error getDocument: ${collectionName} - ${docName} - ${error}`);
    return null;
  }
};

export const getCollection = async (collectionName: COLLECTIONS): Promise<object[] | null> => {
  try {
    const querySnapshot = await getDocs(collection(firebaseDb, collectionName));
    const docs: object[] = [];
    querySnapshot.forEach((doc) => {
      docs.push(doc.data());
    });
    return docs;
  } catch (error) {
    console.error(`Error getCollection: ${collectionName} - ${error}`);
    return null;
  }
};

export const addDocument = async (collectionName: COLLECTIONS, docId: string, docData: object): Promise<string | null> => {
  try {
    const documentsCollectionRef = collection(firebaseDb, collectionName);
    const newDocumentRef = await doc(documentsCollectionRef, docId);
    await setDoc(newDocumentRef, docData);
    return newDocumentRef.id;
  } catch (error) {
    console.error(`Error addDocument: ${collectionName} - ${error}`);
    return null;
  }
};

export const setDocument = async (collectionName: COLLECTIONS, docId: string, docData: object): Promise<string | null> => {
  try {
    const documentsCollectionRef = collection(firebaseDb, collectionName);
    const newDocumentRef = await doc(documentsCollectionRef, docId);
    await setDoc(newDocumentRef, docData, { merge: true });
    return newDocumentRef.id;
  } catch (error) {
    console.error(`Error addDocument: ${collectionName} - ${error}`);
    return null;
  }
};
