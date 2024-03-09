import CharacterTab from "@/components/CharacterTab";
import { serverDB, verifyAdmin } from "@/firebase/fireabaseAdminInit";
import {  CharacterInformationSchema,  } from "../../../types/CharacterInformation";
import { Metadata } from "next";
import { cookies } from "next/headers";

type Props = {
  params: { char: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: params.char,
  };
}

async function CharPage({ params }: { params: { char: string } }) {
  const charName = params.char;
  if (charName === null) return null;

  const ref =CharacterInformationSchema.parse((
    await serverDB.collection("Character").doc(charName).get()
  ).data())
  console.log(ref);
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  let user;
  if (token && token !== "") {
    const result = await verifyAdmin(token);

    user = {
      displayName: result.name as string,
      uid: result.uid as string,
      photoUrl: result.picture as string,
    };
  }
  return (
    <CharacterTab information={ref} user={user} characterName={charName} />
  );
}

export default CharPage;
