import React, { useState, useRef, useEffect } from "react";
import { PropTypes } from "prop-types";
import css from "./Select.module.scss";
import useOutsideClick from "../../hooks/useOutsideClick";
import useKeyPress from "../../hooks/useKeyPress";

const Select = ({ label, value, children, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);
  const inputRefs = useRef([]);
  const isOutsideClick = useOutsideClick(selectRef);
  const keyPress = useKeyPress();
  useEffect(() => {
    if (isOutsideClick === true) {
      setIsOpen(false);
    }
  }, [isOutsideClick]);
  useEffect(() => {
    if (keyPress === "Enter" && document.activeElement === selectRef.current) {
      setIsOpen(true);
      setTimeout(() => {
        inputRefs.current[0].current.focus();
      }, 10);
    } else if (keyPress === "Tab" && isOpen) {
      setIsOpen(false);
    }
  }, [keyPress]);
  return (
    <>
      <div
        className={`${css.combobox} ${isOpen ? css.open : ""}`}
        role="combobox"
        tabIndex={0}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        ref={selectRef}
      >
        {label && (
          <div className="select-label" onClick={onChange}>
            {value ? value : label}
          </div>
        )}
        <div className={`${css.options} ${isOpen ? css.open : ""}`}>
          {React.Children.map(children, (child, index) => {
            inputRefs.current[index] =
              inputRefs.current[index] || React.createRef();
            return React.cloneElement(child, {
              onClick: onChange,
              selected: child.props.children === value ? true : false,
              ref: inputRefs.current[index],
            });
          })}
        </div>
      </div>
    </>
  );
};

Select.propTypes = {
  label: PropTypes.any,
  value: PropTypes.any,
  onChange: PropTypes.any,
  children: PropTypes.any,
};

export default Select;
