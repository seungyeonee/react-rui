import { PropTypes } from "prop-types";
import css from "./Container.module.scss";

export default function Container({ children, ...rest }) {
  return <main {...rest} className={css.container}>{children}</main>;
}

Container.propTypes = {
  children: PropTypes.any,
};
