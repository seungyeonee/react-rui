import { PropTypes } from "prop-types";
import css from "./FormControl.module.scss";

export default function FormControl({ children, ...rest }) {
  return <div {...rest} className={css.container}>{children}</div>;
}

FormControl.propTypes = {
  children: PropTypes.any,
};
