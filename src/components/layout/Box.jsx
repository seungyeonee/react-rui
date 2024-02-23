import { PropTypes } from "prop-types";
import css from "./Box.module.scss";

export default function Box({ wrap, spacing, gap, children, ...rest }) {
  return (
    <div
      {...rest}
      className={`${css.box} ${wrap ? css.wrap : ""}`}
      style={{ marginTop: spacing && spacing, gap: gap && gap }}
    >
      {children}
    </div>
  );
}

Box.propTypes = {
  wrap: PropTypes.bool,
  spacing: PropTypes.number,
  gap: PropTypes.number,
  children: PropTypes.any,
};
