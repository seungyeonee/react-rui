import { PropTypes } from "prop-types";
import css from "./Button.module.scss";

export default function Button({
  slots,
  line,
  type,
  size,
  href,
  disabled,
  children,
  onClick,
  ...props
}) {
  const Wrapper = slots;
  const handleClick = (e) => {
    e.preventDefault();
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
      {...props}
      className={`${css.btn} ${disabled ? css.disabled : ""} ${
        size ? css[size] : ""
      } ${line && css.line}`}
      type={type}
      role="button"
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </Wrapper>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  slots: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  type: PropTypes.oneOf(["submit", "button", "reset"]),
  href: PropTypes.string,
  disabled: PropTypes.bool,
  line: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: "button",
  slots: "button",
  size: "md",
};
