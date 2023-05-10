import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const Input = ({
  value,
  onChange,
  label,
  type,
  error,
  isRequired,
  placeholder,
  className,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  margin,
}) => {
  const baseClassName =
    "h-8 py-2 pl-3 w-full border border-borderGray rounded focus:outline-none focus:border-primary placeholder:text-sm placeholder-placeholderColor";
  const allMappingClassName = {
    [`m-${margin}`]: !!margin,
    [`mt-${marginTop}`]: !!marginTop,
    [`mb-${marginBottom}`]: !!marginBottom,
    [`ml-${marginLeft}`]: !!marginLeft,
    [`mr-${marginRight}`]: !!marginRight,   
  };

  return (
    <div className={cn(allMappingClassName, className)}>
      {label && (
        <p className="text-sm font-medium mb-1">
          {label}
          {isRequired && <span className="text-error">* </span>}
        </p>
      )}
      <input
        value={value}
        type={type}
        onChange={onChange}
        className={cn(baseClassName)}
        placeholder={placeholder}
      />
      {error && <p className="relative mt-1 ml-1 text-error text-xs block italic">{error}</p>}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  isRequired: PropTypes.bool,
};

export default Input;
