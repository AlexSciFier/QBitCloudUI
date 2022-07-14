import React, { useState } from "react";
import InfoTab from "./Tabs/InfoTab";
import SpeedTab from "./Tabs/SpeedTab";

export function TabView() {
  const tabs = [
    {
      header: "General",
      body: <InfoTab />,
    },
    {
      header: "Trackers",
      body: <div>Trackers</div>,
    },
    {
      header: "Peers",
      body: <div>Peers</div>,
    },
    {
      header: "Content",
      body: <div>Content</div>,
    },
    {
      header: "Speed",
      body: <SpeedTab />,
    },
  ];

  const [curentTab, setCurentTab] = useState(0);

  return (
    <div className="w-full px-3">
      <ul className="flex w-full text-lg overflow-x-auto">
        {tabs.map((tab, idx) => (
          <TabHeader
            title={tab.header}
            isActive={idx === curentTab}
            onClick={(e) => setCurentTab(idx)}
            key={idx}
          />
        ))}
      </ul>
      <div className="mt-3">{tabs[curentTab].body}</div>
    </div>
  );
}
function TabHeader({ title, isActive, onClick }) {
  return (
    <li
      className={`px-4 py-1 hover:bg-primary/10 hover:cursor-pointer border-primary ${
        isActive ? "border-b-2" : ""
      }`}
      onClick={onClick}
    >
      {title}
    </li>
  );
}
