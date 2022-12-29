import { doc, getDoc } from "firebase/firestore/lite";
import db from "../../firebase/firebaseInit";

export async function getCharacterInformation(characterName: string) {
  const docRef = doc(db, "Character", characterName);
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      throw Error("No Character");
    }
  } catch (error) {
    throw error;
  }
}
