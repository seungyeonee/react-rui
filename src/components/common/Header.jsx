import css from "./Header.module.scss";
import { PropTypes } from "prop-types";

export default function Header({ open }) {
  return (
    <header className={`${css.header} ${open ? css.open : ''}`}>
      <h1>logo</h1>
    </header>
  );
}

Header.propTypes = {
  open: PropTypes.bool,
};
