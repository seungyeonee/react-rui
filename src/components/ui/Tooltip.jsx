import { PropTypes } from "prop-types";
import css from "./Tooltip.module.scss";
import { useState, useEffect, useRef } from "react";

export default function Tooltip({
  label,
  gap = 5,
  position = "top",
  contents,
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef();
  const labelRef = useRef(null);
  const tooltipRef = useRef(null);

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
      if (position === "top" || position === "bottom") {
        if (l.x > window.innerWidth / 2) {
          setLeft(`auto`);
          setRight(0);
        } else {
          setLeft(0);
          setRight("auto");
        }
      }

      if (position === "bottom") {
        setTop(l.height);
      }
    }
  }, [position]);

  useEffect(() => {
    if (tooltipRef.current) {
      const t = tooltipRef.current.getBoundingClientRect();
      const l = labelRef.current.getBoundingClientRect();

      // left, right 세로 가운데 정렬
      if (position === "left" || position === "right") {
        setTop(0 - (t.height / 2 - l.height / 2));
      }

      // left 정렬
      if (position === "left") {
        setLeft(0 - t.width - gap);
        return;
      }

      // right 정렬
      if (position === "right") {
        setRight(0 - t.width - gap);
        return;
      }

      // top 정렬
      if (position === "top") {
        setTop(0 - t.height - gap);
        return;
      }

      // bottom 정렬
      if (position === "bottom") {
        setTop(0 + l.height + gap);
        return;
      }
    }
  }, [isOpen]);

  return (
    <div
      className={css.wrapper}
      onMouseEnter={() => {
        setIsOpen(true);
      }}
      onMouseLeave={() => {
        setIsOpen(false);
      }}
      ref={wrapperRef}
    >
      <div
        role="tooltip"
        className={css.label}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        ref={labelRef}
      >
        {label}
      </div>
      {isOpen && (
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
      )}
    </div>
  );
}

Tooltip.propTypes = {
  label: PropTypes.string,
  gap: PropTypes.number,
  position: PropTypes.string,
  contents: PropTypes.element.isRequired,
};

Tooltip.def
