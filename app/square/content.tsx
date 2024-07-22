"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { List } from "./list";
import {
  DEV_INCUBATION_EVENT_ID,
  DEV_PARTNER_EVENT_ID,
  PRODUCTION_INCUBATION_EVENT_ID,
  PRODUCTION_PARTNER_EVENT_ID,
} from "@/constants/event";
import { EventsRoleValue, ApproveValue, TabItem } from "./types";
import { useState } from "react";
import styles from "./square.module.css";
import { IsProductionServer } from "@/lib";

const isProduction = IsProductionServer();

const tabLists = [
  // {
  //   title: TabItem.ADVISORS,
  //   props: {
  //     events: isProduction ? PRODUCTION_PARTNER_EVENT_ID : DEV_PARTNER_EVENT_ID,
  //     roleType: EventsRoleValue.PERSONAL,
  //     approve: ApproveValue.APPROVED,
  //     email: 1,
  //   },
  // },
  {
    title: TabItem.PARTNERS,
    props: {
      events: isProduction ? PRODUCTION_PARTNER_EVENT_ID : DEV_PARTNER_EVENT_ID,
      roleType: EventsRoleValue.PROJECT,
      approve: ApproveValue.APPROVED,
    },
  },
  // {
  //   title: TabItem.PROJECTS,
  //   props: {
  //     events: isProduction
  //       ? PRODUCTION_INCUBATION_EVENT_ID
  //       : DEV_INCUBATION_EVENT_ID,
  //     roleType: EventsRoleValue.PROJECT,
  //     approve: ApproveValue.APPROVED,
  //   },
  // },
];

export function Content() {
  const [activeTab, setActiveTab] = useState<string>(TabItem.PARTNERS);
  const onValueChange = (value: string) => {
    const currentDom = document.getElementById(activeTab);
    currentDom.classList.remove(styles["slide-show"]);

    const activeDom = document.getElementById(value);
    activeDom.classList.add(styles["slide-show"]);
    setActiveTab(value);
  };

  return (
    <main className="mb-12">
      <Tabs
        defaultValue={TabItem.PARTNERS}
        onValueChange={onValueChange}
        className="w-full"
      >
        <TabsList className="gap-8 px-0">
          {tabLists.map((tab) => (
            <TabsTrigger
              className="items-start text-description hover:font-medium data-[state=active]:border-b-2 data-[state=active]:border-main -mb-1 data-[state=active]:text-typography data-[state=active]:font-medium px-0"
              value={tab.title}
              key={tab.title}
            >
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabLists.map((tab) => (
          <TabsContent
            id={tab.title}
            value={tab.title}
            key={tab.title}
            className="mt-6"
          >
            <List {...tab.props} type={tab.title} />
          </TabsContent>
        ))}
      </Tabs>
    </main>
  );
}
