import { arrayRemove, doc, updateDoc } from "firebase/firestore/lite";
import db from "../../firebase/firebaseInit";
import { CharacterInformation } from "../../types/CharacterInformation";

export const deleteV7Row = async ({
  char,
  row,
  columnType,
}: {
  char: string;
  row: any;
  columnType: keyof CharacterInformation;
}) => {
  const docRef = doc(db, "Character", char);
  console.log(docRef);
  try {
    await updateDoc(docRef, { [columnType]: arrayRemove(row) });
  } catch (error) {
    throw error;
  }
};
