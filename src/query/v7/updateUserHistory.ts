import { Timestamp } from "firebase-admin/firestore";
import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  setDoc,
} from "firebase/firestore/lite";
import db from "../../firebase/firebaseInit";

export const updateUserHistory = async (
  char: string,
  data: Object,
  uid: string,
  type: string
) => {
  const history = {
    char: char,
    data: data,
    time: Timestamp.fromDate(new Date()),
  };
  const docRef = doc(db, "User", uid);
  const document = (await getDoc(docRef)).data();
  try {
    if (document!.exists && document) {
      await updateDoc(docRef, {
        [type]: arrayUnion(history),
      });
    } else {
      await setDoc(docRef, { [type]: [history] });
    }
  } catch (error) {
    throw error;
  }
};
