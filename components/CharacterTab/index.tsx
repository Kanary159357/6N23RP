"use client";

import type { CharacterInformation } from "../../types/CharacterInformation";

import SkillTable from "@/components/Table/SkillTable";
import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { useGetCharacterNameByPath } from "@/hooks/useGetCharacterNameByPath";

const tableMapper = {
  combo: {
    name: "콤보",
  },
  standing: {
    name: "선자세 딜캐",
  },
  up: {
    name: "앉은자세 딜캐",
  },
  MainMove: {
    name: "주력기",
  },
  Pattern: {
    name: "패턴",
  },
  Throw: {
    name: "잡기",
  },
  Extrahit: {
    name: "추가타",
  },
};

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
          {Object.keys(tableMapper)
            .filter(
              (value): value is keyof typeof tableMapper => value in tableMapper
            )
            .map((value) => (
              <TabsTrigger className="w-[150px]" value={value} key={value}>
                {tableMapper[value].name}
              </TabsTrigger>
            ))}
        </TabsList>
        <TabsContent value="combo" className={"p-y-20px"}>
          <SkillTable data={information.combo} tableType={"combo"} />
        </TabsContent>
      </Tabs>
    </>
  );
}

function TableLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="m-b-40px">
      <div className="text-2xl font-bold m-b-[10px]">{title}</div>
      {children}
    </div>
  );
}
