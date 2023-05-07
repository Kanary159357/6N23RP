"use client";

import {
  TabPanel,
  Tab,
  TabList,
  Tabs,
  ReactTabsFunctionComponent,
  TabProps,
} from "react-tabs";
import type { CharacterInformation } from "../../types/CharacterInformation";
import MainMoveTable from "@/components/Table/MainMoveTable";
import PunishTable from "@/components/Table/PunishTable";

import SkillTable from "@/components/Table/SkillTable";
import ThrowTable from "@/components/Table/ThrowTable";
import * as React from "react";
import { setCharacterName, setUser } from "@/store/pageStore";

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

  const tableMeta: Nested<CharacterInformation> = {
    title: "콤보",
    cellWidth: "",
  };

  return (
    <>
      <Tabs>
        <TabList className={"flex"}>
          <StyledTab>콤보</StyledTab>
          <StyledTab>딜레이캐치</StyledTab>
          <StyledTab>잡기</StyledTab>
          <StyledTab>주력기,패턴</StyledTab>
        </TabList>
        <TabPanel className={"p-y-20px"}>
          <TableLayout title="콤보">
            <SkillTable data={information.combo} columnType={"combo"} />
          </TableLayout>
          <TableLayout title="벽콤보">
            <SkillTable data={information.WallCombo} columnType={"WallCombo"} />
          </TableLayout>
          <TableLayout title="추가타">
            <SkillTable data={information.Extrahit} columnType={"Extrahit"} />
          </TableLayout>
        </TabPanel>
        <TabPanel>
          <TableLayout title="선자세 딜캐">
            <PunishTable data={information.standing} />
          </TableLayout>
          <TableLayout title="앉은자세 딜캐">
            <PunishTable data={information.up} />
          </TableLayout>
        </TabPanel>

        <TabPanel>
          <TableLayout title="잡기">
            <ThrowTable data={information.Throw} />
          </TableLayout>
        </TabPanel>
        <TabPanel>
          <TableLayout title="주력기">
            <MainMoveTable data={information.MainMove} />
          </TableLayout>
          <TableLayout title="패턴">
            <SkillTable data={information.Pattern} columnType={"Pattern"} />
          </TableLayout>
        </TabPanel>
      </Tabs>
    </>
  );
}

const StyledTab: ReactTabsFunctionComponent<TabProps> = ({
  children,
  ...otherProps
}) => (
  <Tab
    {...otherProps}
    className={`w-[125px] cursor-pointer leading-[70px] h-[70px] text-center content-[""] transition-all focus-visible:outline-none after:content-empty after:w-0 block after:h-[2px] after:left-1/2 after:bottom-0 after:bg-red_1 aria-selected:after:w-full`}
  >
    {children}
  </Tab>
);

StyledTab.tabsRole = "Tab";

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
