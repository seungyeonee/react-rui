import { PropTypes } from "prop-types";
import css from "./BottomSheet.module.scss";
import { forwardRef, useEffect } from "react";

const BottomSheet = forwardRef(function BottomSheet(
  { children, onClose, ...rest },
  ref
) {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);
  return (
    <div className={css.wrapper}>
      <div className={css.box} {...rest} ref={ref}>
        {children}
        <button className={css.close} onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
});

BottomSheet.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.any.isRequired,
};

export default BottomSheet;
