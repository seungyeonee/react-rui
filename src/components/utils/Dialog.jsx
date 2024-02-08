import { PropTypes } from "prop-types";
import css from "./Dialog.module.scss";

export default function Dialog({ children, ...rest }) {
  return <main {...rest} className={css.dialog}>{children}</main>;
}

Dialog.propTypes = {
  children: PropTypes.any,
};
