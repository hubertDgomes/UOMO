import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Menu from "../Menu";
import Images from "../Images";
import img7 from "/src/assets/image7.png";
import { CiHeart } from "react-icons/ci";

const Trendy = () => {
    const TrendG = ({img,namePro,price}) => {
      return (
        <>
          <div className="w-[330px] font-Menu cursor-pointer relative group">
            <Images className={"scale-x-[1] hover:scale-x-[-1]"} src={img} />
            <div className="flex justify-between py-[8px]">
              <div className="">
                <p className="mb-[10px]">Dresses</p>
                <p className="text-[16px]">{namePro}</p>
                <p className="text-[16px]">{`$${price}`}</p>
              </div>
              <div className="text-[24px]">
                  <CiHeart />
              </div>
            </div>
            <button className="absolute py-[10px] px-[20px] w-[300px] bg-white bottom-[113px] left-[16px] cursor-pointer opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 font-Menu">Add To Cart</button>
          </div>
        </>
      );
    };


  return (
    <>
      <Container className={"py-[60px]"}>
        <div className="text-center">
          <p className="text-[35px] font-Menu ">
            OUR TRENDY <span className="font-bold">PRODUCTS</span>
          </p>
          <Flex className={"justify-center gap-x-[60px] mt-[20px]"}>
            <Menu text={"All"} />
            <Menu text={"NEWARRIVALS"} />
            <Menu text={"BEST SELLER"} />
            <Menu text={"TOP RATING"} />
          </Flex>
        </div>

        <Flex className={"justify-between flex-col lg:flex-row flex-wrap gap-y-[40px] mt-[30px]"}>
            <TrendG img={img7} namePro={"Cropped Faux Leather Jacket"} price={"29"} />
            <TrendG img={img7} namePro={"Cropped Faux Leather Jacket"} price={"29"} />
            <TrendG img={img7} namePro={"Cropped Faux Leather Jacket"} price={"29"} />
            <TrendG img={img7} namePro={"Cropped Faux Leather Jacket"} price={"29"} />
            <TrendG img={img7} namePro={"Cropped Faux Leather Jacket"} price={"29"} />
            <TrendG img={img7} namePro={"Cropped Faux Leather Jacket"} price={"29"} />
            <TrendG img={img7} namePro={"Cropped Faux Leather Jacket"} price={"29"} />
            <TrendG img={img7} namePro={"Cropped Faux Leather Jacket"} price={"29"} />
        </Flex>
      </Container>
    </>
  );
};

export default Trendy;
