import { PropTypes } from "prop-types";
import css from "./Toast.module.scss";
import { useEffect, useState } from "react";
import { bodyScroll } from "../../utils/common";

export default function Toast({ label, onChange, timer, position, ...rest }) {
  const [animate, setAnimate] = useState(false);
  const handleClose = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
      onChange && onChange(false);
      bodyScroll(true);
    }, 300);
  };

  useEffect(() => {
    if (timer) {
      const animateTimeout = setTimeout(() => {
        handleClose();
        clearTimeout(animateTimeout);
      }, timer);
    }
    bodyScroll(false);
  }, []);
  return (
    <div
      className={`${css.toast} ${css[position]} ${
        animate ? css["fade-out"] : ""
      }`}
      {...rest}
    >
      <strong>{label}</strong>
      <button onClick={handleClose}></button>
    </div>
  );
}

Toast.propTypes = {
  label: PropTypes.string,
  position: PropTypes.string,
  timer: PropTypes.number,
  onChange: PropTypes.any,
};

Toast.defaultProps = {
  position: "bottom",
};
