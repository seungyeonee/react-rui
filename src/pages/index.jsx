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
  Select,
  Box,
  Tooltip,
} from "../components";

const mockData = [
  {
    label: "Option 1",
    value: "a",
  },
  {
    label: "Option 2",
    value: "v",
  },
  {
    label: "Option 3",
    value: "b",
  },
];

export default function MainPage() {
  const [activeTabName, setActiveTabName] = useState("tab1");
  const [count, setCount] = useState(2);
  const [value, setValue] = useState();
  const inputRef = useRef();
  const selectRef = useRef();

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
        <hr />
        <h3>Box + Select + Button</h3>
        <Box>
          <Select
            data={mockData}
            defaultValue={1}
            value={value}
            onChange={setValue}
            ref={selectRef}
          />
          <Button
            onClick={() => {
              alert(selectRef.current.value, value);
            }}
          >
            SUBMIT
          </Button>
        </Box>
        <hr />
        <h3>Tooltip</h3>
        <Box wrap>
          <Tooltip
            label="label Text"
            position="top"
            contents={<div>긴 툴팁 컨텐츠는 이렇게 표시됩니다.</div>}
          />
          <Tooltip
            label="label Text"
            position="bottom"
            contents={<div>툴팁 컨텐츠</div>}
          />
          <Tooltip
            label="label Text"
            position="bottom"
            contents={<div>툴팁 컨텐츠</div>}
          />
          <Tooltip
            label="label Text"
            position="bottom"
            contents={<div>긴 툴팁 컨텐츠는 이렇게 표시됩니다.</div>}
          />
          <Tooltip
            label="label Text"
            position="bottom"
            contents={<div>툴팁 컨텐츠</div>}
          />
        </Box>
      </Container>
    </>
  );
}
