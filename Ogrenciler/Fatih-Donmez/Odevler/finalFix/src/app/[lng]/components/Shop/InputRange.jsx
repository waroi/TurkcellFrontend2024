"use client";
import React from "react";

const InputRange = ({ value, onChange }) => {
  const handleChange = (e) => {
    onChange([0, e.target.value]);
  };

  return (
    <div className="input-range-container">
      <input
        type="range"
        min="0"
        max={750}
        onChange={handleChange}
        value={value[1]}
        className="input-range"
      />
      <span className="range-value">{value[1]}$</span>
    </div>
  );
};

export default InputRange;
