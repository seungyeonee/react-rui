import { forwardRef, useState, useEffect, useRef } from "react";
import { arrayOf, shape, string, any } from "prop-types";
import css from "./Select.module.scss";

const Select = forwardRef(function Select(
  { data, defaultValue, value, onChange, ...rest },
  ref
) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(
    value !== undefined
      ? data.find((item) => item.value === value)?.label
      : data.find((item) => item.value === defaultValue)?.label || data[0].value
  );
  const selectWrapRef = useRef(null);

  const handleOptionClick = (e, index) => {
    e.preventDefault();
    setIsOpen(false);
    const newValue = data[index].value;
    setSelectedValue(newValue);
    onChange && onChange(newValue);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        selectWrapRef.current &&
        !selectWrapRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className={css.wrapper} ref={selectWrapRef}>
      <button
        className={`${css.combobox} ${isOpen ? css.open : ""}`}
        role="combobox"
        aria-expanded={isOpen}
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        {...rest}
      >
        {data.find((item) => item.value === selectedValue)?.label}
      </button>
      <input
        tabIndex={-1}
        aria-hidden={true}
        value={selectedValue}
        type="hidden"
        ref={ref}
      />
      {isOpen && (
        <ul className={css.options}>
          {data.map((option, index) => (
            <li
              value={option.value}
              key={option.value}
              onClick={(e) => handleOptionClick(e, index)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

Select.propTypes = {
  data: arrayOf(
    shape({
      label: string,
      value: string,
    })
  ).isRequired,
  defaultValue: any,
  value: any,
  onChange: any,
};

export default Select;
