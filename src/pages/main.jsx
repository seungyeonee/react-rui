import { useState, useRef, useEffect } from "react";
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
  Option,
  Box,
  Tooltip,
  Toast,
  Dialog,
  BottomSheet,
} from "../components";

const tabsData = [
  {
    id: 0,
    title: "Menu1",
    content: "Contents1",
  },
  {
    id: 1,
    title: "Menu2",
    content: "Contents2",
  },
  {
    id: 2,
    title: "Menu3",
    content: "Contents3",
  },
];

export default function MainPage() {
  const [activeMenu, setActiveMenu] = useState(0);
  const [count, setCount] = useState(2);
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.textContent);
  };

  const [isFocus, setIsFocus] = useState(false);
  const [isOpenToast, setIsOpenToast] = useState(false);
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [isOpenBottom, setIsOpenBottom] = useState(false);
  const inputRef = useRef();
  const inputRef2 = useRef();

  const buttonRef = useRef();
  useEffect(() => {
    if (!isOpenDialog && document.activeElement !== buttonRef.current) {
      buttonRef?.current?.focus();
    }
  }, [isOpenDialog]);
  return (
    <>
      <Container aria-hidden={isOpenDialog || isOpenToast ? true : false}>
        <h2>Button</h2>
        <Button
          ref={buttonRef}
          onClick={() => {
            setIsOpenDialog(true);
          }}
        >
          버튼
        </Button>
        <Button
          line
          onClick={() => {
            setIsOpenBottom(true);
          }}
        >
          버튼
        </Button>

        <hr />
        <h2>Badge + Button</h2>
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
        <h2>Tabs, Tab, TabPanel</h2>
        <Tabs label="sample-tab-menu">
          {tabsData.map((item) => (
            <Tab
              tabName={`tab${item.id}`}
              isSelected={item.id === activeMenu ? true : false}
              onClick={() => {
                setActiveMenu(item.id);
              }}
              key={item.id}
            >
              {item.title}
            </Tab>
          ))}
        </Tabs>
        <div style={{ overflow: "hidden" }}>
          <div
            style={{
              display: "flex",
              marginTop: 10,
              transform: `translateX(calc(-${activeMenu * 100}% - ${
                activeMenu * 10
              }px))`,
              transition: "transform .3s ease",
            }}
          >
            {Array.from({ length: 3 }, (_, i) => i).map((item, index) => (
              <TabPanel tabName={`tab${index}`} key={index}>
                {item}
              </TabPanel>
            ))}
          </div>
        </div>
        <hr />
        <h2>FormControl, TextField</h2>
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
          htmlFor="text1"
        >
          <TextField
            id="text1"
            name="text1"
            type="text"
            aria-label="text1"
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
            aria-label="text2"
            maxLength={6}
            value={text2}
            onChange={(e) => {
              setText2(e.target.value);
            }}
            ref={inputRef2}
          />
        </FormControl>
        <hr />
        <h2>Box + Select + Button</h2>
        <FormControl>
          <Select
            label="Select an option"
            value={selectedValue}
            onChange={handleChange}
          >
            <Option value={10}>Option 1</Option>
            <Option value={20}>Option 2</Option>
            <Option value={30}>Option 3</Option>
          </Select>
        </FormControl>
        <hr />
        <h2>Tooltip</h2>
        <h3>{`label="label Text1" position="top" contents={<div>??</div>}`}</h3>
        <Box>
          <Tooltip
            label="label Text1"
            position="top"
            contents={<div>Tooltip Contents.</div>}
          />
        </Box>
        <hr />
        <h2>Toast</h2>
        <h3>{`position="bottom" timer={3000}`}</h3>
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
      {isOpenDialog && (
        <Dialog
          title="다이얼로그 타이틀"
          isOpen={isOpenDialog}
          onClose={() => {
            setIsOpenDialog(false);
          }}
        >
          <p>다이얼로그 컨텐츠</p>
        </Dialog>
      )}
      {isOpenBottom && (
        <BottomSheet title="title text" onClose={() => {}}>
          BottomSheet test
        </BottomSheet>
      )}
    </>
  );
}
