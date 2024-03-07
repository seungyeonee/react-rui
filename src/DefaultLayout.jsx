import { Outlet } from "react-router-dom";
import Header from "./components/common/header";
import Lnb from "./components/common/LNB";
import { useState } from "react";

const DefaultLayout = () => {
const [isOpenLnb, setIsOpenLnb] = useState(false)
  return (
    <>
      <Header open={isOpenLnb}/>
      <div className="wrapper">
        <Lnb open={isOpenLnb} setOpen={(e)=>{
            setIsOpenLnb(e)
        }}/>
        <Outlet context={{ isOpenLnb }} />
      </div>
    </>
  );
};

export default DefaultLayout;
