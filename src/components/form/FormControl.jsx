import { PropTypes } from "prop-types";
import css from "./FormControl.module.scss";

export default function FormControl({
  isFocus,
  label,
  error,
  errorMessage,
  spacing,
  helperText,
  icon,
  iconPosition,
  htmlFor,
  children,
  ...rest
}) {
  return (
    <>
      <div
        className={`${css.container} ${error ? css.error : ""} ${
          isFocus ? css.focus : ""
        }`}
        style={{ marginTop: spacing && spacing }}
        {...rest}
      >
        {label && <label htmlFor={htmlFor}>{label}</label>}
        <div className={css.contents}>
          {icon && iconPosition === "left" && (
            <span className={`${css.icon} ${css.left}`} />
          )}
          {children}
          {icon && iconPosition === "right" && (
            <span className={`${css.icon} ${css.right}`} />
          )}
        </div>
      </div>
      {helperText && <span className={css.help}>{helperText}</span>}
      {error && errorMessage && <p>{errorMessage}</p>}
    </>
  );
}

FormControl.propTypes = {
  isFocus: PropTypes.bool,
  label: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  spacing: PropTypes.number,
  helperText: PropTypes.string,
  icon: PropTypes.string,
  iconPosition: PropTypes.string,
  htmlFor: PropTypes.string,
  children: PropTypes.any,
};
