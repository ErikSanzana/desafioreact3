import React from "react";
import PropTypes from "prop-types";

function Alert({ color, msg }) {
  return (
    <div className={`alert alert-${color} mt-3`} role="alert">
      {msg}
    </div>
  );
}

Alert.propTypes = {
  type: PropTypes.oneOf(["success", "danger", "undefined"]),
  message: PropTypes.string,
};

export default Alert;
