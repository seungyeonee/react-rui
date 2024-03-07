import { PropTypes } from "prop-types";
import css from "./Container.module.scss";
import { useOutletContext } from "react-router-dom";
import { forwardRef } from "react";

const Container = forwardRef(function Container({ children, ...rest }, ref) {
  const { isOpenLnb } = useOutletContext();
  return (
    <main
      {...rest}
      className={`${css.container} ${isOpenLnb ? css.open : ""}`}
      ref={ref}
    >
      {children}
    </main>
  );
});

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
