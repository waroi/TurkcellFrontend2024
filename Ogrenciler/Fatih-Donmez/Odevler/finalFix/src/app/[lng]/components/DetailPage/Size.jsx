"use client";
import React, { useState } from "react";
const Size = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };
  console.log(activeButton);
  return (
    <div className="size-buttons">
      <button
        className={activeButton === 1 ? "size-btn-active" : ""}
        onClick={() => handleButtonClick(1)}
      >
        Small
      </button>
      <button
        className={activeButton === 2 ? "size-btn-active" : ""}
        onClick={() => handleButtonClick(2)}
      >
        Medium
      </button>
      <button
        className={activeButton === 3 ? "size-btn-active" : ""}
        onClick={() => handleButtonClick(3)}
      >
        Large
      </button>
      <button
        className={activeButton === 4 ? "size-btn-active" : ""}
        onClick={() => handleButtonClick(4)}
      >
        Extra Large
      </button>
    </div>
  );
};

export default Size;
