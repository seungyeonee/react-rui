import { useState } from "react";
import Tab from "../navigation/Tab";
import Tabs from "../navigation/Tabs";

export default function Header() {
    const [activeTabName, setActiveTabName] = useState();
  const menus = ["메뉴1","메뉴2","메뉴3"];
  return (
    <header>
      <h1>logo</h1>
      <Tabs label="sample-tab-menu">
        {menus.map((menu) => (
            <>
            <Tab
                tabName={menu}
                isSelected={activeTabName === menu ? true : false}
                onClick={() => {
                    setActiveTabName(menu);
                }}
                >
                tab1
            </Tab>
            </>
        ))}
      </Tabs>
    </header>
  );
}
