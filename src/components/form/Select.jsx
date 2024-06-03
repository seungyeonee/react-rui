import React, { useState, useRef, useEffect } from "react";

import { PropTypes } from "prop-types";
import css from "./Select.module.scss";
import useKeyPress from "../../hooks/useKeyPress";

const Select = ({ label, value, children, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const selectRef = useRef(null);
  const keyPress = useKeyPress();
  const inputRefs = useRef([]);
  /* S: 셀렉트박스 value값 업데이트시 닫기 */
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [value]);
  /* E: 셀렉트박스 value값 업데이트시 닫기 */

  /* S: keyPress이벤트 처리(Enter, Tab) */
  useEffect(() => {
    if (document.activeElement === selectRef.current) {
      if (keyPress === "Enter") {
        setIsOpen(true);
        console.log(selectRef.current);
        console.log(children[0].props.value);
        setTimeout(() => {
          console.log(
            document.querySelector(`[data-value~="${children[0].props.value}"]`)
          );
          document
            .querySelector(`[data-value~="${children[0].props.value}"]`)
            .focus();
        }, 300);
      } else if (keyPress === "Tab") {
        setIsOpen(false);
      }
    }
  }, [keyPress]);
  /* E: keyPress이벤트 처리(Enter, Tab) */

  /* S: 셀렉트박스 Options visible , resize시 옵션영역 닫기 */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
      setVisible("visible");
    } else {
      document.body.style.overflowY = "scroll";
      setVisible("hidden");
    }
    const selectClose = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", selectClose);
    return () => {
      window.removeEventListener("resize", selectClose);
    }
  }, [isOpen]);
  /* E: 셀렉트박스 Options visible , resize시 옵션영역 닫기 */

  /* S: 셀렉트박스 옵션 동적생성 */
  useEffect(() => {
    const $optionsWrap = document.createElement("div");
    const $options = document.createElement("div");
    $optionsWrap.classList.add("options-wrap");
    $optionsWrap.style.zIndex = isOpen ? 1 : -1;
    $options.classList.add("options");
    $options.style.visibility = visible;
    $options.style.maxWidth = `${
      selectRef?.current?.getBoundingClientRect().width
    }px`;
    $options.style.transform = `translate(${
      selectRef?.current?.getBoundingClientRect().left
    }px, ${selectRef?.current?.getBoundingClientRect().top + 43 + 16}px)`;
    React.Children.forEach(children, (child, index) => {
      inputRefs.current[index] = inputRefs.current[index] || React.createRef();
      const childNode = document.createElement("div");
      childNode.textContent = child.props.children;
      childNode.setAttribute("data-value", child.props.value);
      childNode.setAttribute(
        "aria-selected",
        childNode.textContent === value ? true : false
      );
      childNode.addEventListener("click", onChange);
      $options.appendChild(childNode);
      return React.cloneElement(child, {
        ref: inputRefs.current[index],
      });
    });
    $optionsWrap.append($options);

    document.body.appendChild($optionsWrap);
    return () => {
      document.body.removeChild($optionsWrap);
    };
  }, [value, children, onChange, visible, isOpen]);
  /* E: 셀렉트박스 옵션 동적생성 */

  return (
    <div
      className={`${css.combobox} ${isOpen ? css.open : ""}`}
      role="combobox"
      tabIndex={0}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      ref={selectRef}
    >
      {label && <div className="select-label">{value ? value : label}</div>}
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.any,
  value: PropTypes.any,
  onChange: PropTypes.any,
  children: PropTypes.any,
};

export default Select;
