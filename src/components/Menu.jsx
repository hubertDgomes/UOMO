import React from "react";

const Menu = ({text,className}) => {
  return (
    <>
      <div className={`font-Menu font-medium text-[14px] ${className}`}>
        <ul className="">
          <li className="cursor-pointer relative group">
            {text}
            <span className="absolute left-0 -bottom-1 h-[2px] w-[10px] bg-black transition-all duration-500 ease-in-out group-hover:w-[40px]"></span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
