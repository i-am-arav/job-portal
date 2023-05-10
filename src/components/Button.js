import React from "react";
import cn from "classnames";
import PropTypes from 'prop-types';

const Button = ({ variant, className, onClick, children, ...rest }) => {
  const baseClassName = "rounded py-2 px-4 h-10 min-w-min";
  const variantMapping = {
    primary: "bg-primary hover:bg-primary text-font-white z-1 shadow-md",
    secondary:
      "bg-transparent hover:bg-primary text-primary hover:text-font-white border border-1 border-primary hover:border-transparent z-1 shadow-md"
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

