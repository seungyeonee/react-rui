import { PropTypes } from "prop-types";
import css from "./Button.module.scss";
import { forwardRef } from "react";

const Button = forwardRef(function Button(
  {
    slots,
    line,
    type,
    size,
    href,
    disabled,
    children,
    onClick,
    flex,
    spacing,
    ...rest
  },
  ref
) {
  const Wrapper = slots;
  const handleClick = () => {
    if (disabled) return;
    if (href) {
      window.open(
        href,
        "_blank",
        "rel=noopener noreferrer, width=" +
          screen.availWidth +
          ",height=" +
          screen.availHeight +
          ""
      );
      return;
    }
    onClick && onClick();
  };
  return (
    <Wrapper
      className={`${css.btn} ${disabled ? css.disabled : ""} ${
        size ? css[size] : ""
      } ${line && css.line}`}
      type={type}
      onClick={handleClick}
      disabled={disabled}
      style={{ flex: flex && flex, marginTop: spacing && spacing }}
      ref={ref}
      {...rest}
    >
      {children}
    </Wrapper>
  );
});

export default Button;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  slots: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  type: PropTypes.oneOf(["submit", "button", "reset"]),
  href: PropTypes.string,
  disabled: PropTypes.bool,
  line: PropTypes.bool,
  onClick: PropTypes.func,
  flex: PropTypes.number,
  spacing: PropTypes.number,
};

Button.defaultProps = {
  type: "button",
  slots: "button",
  size: "md",
};
