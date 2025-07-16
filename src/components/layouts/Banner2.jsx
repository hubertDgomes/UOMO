import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Counter from "./Counter";

const Banner2 = () => {
  return (
    <div className="bg-[#E8E8EA] w-full">
      <Container className="py-8 md:py-12">
        <div className="bg-[url(/src/assets/banner2.png)] bg-no-repeat bg-center bg-cover py-12 md:py-24 lg:py-32">
          <div className="mx-4 md:mx-8 relative">
            <Flex className="items-center mb-4">
              <span className="h-[2px] w-10 bg-[#C32929] shadow-lg mr-2"></span>
              <p className="text-[#C32929] font-Menu font-medium text-sm md:text-base">
                DEAL OF THE WEEK
              </p>
            </Flex>
            <p className="text-3xl md:text-5xl lg:text-7xl font-Menu mb-2 leading-tight">
              <span className="font-bold">Spring</span> Collection
            </p>
            <p className="font-Menu text-xs md:text-sm font-medium relative group cursor-pointer mb-6">
              SHOP NOW
              <span className="absolute top-5 left-0 h-[2px] w-2 group-hover:w-24 bg-black transition-all duration-500"></span>
            </p>
            <Counter className="absolute -bottom-16 left-0" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner2;
