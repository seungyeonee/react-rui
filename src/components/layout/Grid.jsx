import { PropTypes } from "prop-types";
import css from "./Box.module.scss";

export default function Grid({ children, ...rest }) {
  return (
    <div
      {...rest}
      className={`${css.grid}`}
    >
      {children}
    </div>
  );
}

Grid.propTypes = {
  children: PropTypes.any,
};
