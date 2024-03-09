import CharacterTab from "@/components/CharacterTab";
import Sidebar from "@/components/Sidebar/Sidebar";
import { serverDB, verifyAdmin } from "@/firebase/fireabaseAdminInit";
import { CharacterInformation } from "../../../types/CharacterInformation";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { useSearchParams } from "next/navigation";

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

  const ref = (
    await serverDB.collection("Character").doc(charName).get()
  ).data() as CharacterInformation;

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
