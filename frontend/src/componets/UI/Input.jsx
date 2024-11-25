import React from "react";

const Input = ({ id,name, title, type, ...props }) => {
  return (
    <div className="flex flex-col gap-2 justify-around items-start w-[80%] max-sm:w-full max-xl:w-full">
      <label
        htmlFor={id}
        className="active:cursor-cursor1 hover:cursor-cursorHover"
      >
        {title}
      </label>
      <input
        {...props}
        autoComplete="off"
        type={type ? type : "text"}
        id={id}
        name={name}
        className="w-full outline-none px-5 py-2 rounded-sm border border-textYellow bg-transparent active:cursor-cursor1 hover:cursor-cursorHover tracking-[1px]"
      />
    </div>
  );
};

export const TextArea = ({ id,name, title, ...props }) => {
  return (
    <div className="flex flex-col gap-2 justify-around items-start w-[80%] max-sm:w-full max-xl:w-full">
      <label
        htmlFor={id}
        className="active:cursor-cursor1 hover:cursor-cursorHover"
      >
        {title}
      </label>
      <textarea
        {...props}
        rows={5}
        autoComplete="off"
        type="text"
        id={id}
        name={name}
        className="w-full outline-none px-5 py-2 rounded-sm border border-textYellow bg-transparent active:cursor-cursor1 hover:cursor-cursorHover tracking-[1px]"
      />
    </div>
  );
};

export default Input;
