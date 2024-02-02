import { PropTypes } from "prop-types";
import css from "./TabPanel.module.scss";

export default function TabPanel({ tabName, isSelected, ...rest }) {
  return (
    <div
      id={`tabpanel-${tabName}`}
      role="tabpanel"
      className={css.contents}
      hidden={isSelected}
      aria-labelledby={`tab-${tabName}`}
      aria-hidden={isSelected}
      {...rest}
    />
  );
}

TabPanel.propTypes = {
  tabName: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
};
