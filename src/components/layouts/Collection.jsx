import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import person2 from "/src/assets/person2.png";
import Hover from "../Hover";
import person3 from "/src/assets/person3.png";
import person4 from "/src/assets/person4.png";

const Collection = () => {
  return (
    <Container className={"py-[60px]"}>
      <div className={"flex flex-col lg:flex-row justify-between"}>
        <div className="relative w-full lg:w-[690px] font-Menu mb-8 lg:mb-0">
          <Images src={person2} />

          <div className="absolute bottom-8 left-7">
            <p className="text-[14px]">HOT LIST</p>
            <p className="text-[26px] font-medium">
              <span className="font-bold">WOMEN</span> COLLECTION
            </p>
            <Hover className={"text-[14px] font-medium"} text={"SHOP NOW"} />
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-[690px]">
          <div className="relative h-[285px] font-Menu">
            <Images src={person3} />

            <div className="absolute bottom-5 left-7">
              <p className="text-[14px]">HOT LIST</p>
              <p className="text-[26px] font-medium">
                <span className="font-bold">MEN</span> COLLECTION
              </p>
              <Hover className={"text-[14px] font-medium"} text={"SHOP NOW"} />
            </div>
          </div>
          <div
            className={"mt-[30px] flex flex-col lg:flex-row justify-between"}
          >
            <div className="relative w-[330px] h-[285px] mb-[20px]">
              <Images src={person4} />
              <div className="absolute bottom-5 left-7">
                <p className="text-[14px]">HOT LIST</p>
                <p className="text-[26px] font-medium">
                  <span className="font-bold">KIDS</span> COLLECTION
                </p>
                <Hover
                  className={"text-[14px] font-medium"}
                  text={"SHOP NOW"}
                />
              </div>
            </div>

            <div className="relative w-[330px] h-[285px] bg-[#F5E6E0] pt-[110px] pb-[40px] pr-[77px] pl-[40px]">
              <p className="text-[26px] font-Menu font-semibold mb-[20px]">
                E-GIFT CARDS
              </p>
              <p className="text-[14px] font-Menu mb-[20px]">Surprise someone with the gift they really want.</p>

              <Hover className={"text-[14px] font-medium"} text={"DISCOVER MORE"} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Collection;
