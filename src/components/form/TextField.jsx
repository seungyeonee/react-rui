import { PropTypes } from "prop-types";
import css from "./TextField.module.scss";
import { forwardRef, useEffect, useState } from "react";
//useImperativeHandle

const TextField = forwardRef(function TextField(
  {
    label,
    required,
    helperText,
    icon,
    iconPosition,
    disabled,
    onFocus,
    onBlur,
    ...rest
  },
  ref
) {
  const [isFocus, setIsFocus] = useState(false);
  // const [pressedKeys, setPressedKeys] = useState([]);

  const handleFocus = () => {
    if (disabled) return;
    setIsFocus(true);
    ref.current.focus();
    onFocus && onFocus();
  };

  const handleBlur = () => {
    setIsFocus(false);
    onBlur && onBlur();
  };

  const handleKeyUp = (event) => {
    if (event.key === "Tab" && document.activeElement === ref?.current) {
      setIsFocus(true);
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <>
      <div
        className={`${css.wrapper} ${isFocus ? css.active : ""} ${
          disabled ? css.disabled : ""
        }`}
        onClick={handleFocus}
      >
        {icon && iconPosition === "left" && (
          <span className={`${css.icon} ${css.left}`} />
        )}
        {label && (
          <label
            className={`${css.label} ${
              isFocus
                ? css.active
                : !isFocus && ref?.current?.value.length > 0
                ? `${css.active} ${css.normal}`
                : ""
            } ${icon && iconPosition && css[iconPosition]}`}
          >
            {label}
            {required && "*"}
          </label>
        )}
        <input
          onBlur={handleBlur}
          className={icon && iconPosition && css[iconPosition]}
          disabled={disabled}
          ref={ref}
          {...rest}
        />
        {icon && iconPosition === "right" && (
          <span className={`${css.icon} ${css[iconPosition]}`} />
        )}
      </div>
      {helperText && <span className={css.help}>{helperText}</span>}
    </>
  );
});

TextField.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  helperText: PropTypes.string,
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(["left", "right"]),
  disabled: PropTypes.bool,
  onFocus: PropTypes.any,
  onBlur: PropTypes.any,
};

export default TextField;
