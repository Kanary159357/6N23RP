import {
  TabPanel,
  Tab,
  TabList,
  Tabs,
  ReactTabsFunctionComponent,
  TabProps,
} from "react-tabs";
import db from "../firebase/firebaseInit";
import type { CharacterInformation } from "../types/CharacterInformation";
import MainMoveTable from "./Table/MainMoveTable";
import PunishTable from "./Table/PunishTable";

import SkillTable from "./Table/SkillTable";
import ThrowTable from "./Table/ThrowTable";

export default function CharacterTab({
  information,
}: {
  information: CharacterInformation;
}) {
  const temp = db;
  return (
    <Tabs>
      <TabList className={"flex"}>
        <StyledTab>딜레이캐치</StyledTab>
        <StyledTab>콤보</StyledTab>
        <StyledTab>잡기</StyledTab>
        <StyledTab>주력기,패턴</StyledTab>
      </TabList>
      <TabPanel className={"p-y-20px"}>
        <TableLayout title="선자세 딜캐">
          <PunishTable data={information.standing} />
        </TableLayout>
        <TableLayout title="앉은자세 딜캐">
          <PunishTable data={information.up} />
        </TableLayout>
      </TabPanel>
      <TabPanel>
        <TableLayout title="콤보">
          <SkillTable data={information.combo} />
        </TableLayout>
        <TableLayout title="벽콤보">
          <SkillTable data={information.WallCombo} />
        </TableLayout>
        <TableLayout title="추가타">
          <SkillTable data={information.Extrahit} />
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
          <SkillTable data={information.Pattern} />
        </TableLayout>
      </TabPanel>
    </Tabs>
  );
}

const StyledTab: ReactTabsFunctionComponent<TabProps> = ({
  children,
  ...otherProps
}) => (
  <Tab
    {...otherProps}
    className={`w-125px cursor-pointer leading-70px h-70px	text-center content-["21r21"] transition-all focus-visible:outline-none after:(content-empty w-0 block h-2px left-1/2 bottom-0 bg-red_1 ) aria-selected:after:w-full`}
  >
    {children}
  </Tab>
);

StyledTab.tabsRole = "Tab";

function TableLayout({ title, children }) {
  return (
    <div className="m-b-40px">
      <div className="text-2xl font-bold m-b-10px">{title}</div>
      {children}
    </div>
  );
}
