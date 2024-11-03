import React from 'react';

function Alert(props) {
  const capitalizeFirstLetter = (text) => {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <div className="container" style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalizeFirstLetter(props.alert.type)}</strong>: {props.alert.message}
        </div>
      )}
    </div>
  );
}

export default Alert;
