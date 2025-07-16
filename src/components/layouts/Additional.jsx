import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import red from "/src/assets/red.png";
import red2 from "/src/assets/red2.png";
import Hover from "../Hover";


const Additional = () => {
  return (
    <Container className={"py-[60px]"}>
      <Flex className={"justify-between flex flex-col lg:flex-row"}>
        <div className="lg:w-[690px] relative mb-[20px] lg:mb-0">
          <Images src={red} />
          <div className="absolute text-white bottom-[20px] left-[24px]">
            <p className="text-[14px]">STARTING AT $19</p>
            <p className="text-[26px] font-medium">
              <span className="font-bold">WOMEN</span> T-Shirts
            </p>
            <Hover className={"text-[14px] font-medium"} text={"SHOP NOW"} />
          </div>
        </div>

        <div className="lg:w-[690px] relative">
          <Images src={red2} />
          <div className="absolute bottom-[20px] left-[24px]">
            <p className="text-[14px]">STARTING AT $39</p>
            <p className="text-[26px] font-medium">
              <span className="font-bold">MEN</span> T-Shirts
            </p>
            <Hover className={"text-[14px] font-medium"} text={"SHOP NOW"} />
          </div>
        </div>
      </Flex>
    </Container>
  );
};

export default Additional;
