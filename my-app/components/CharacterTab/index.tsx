"use client";

import type { CharacterInformation } from "../../types/CharacterInformation";

import SkillTable from "@/components/Table/SkillTable";
import * as React from "react";
import { setCharacterName, setUser } from "@/store/pageStore";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export default function CharacterTab({
  information,
  user,
  characterName,
}: {
  information: CharacterInformation;
  user?: {
    displayName: string;
    uid: string;
    photoUrl: string;
  };
  characterName: string;
}) {
  React.useEffect(() => {
    setUser(user);
    setCharacterName(characterName);
  }, []);

  type Nested<T extends CharacterInformation> = {
    title: string;
    cellWidth: Record<keyof T[keyof T], number>;
  };

  return (
    <>
      <Tabs defaultValue="combo">
        <TabsList className={"flex w-fit"}>
          <TabsTrigger className="w-[150px]" value="combo">
            콤보
          </TabsTrigger>
          <TabsTrigger className="w-[150px]" value="delay">
            딜레이캐치
          </TabsTrigger>
          <TabsTrigger className="w-[150px]" value="throw">
            잡기
          </TabsTrigger>
          <TabsTrigger className="w-[150px]" value="pattern">
            주력기,패턴
          </TabsTrigger>
        </TabsList>
        <TabsContent value="combo" className={"p-y-20px"}>
          <TableLayout title="콤보">
            <SkillTable data={information.combo} />
          </TableLayout>
          <TableLayout title="벽콤보">
            <SkillTable data={information.WallCombo} />
          </TableLayout>
          <TableLayout title="추가타">
            <SkillTable data={information.Extrahit} />
          </TableLayout>
        </TabsContent>
        <TabsContent value="delay">
          <TableLayout title="콤보">
            <SkillTable data={information.combo} />
          </TableLayout>
          <TableLayout title="벽콤보">
            <SkillTable data={information.WallCombo} />
          </TableLayout>
          <TableLayout title="추가타">
            <SkillTable data={information.Extrahit} />
          </TableLayout>
        </TabsContent>

        <TabsContent value="throw">
          <TableLayout title="콤보">
            <SkillTable data={information.combo} />
          </TableLayout>
          <TableLayout title="벽콤보">
            <SkillTable data={information.WallCombo} />
          </TableLayout>
          <TableLayout title="추가타">
            <SkillTable data={information.Extrahit} />
          </TableLayout>
        </TabsContent>
        <TabsContent value="pattern">
          <TableLayout title="콤보">
            <SkillTable data={information.combo} />
          </TableLayout>
          <TableLayout title="벽콤보">
            <SkillTable data={information.WallCombo} />
          </TableLayout>
          <TableLayout title="추가타">
            <SkillTable data={information.Extrahit} />
          </TableLayout>
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
