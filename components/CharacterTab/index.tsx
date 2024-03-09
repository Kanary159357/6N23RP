"use client";


import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { useGetCharacterNameByPath } from "@/hooks/useGetCharacterNameByPath";
import { CharacterInformation, characterInformationProps, tableKeyTextMap } from "@/types/CharacterInformation";
import CharacterTable from "@/components/Table/CharacterTable";



export default function CharacterTab({
  information,
  user,
}: {
  information: CharacterInformation;
  user?: {
    displayName: string;
    uid: string;
    photoUrl: string;
  };
  characterName: string;
}) {
  const characterName = useGetCharacterNameByPath();

  return (
    <>
      <h1>{characterName}</h1>
      <Tabs defaultValue="combo">
        <TabsList className={"flex w-fit"}>
          {characterInformationProps
            .map((value) => (
              <TabsTrigger className="w-[150px]" value={value} key={value}>
                {tableKeyTextMap[value].name}
              </TabsTrigger>
            ))}
        </TabsList>

        {characterInformationProps.map((v)=>{
          return (
            <TabsContent value={v} className={"p-y-20px"} key={v}>
              <CharacterTable data={information[v]} tableType={v} />
            </TabsContent>
          )
        })}
      </Tabs>
    </>
  );
}
