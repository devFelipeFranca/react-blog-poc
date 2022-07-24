import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

type TabsContainerProps = {
  tabs: React.ReactNode[];
  tabPanels: React.ReactNode[];
};

export const TabsContainer: React.FC<TabsContainerProps> = ({
  tabs,
  tabPanels,
}) => {
  return (
    <Tabs variant="soft-rounded" colorScheme="blue">
      <TabList>
        {tabs.map((tab, index) => (
          <Tab key={index}>{tab}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {tabPanels.map((tabPanel, index) => (
          <TabPanel key={index}>{tabPanel}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};
