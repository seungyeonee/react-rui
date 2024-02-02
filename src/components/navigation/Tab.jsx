import { PropTypes } from "prop-types";
import css from "./Tab.module.scss";

export default function Tab({ tabName, isSelected, ...rest }) {
  return (
    <button
      id={`tab-${tabName}`}
      className={`${css.tab} ${isSelected ? `${css.active}` : ""}`}
      type="button"
      role="tab"
      aria-selected={isSelected}
      aria-controls={`tabpanel-${tabName}`}
      {...rest}
    />
  );
}

Tab.propTypes = {
  tabName: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
};
