import React from "react";

const Hover = ({text,className}) => {
  return (
    <p className={`cursor-pointer relative group ${className}`}>
      {text}
      <span className="absolute left-0 -bottom-1 h-[2px] w-[10px] bg-black transition-all duration-500 ease-in-out group-hover:w-[40px]"></span>
    </p>
  );
};

export default Hover;
