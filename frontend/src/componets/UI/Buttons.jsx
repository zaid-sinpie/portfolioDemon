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
      className={`relative rounded-full ${isActive ? "glow" : ""}`}
      style={{ boxShadow: isActive ? "0 0 15px 5px #FF4A4A" : "none" }}
    >
      <a className={cssStyle} href={link}>
        {children}
      </a>
    </div>
  );
};

export const Button1 = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="text-text border px-4 py-2 text-sm tracking-normal max-sm:hidden max-xl:hidden hover:underline"
    >
      {children}
    </button>
  );
};

export const ButtonPlane = ({ children, ...props }) => {
  return (
    <button
      className="text-black uppercase border border-textYellow bg-textYellow hover:bg-black hover:text-textYellow px-5 py-2 max-sm:text-xs"
      {...props}
    >
      {children}
    </button>
  );
};

export const TextButton = ({ children, ...props }) => {
  return (
    <button className="uppercase text-text hover:text-textYellow border border-text hover:border-textYellow px-5 py-2 max-sm:text-xs transition-all hover:tracking-wider" {...props}>
      <i className="fa-solid fa-arrow-right"></i> {children}
    </button>
  );
};

export default Buttons;
