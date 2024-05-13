import { PropTypes } from "prop-types";
import { forwardRef } from "react";

const Option = forwardRef(function Option(
  { value, selected, children, ...rest },
  ref
) {
  return (
    <div
      tabIndex={0}
      role="option"
      data-value={value}
      aria-selected={selected}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  );
});

Option.propTypes = {
  value: PropTypes.any,
  selected: PropTypes.bool,
  children: PropTypes.any,
};

export default Option;
