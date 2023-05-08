import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

const Typography = ({
  variant,
  textColor,
  className,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  margin,
  children,
  ...rest
}) => {
  const variantsMapping = {
    h2: "text-2xl",
    h3: "text-xl",
    p: "text-base",
  };
  const textColorClassName = `text-${textColor}`;
  const marginClassName = `m-${margin}`;
  const marginTopClassName = `mt-${marginTop}`;
  const marginBottomClassName = `mb-${marginBottom}`;
  const marginLeftClassName = `ml-${marginLeft}`;
  const marginRightClassName = `mr-${marginRight}`;
  const allMappingClassName = {
    [marginTopClassName]: !!marginTop,
    [marginBottomClassName]: !!marginBottom,
    [marginLeftClassName]: !!marginLeft,
    [marginRightClassName]: !!marginRight,
    [marginClassName]: !!margin,
    [textColorClassName]: !!textColor,
    [variantsMapping["p"]]: !variant || variant === "p",
    [variantsMapping["h2"]]: variant === "h2",
    [variantsMapping["h3"]]: variant === "h3",
  };

  return (
    <p className={cn(allMappingClassName, className)} {...rest}>
      {children}
    </p>
  );
};

Typography.propTypes = {
  variant: PropTypes.oneOf(["h2", "h3","p"]),
  textColor: PropTypes.string,
  className: PropTypes.string,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  margin: PropTypes.number,
};

export default Typography;
