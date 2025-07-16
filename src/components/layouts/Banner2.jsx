import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Counter from "./Counter";

const Banner2 = () => {
  return (
    <>
      <div className="bg-[#E8E8EA] w-[382px] lg:w-full m-auto">
        <Container className={"py-[30px]"}>
        <div className="lg:bg-[url(/src/assets/banner2.png)] bg-no-repeat bg-center bg-cover py-[100px]">
          <div className="ml-[20px] relative">
            <Flex className={""}>
            <span className="h-[2px] w-[40px] bg-[#C32929] shadow-lg mr-[10px]"></span>
            <p className="text-[#C32929] font-Menu font-medium">DEAL OF THE WEEK</p>
          </Flex>
          <p className="text-[70px] font-Menu">
            <span className="font-bold">Spring</span> Collection
          </p>
          <p className="font-Menu text-[14px] font-medium relative group cursor-pointer">
            SHOP NOW
            <span className="absolute top-5 left-0 h-[2px] w-[10px] bg-black group-hover:w-[90px] transition-all duration-500"></span>
          </p>
          <Counter className={"absolute bottom-[-74px]"}/>
          </div>
        </div>
      </Container>
      </div>
    </>
  );
};

export default Banner2;
