import { PropTypes } from "prop-types";
import css from "./Badge.module.scss";

export default function Badge({ count, color, component, ...props }) {
  return (
    <div className={css.wrapper}>
      {component}
      {count > 0 && (
        <span
          className={css.badge}
          style={{ backgroundColor: color && color }}
          {...props}
        >
          {count}
        </span>
      )}
    </div>
  );
}

Badge.propTypes = {
  count: PropTypes.number,
  color: PropTypes.string,
  component: PropTypes.element.isRequired,
};
