import { PropTypes } from "prop-types";
import css from "./Toast.module.scss";
import { useEffect } from "react";

export default function Toast({ label, onChange, timer, position, ...rest }) {
  const handleClose = () => {
    setTimeout(() => {
      onChange && onChange(false);
    }, 300);
  };

  useEffect(() => {
    if (timer) {
      const animateTimeout = setTimeout(() => {
        handleClose();
        clearTimeout(animateTimeout);
      }, timer);
    }
  }, []);
  return (
    <div className={css.wrap}>
      <div
        className={`${css.toast} ${css[position]}`}
        style={{ animation: `slideUp`}}
        {...rest}
      >
        <strong>{label}</strong>
        <button onClick={handleClose}></button>
      </div>
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
