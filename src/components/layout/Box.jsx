import { PropTypes } from "prop-types";
import css from "./Box.module.scss";

export default function Box({ wrap, children, ...rest }) {
  return <div {...rest} className={`${css.box} ${wrap ? css.wrap : ''}`}>{children}</div>;
}

Box.propTypes = {
  wrap: PropTypes.bool,
  children: PropTypes.any,
};
