import React from "react";
import Container from "../Container";
import Images from "../Images";
import { CiHeart } from "react-icons/ci";
import item1 from "/src/assets/item1.png";
import item2 from "/src/assets/item2.png";
import item3 from "/src/assets/item3.png";
import item4 from "/src/assets/item4.png";
import Flex from "../Flex";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Items = ({ itemName, price, img, orgPR, className }) => {
  return (
    <>
      <div className="w-[330px] relative group cursor-pointer m-auto">
        <Images src={img} />
        <div className="py-[10px]">
          <div className="flex justify-between">
            <div className="">
              <p className="text-[14px] font-Menu">Dresses</p>
              <p className="text-[16px] font-Menu">{itemName}</p>
              <div className="flex">
                <p className={`text-[16px] font-Menu ${className}`}>
                  <span>
                    <del className="text-black font-semibold">{orgPR}</del>
                  </span>
                  {`$${price}`}
                </p>
              </div>
            </div>
            <div className="text-[20px]">
              <CiHeart />
            </div>
          </div>
          <button className="py-[10px] px-[20px] bg-white w-[274px] text-black font-Menu text-[18px] absolute bottom-[105px] left-[25px] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 cursor-pointer">
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};

const Limited = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Container className={"py-[60px]"}>
        <p className="text-center font-Menu text-[35px] ">
          LIMITED <span className="font-bold">EDITION</span>
        </p>
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <Items img={item1} itemName={"Hub Accent Mirror"} price={"29"} />
            </div>
            <div>
              <Items
                img={item2}
                itemName={"Hosking Blue Area Rug"}
                price={"62"}
              />
            </div>
            <div>
              <Items img={item3} itemName={"Hanneman Pouf"} price={"17"} />
            </div>
            <div>
              <Items
                img={item4}
                itemName={"Cushion Futon Slipcover"}
                price={"99"}
                orgPR={"$122"}
                className={"text-red-500 font-bold"}
              />
            </div>
            <div>
              <Items img={item1} itemName={"Hub Accent Mirror"} price={"29"} />
            </div>
            <div>
              <Items
                img={item2}
                itemName={"Hosking Blue Area Rug"}
                price={"62"}
              />
            </div>
          </Slider>
        </div>
      </Container>
    </>
  );
};

export default Limited;
