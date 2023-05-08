import React from "react";
import cn from "classnames";
import PropTypes from 'prop-types';

const Button = ({ variant, className, onClick, children, ...rest }) => {
  const baseClassName = "rounded py-2 px-4 h-10 min-w-min";
  const variantMapping = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white ",
    secondary:
      "bg-transparent hover:bg-blue-500 text-blue-500 hover:text-white border border-1 border-blue-500 hover:border-transparent"
  };
  const variants = ["primary", "secondary"];

  const variantClassName = variants.includes(variant)
    ? variantMapping[variant]
    : variantMapping["primary"];
  return (
    <button
      className={cn(baseClassName, variantClassName, className)}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary']),
    className: PropTypes.string,
}

export default Button;

