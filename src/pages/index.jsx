import { useState, useRef } from "react";
import {
  Button,
  Badge,
  Container,
  Tabs,
  Tab,
  TabPanel,
  FormControl,
  TextField,
} from "../components";

export default function MainPage() {
  const [activeTabName, setActiveTabName] = useState("tab1");
  const [count, setCount] = useState(2);
  const inputRef = useRef();
  return (
    <>
      <Container>
        <h3>Button</h3>
        <Button>버튼</Button>

        <hr />
        <h3>Badge + Button</h3>
        <Badge count={count} component={<Button>버튼</Button>} />
        <br />
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          ▲
        </button>
        <button
          onClick={() => {
            if (count === 0) return;
            setCount((prev) => prev - 1);
          }}
        >
          ▼
        </button>
        <hr />
        <h3>Tabs, Tab, TabPanel</h3>
        <Tabs label="sample-tab-menu">
          <Tab
            tabName="tab1"
            isSelected={activeTabName === "tab1" ? true : false}
            onClick={() => {
              setActiveTabName("tab1");
            }}
          >
            tab1
          </Tab>
          <Tab
            tabName="tab2"
            isSelected={activeTabName === "tab2" ? true : false}
            onClick={() => {
              setActiveTabName("tab2");
            }}
          >
            tab2
          </Tab>
          <Tab
            tabName="tab3"
            isSelected={activeTabName === "tab3" ? true : false}
            onClick={() => {
              setActiveTabName("tab3");
            }}
          >
            tab3
          </Tab>
        </Tabs>
        <TabPanel
          tabName="tab1"
          isSelected={activeTabName === "tab1" ? false : true}
        >
          TabPanel1
        </TabPanel>
        <TabPanel
          tabName="tab2"
          isSelected={activeTabName === "tab2" ? false : true}
        >
          TabPanel2
        </TabPanel>
        <TabPanel
          tabName="tab3"
          isSelected={activeTabName === "tab3" ? false : true}
        >
          TabPanel3
        </TabPanel>
        <hr />
        <h3>FormControl, TextField</h3>
        <FormControl>
          <TextField
            label="labelText"
            type="text"
            helperText="helperText"
            icon="close"
            iconPosition="right"
            maxLength={6}
            ref={inputRef}
          />
        </FormControl>
      </Container>
    </>
  );
}
