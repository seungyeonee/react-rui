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
  Toast,
  Dialog
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
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [isOpenToast, setIsOpenToast] = useState(false);
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const inputRef = useRef();
  const inputRef2 = useRef();
  const selectRef = useRef();

  // useEffect(() => {
  //   console.log(inputRef);
  // }, [inputRef]);
  return (
    <>
      <Container>
        <h3>Button</h3>
        <Button onClick={()=>{setIsOpenDialog(true)}}>버튼</Button>
        <Button line>버튼</Button>

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
        <FormControl
          label="labelText"
          icon="close"
          iconPosition="right"
          isFocus={
            (!(text || text2) && isFocus) || text.length > 0 || text2.length > 0
          }
          onFocus={() => {
            setIsFocus(true);
          }}
          onBlur={() => {
            setIsFocus(false);
          }}
          helperText="helperText"
        >
          <TextField
            name="text1"
            type="text"
            maxLength={6}
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            ref={inputRef}
          />
          <span>-</span>
          <TextField
            name="text2"
            type="text"
            maxLength={6}
            value={text2}
            onChange={(e) => {
              setText2(e.target.value);
            }}
            ref={inputRef2}
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
        <h4>{`label="label Text1" position="top" contents={<div>??</div>}`}</h4>
        <Box>
          <Tooltip
            label="label Text1"
            position="top"
            contents={<div>Tooltip Contents.</div>}
          />
        </Box>
        <hr />
        <h3>Toast</h3>
        <h4>{`position="bottom" timer={3000}`}</h4>
        <Box>
          <Button
            onClick={() => {
              !isOpenToast && setIsOpenToast(true);
            }}
          >
            Toast!
          </Button>
          {isOpenToast && (
            <Toast
              label="label Text1"
              position="bottom"
              timer={3000}
              onChange={setIsOpenToast}
            />
          )}
        </Box>
      </Container>
      <Dialog />
    </>
  );
}
