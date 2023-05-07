import { CharacterInformation } from "../../types/CharacterInformation";

export async function deleteRow({
  characterName,
  columnType,
  row,
}: {
  characterName: string;
  columnType: keyof CharacterInformation;
  row: any;
}) {
  try {
    await fetch("/api/v7/characterRow", {
      body: JSON.stringify({
        characterName,
        columnType,
        row,
      }),
      method: "DELETE",
    });
  } catch {}
}
