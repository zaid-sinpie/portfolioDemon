import React from "react";

const Buttons = ({ children, link, isActive }) => {
  let cssStyle =
    "px-3 py-1 rounded-full border border-textRed bg-text text-textRed relative cursor-pointer";

  if (isActive) {
    cssStyle =
      "px-3 py-1 rounded-full border border-text bg-textRed relative cursor-pointer";
  }

  return (
    <div
      className={`relative rounded-full ${isActive ? 'glow' : ''}`}
      style={{ boxShadow: isActive ? '0 0 15px 5px #FF4A4A' : 'none' }}
    >
      <a className={cssStyle} href={link}>
        {children}
      </a>
    </div>
  );
};

export default Buttons;
