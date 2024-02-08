import { PropTypes } from "prop-types";
import css from "./Tooltip.module.scss";
import { useState, useEffect, useRef } from "react";

export default function Tooltip({ label, position, contents, ...props }) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef();
  const labelRef = useRef();
  const tooltipRef = useRef(null); // Initialize tooltipRef with null

  const [top, setTop] = useState(0);
  const [left, setLeft] = useState();
  const [right, setRight] = useState();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (labelRef.current && tooltipRef.current) {
      const l = labelRef.current.getBoundingClientRect();
      if (l.x > window.innerWidth / 2) {
        setLeft(`auto`);
        setRight(0);
      } else {
        setLeft(0);
        setRight("auto");
      }
      if (position === "bottom") {
        setTop(l.height);
      }
    }
  }, [position]);

  useEffect(() => {
    if (tooltipRef.current) {
      const t = tooltipRef.current.getBoundingClientRect();
      if (position === "top") {
        setTop(0 - t.height);
      }
    }
  }, [tooltipRef]);

  return (
    <div className={css.wrapper} ref={wrapperRef}>
      <label
        className={css.label}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        ref={labelRef}
      >
        {label}
      </label>
      <div
        className={`${css.tooltip} ${position ? css[position] : ""} ${
          isOpen ? css.open : ""
        }`}
        ref={tooltipRef}
        style={{
          left: left,
          right: right,
          top: top,
        }}
        {...props}
      >
        {contents}
      </div>
    </div>
  );
}

Tooltip.propTypes = {
  label: PropTypes.string,
  position: PropTypes.string,
  contents: PropTypes.element.isRequired,
};
