import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

function Modal({
  title,
  body,
  showModal,
  className,
  width,
  height,
  padding,
  margin,
}) {

  const baseClassName = cn(`fixed max-h-full max-w-full left-1/2 top-1/2  z-[1000] -translate-y-1/2 -translate-x-1/2 outline-none overflow-y-auto shadow-lg bg-white  rounded-sm transition-all duration-300 ease-in-out border border-borderGray border-1 `, {
    [`w-${width}px`]: !!width,
    [`h-${height}px`]: !!height,
    [`p-${padding}`]: !!padding,
    [`m-${margin}`]: !!margin,
  });

  return (
    showModal ? (
      <div className={cn(baseClassName,className)}>

          {title && title}
          {body && body}

      </div>
    ): null
  );
}

Modal.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  padding: PropTypes.number,
};

export default Modal;
