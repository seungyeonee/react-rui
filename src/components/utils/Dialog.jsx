import { PropTypes } from "prop-types";
import css from "./Dialog.module.scss";

export default function Dialog({ children, ...rest }) {
  return (
    <>
      <div aria-hidden={true} />
      <div {...rest} className={css.dialog}>
        {children}
      </div>
    </>
  );
}

Dialog.propTypes = {
  children: PropTypes.any,
};
