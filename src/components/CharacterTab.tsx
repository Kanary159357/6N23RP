import {
  TabPanel,
  Tab,
  TabList,
  Tabs,
  ReactTabsFunctionComponent,
  TabProps,
} from "react-tabs";

export default function CharacterTab({ information }) {
  return (
    <Tabs>
      <TabList className={"flex"}>
        <StyledTab>딜레이캐치</StyledTab>
        <StyledTab>콤보</StyledTab>
        <StyledTab>잡기</StyledTab>
        <StyledTab>주력기</StyledTab>
        <StyledTab>패턴</StyledTab>
      </TabList>
      <TabPanel>{JSON.stringify(information)}</TabPanel>
      <TabPanel>2</TabPanel>
      <TabPanel>3</TabPanel>
      <TabPanel>4</TabPanel>
      <TabPanel>5</TabPanel>
    </Tabs>
  );
}

const StyledTab: ReactTabsFunctionComponent<TabProps> = ({
  children,
  ...otherProps
}) => (
  <Tab
    {...otherProps}
    className={`w-125px cursor-pointer leading-70px	text-center content-["21r21"] transition-all focus-visible:outline-none after:(content-empty w-0 block h-2px left-1/2 bottom-0 bg-red_1 ) aria-selected:after:w-full`}
  >
    {children}
  </Tab>
);

StyledTab.tabsRole = "Tab";
