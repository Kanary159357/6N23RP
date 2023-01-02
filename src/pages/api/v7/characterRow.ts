import { requestBodyToJson } from "../../../utils/request";
import { serverDB } from "../../../firebase/fireabaseAdminInit";
import {} from "firebase-admin";
import { FieldValue } from "firebase-admin/firestore";
import { APIRoute } from "astro";
import { doc } from "firebase/firestore/lite";
export const del: APIRoute = async ({ params, request }) => {
  const { characterName, row, columnType } = await requestBodyToJson<{
    characterName: string;
    row: any;
    columnType: string;
  }>(request.body);
  const docRef = await serverDB.collection("Character").doc(characterName);
  try {
    await docRef.update({ [columnType]: FieldValue.arrayRemove(row) });
    return new Response(null, { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 500,
    });
  }
};

export const post: APIRoute = async ({ params, request }) => {
  const { characterName, row, columnType } = await requestBodyToJson<{
    characterName: string;
    row: any;
    columnType: string;
  }>(request.body);
  const docRef = await serverDB.collection("Character").doc(characterName);
  try {
    await docRef.update({ [columnType]: FieldValue.arrayUnion(row) });
    return new Response(null, { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 500,
    });
  }
};

export const put: APIRoute = async ({ params, request }) => {
  const { characterName, oldRow, columnType, newRow } =
    await requestBodyToJson<{
      characterName: string;
      oldRow: any;
      newRow: any;
      columnType: string;
    }>(request.body);
  const docRef = serverDB.collection("Character").doc(characterName);
  const batch = serverDB.batch();
  try {
    batch.update(docRef, { [columnType]: FieldValue.arrayRemove(oldRow) });
    batch.update(docRef, { [columnType]: FieldValue.arrayUnion(newRow) });

    await batch.commit();

    return new Response(null, { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 500,
    });
  }
};
