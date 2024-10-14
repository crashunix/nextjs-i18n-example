"use client";

import { useEffect, useState } from "react";

const FontSizeControl = () => {
  const [fontSize, setFontSize] = useState(100);

  useEffect(() => {
    const savedFontSize = localStorage.getItem("fontSize") || "100";
    setFontSize(Number(savedFontSize));
    document.documentElement.style.fontSize = `${savedFontSize}%`;
  }, []);

  const handleFontSizeChange = (size: number) => {
    setFontSize(size);
    document.documentElement.style.fontSize = `${size}%`;
    localStorage.setItem("fontSize", size.toString());
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        className="py-2 px-3"
        onClick={() => {
          if (fontSize >= 120) {
            handleFontSizeChange(fontSize - 20);
          }
        }}
      >
        A-
      </button>
      <button
        className="py-2 px-3"
        onClick={() => {
          handleFontSizeChange(100);
        }}
      >
        A
      </button>
      <button
        className="py-2 px-3"
        onClick={() => {
          if (fontSize <= 160) {
            handleFontSizeChange(fontSize + 20);
          }
        }}
      >
        A+
      </button>
    </div>
  );
};

export default FontSizeControl;
