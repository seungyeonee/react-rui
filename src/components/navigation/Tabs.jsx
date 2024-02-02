import { PropTypes } from "prop-types";
import css from "./Tabs.module.scss";
import { useState, useEffect, useRef } from "react";

export default function Tabs({ label, scroll = true, children, ...rest }) {
  const [width, setWidth] = useState(0);
  const [left, setLeft] = useState(0);
  const tabsRef = useRef(null);

  useEffect(() => {
    setWidth(
      document.querySelectorAll("button[role=tab]")[0].getBoundingClientRect()
        .width
    );
  }, []);

  useEffect(() => {
    if (tabsRef.current) {
      const childToFind = tabsRef.current.querySelector(
        "button[aria-selected = true]"
      );
      const index = Array.prototype.indexOf.call(
        tabsRef.current.children,
        childToFind
      );
      setLeft(width * index);
    }
  }, [children, width]);
  return (
    <div
      className={css.tabs}
      aria-label={label}
      role="tablist"
      ref={tabsRef}
      {...rest}
    >
      {children}
      {scroll && (
        <span
          className={css.indicator}
          style={{ width, transform: `translateX(${left}px)` }}
        />
      )}
    </div>
  );
}

Tabs.propTypes = {
  label: PropTypes.string,
  scroll: PropTypes.bool,
  children: PropTypes.any,
};
