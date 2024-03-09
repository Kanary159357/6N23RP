import { serverDB } from "@/firebase/fireabaseAdminInit";
import { FieldValue } from "firebase-admin/firestore";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  const { characterName, columnType, oldRow, newRow } = await request.json();

  const docRef = serverDB.collection("Character").doc(characterName);
  const batch = serverDB.batch();
  try {
    batch.update(docRef, { [columnType]: FieldValue.arrayRemove(oldRow) });
    batch.update(docRef, { [columnType]: FieldValue.arrayUnion(newRow) });

    await batch.commit();
    return NextResponse.json({});
  } catch (error) {}
}

export async function DELETE(request: Request) {
  // const { characterName, columnType, row } = await request.json();

  return new Response(null, { status: 200 });
}

export async function POST(request: Request) {
  const { characterName, columnType, row } = await request.json();
  const docRef = serverDB.collection("Character").doc(characterName);

  try {
    await docRef.update({ [columnType]: FieldValue.arrayUnion(row) });

    return NextResponse.json({});
  } catch (error) {}
}
