import React from "react";
import PropTypes from "prop-types";

function Alert({ color, msg }) {
  return (
    <div className={`alert alert-${color}`} role="alert">
      {msg}
    </div>
  );
}

Alert.propTypes = {
  type: PropTypes.oneOf(["success", "danger", "null"]).isRequired,
  message: PropTypes.string.isRequired,
};

export default Alert;
