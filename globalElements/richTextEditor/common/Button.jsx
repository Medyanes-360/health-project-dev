import React from "react";

const Button = (props) => {
  const { children, format, active, ...rest } = props;
  return (
    <button
      className={active ? "btnActive" : "bg-white opacity-50 border-none"}
      title={format}
      {...rest}
      style={{ width: "30px", height: "20px", margin: "0 2px" }}
    >
      {children}
    </button>
  );
};

export default Button;
