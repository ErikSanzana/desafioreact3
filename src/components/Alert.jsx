import React from "react";
import PropTypes from "prop-types";

function Alert({ type, message }) {
  return (
    <div className={`alert alert-${type}`} role="alert">
      {message}
    </div>
  );
}

Alert.propTypes = {
  type: PropTypes.oneOf(["success", "danger", "null"]).isRequired,
  message: PropTypes.string.isRequired,
};

export default Alert;
