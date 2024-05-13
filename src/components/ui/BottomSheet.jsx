import { PropTypes } from "prop-types";
import css from "./BottomSheet.module.scss";

export default function BottomSheet({ count, color, component, ...props }) {
  return (
    <div className={css.wrapper}>
      {component}
      {count > 0 && (
        <span
          className={css.bottomsheet}
          style={{ backgroundColor: color && color }}
          {...props}
        >
          {count}
        </span>
      )}
    </div>
  );
}

BottomSheet.propTypes = {
  count: PropTypes.number,
  color: PropTypes.string,
  component: PropTypes.element.isRequired,
};
