import { PropTypes } from "prop-types";
import css from "./Popup.module.scss";

export default function Popup({ children, ...rest }) {
  return <main {...rest} className={css.popup}>{children}</main>;
}

Popup.propTypes = {
  children: PropTypes.any,
};
