import { PropTypes } from "prop-types";
import css from "./Lnb.module.scss";

const Lnb = ({ open, setOpen }) => {
  return (
    <div className={`${css.lnb} ${open ? css.open : ""}`}>
      <nav>
        <a>MENU1</a>
        <a>MENU2</a>
        <a>MENU3</a>
        <a>MENU4</a>
      </nav>
      <button onClick={()=>{setOpen(!open)}} aria-label={`메뉴 ${open ? '닫기' : '열기'}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="hamburger-icon"
          width="30"
          height="30"
          viewBox="0 0 60 60"
        >
          <rect
            className="top"
            x="0"
            y="5"
            rx="4"
            ry="4"
            width="100%"
            height="8"
            style={open ? {transform: 'rotate(45deg)', transformOrigin: '5px 20px'} : { transform: 'rotate(0)'}}
          />
          <rect
            className="middle"
            x="0"
            y="27.5"
            rx="4"
            ry="4"
            width="100%"
            height="8"
            style={open ? {opacity: 0} : {opacity : 1}}
          />
          <rect
            className="bottom"
            x="0"
            y="50"
            rx="4"
            ry="4"
            width="100%"
            height="8"
            style={open ? {transform: 'rotate(-45deg)', transformOrigin: '1px 41px'} : { transform: 'rotate(0)'}}
          />
        </svg>
       {/*  <input
          id="toggle"
          name="toggle"
          type="checkbox"
          onChange={handleChange}
        /> */}
      </button>
    </div>
  );
};

Lnb.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.any,
};

export default Lnb;
