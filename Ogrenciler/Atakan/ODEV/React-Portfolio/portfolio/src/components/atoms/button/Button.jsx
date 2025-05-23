import React from "react";

const Button = ({ type, text }) => {
  return (
    <>
      <button type={type}>{text}</button>
    </>
  );
};

export default Button;
