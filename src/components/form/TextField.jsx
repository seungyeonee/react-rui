import { PropTypes } from "prop-types";
import css from "./TextField.module.scss";
import { forwardRef, useEffect, useState } from "react";
//useImperativeHandle

const TextField = forwardRef(function TextField(
  {
    line,
    label,
    value,
    required,
    helperText,
    icon,
    iconPosition,
    disabled,
    onFocus,
    error,
    errorMessage,
    spacing,
    ...rest
  },
  ref
) {
  const [isFocus, setIsFocus] = useState(false);
  // const [pressedKeys, setPressedKeys] = useState([]);

  const handleFocus = () => {
    if (disabled) return;
    setIsFocus(true);
    ref?.current.focus();
    onFocus && onFocus();
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
        className={`${css.wrapper} ${line ? css.line : ""} ${
          isFocus ? css.active : ""
        } ${disabled ? css.disabled : ""}`}
        onClick={handleFocus}
        style={spacing && { marginTop: spacing }}
      >
        {icon && iconPosition === "left" && (
          <span className={`${css.icon} ${css.left}`} />
        )}
        {label && (
          <label
            className={`${css.label} ${
              isFocus
                ? css.active
                : !isFocus && value.length > 0
                ? `${css.active} ${css.normal}`
                : ""
            } ${icon && iconPosition && css[iconPosition]}`}
          >
            {label}
            {required && "*"}
          </label>
        )}
        <input
          className={icon && iconPosition && css[iconPosition]}
          disabled={disabled}
          onFocus={() => {
            setIsFocus(true);
          }}
          onBlur={() => {
            setIsFocus(false);
          }}
          ref={ref}
          {...rest}
        />
        {icon && iconPosition === "right" && (
          <span className={`${css.icon} ${css[iconPosition]}`} />
        )}
      </div>
      {helperText && <span className={css.help}>{helperText}</span>}
      {error && errorMessage && <p className={css.error}>{errorMessage}</p>}
    </>
  );
});

TextField.propTypes = {
  line: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.any,
  required: PropTypes.bool,
  helperText: PropTypes.string,
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(["left", "right"]),
  disabled: PropTypes.bool,
  onFocus: PropTypes.any,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  spacing: PropTypes.number,
};

TextField.defaultProps = {
  line: false,
};

export default TextField;
