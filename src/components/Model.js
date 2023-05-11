import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

function Modal({ title, body, width, padding, height, margin }) {
  const modalClassNames = classNames(
    "fixed inset-0 flex items-center justify-center z-50 overflow-x-hidden overflow-y-auto outline-none",
    {
      [`w-${width}`]: !!width,
      [`p-${padding}`]: !!padding,
      [`h-${height}`]: !!height,
      [`m-${margin}`]: !!margin,
    }
  );

  return (
    <div className={modalClassNames}>
      <div className="relative w-full max-w-lg p-6 bg-white rounded-md">
        {title && <div className="mb-4 text-lg font-bold">{title}</div>}
        {body && <div className="mb-6">{body}</div>}
      </div>
    </div>
  );
}

Modal.propTypes = {
  title: PropTypes.node,
  body: PropTypes.node,
  width: PropTypes.string,
  padding: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
};

export default Modal;
