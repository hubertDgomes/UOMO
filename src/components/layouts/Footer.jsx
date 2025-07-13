import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import logo from "/src/assets/logo.png";
import social from "/src/assets/social.png";
import Menu from "../Menu";

const Footer = () => {
  return (
    <>
      <div className="bg-[#CFCDCD]">
        <Container className={"py-[70px]"}>
          <div className={"justify-between flex"}>
            <div className="w-[282px] font-Menu">
              <Images src={logo} />
              <p className="text-[14px] mb-[40px] mt-[50px]">
                1418 River Drive, Suite 35 Cottonhall, CA 9622 United States
              </p>
              <p className="font-medium text-[14px]">sale@uomo.com</p>
              <p className="font-medium text-[14px]">+1 246-345-0695</p>
              <Images className={"mt-[40px]"} src={social} />
            </div>
            
            <div className="w-[130px]">
              <p className="text-[18px] font-medium font-Menu mb-[30px]">COMPANY</p>
              <div className="">
                <Menu text={"About Us"} className="mb-3" />
                <Menu text={"Careers"} className="mb-3" />
                <Menu text={"Affiliates"} className="mb-3" />
                <Menu text={"Blog"} className="mb-3" />
                <Menu text={"Contact Us"} className="mb-3" />
              </div>
            </div>


            <div className="">
              <p className="text-[18px] font-medium font-Menu mb-[30px]">SHOP</p>
              <div className="">
                <Menu text={"New Arrivals"} className="mb-3" />
                <Menu text={"Accessories"} className="mb-3" />
                <Menu text={"Men"} className="mb-3" />
                <Menu text={"Women"} className="mb-3" />
                <Menu text={"Shop All"} className="mb-3" />
              </div>
            </div>


            <div className="">
              <p className="text-[18px] font-medium font-Menu mb-[30px]">HELP</p>
              <div className="">
                <Menu text={"Customer Service"} className="mb-3" />
                <Menu text={"My Account"} className="mb-3" />
                <Menu text={"Find a Store"} className="mb-3" />
                <Menu text={"Legal & Privacy"} className="mb-3" />
                <Menu text={"Contact"} className="mb-3" />
                <Menu text={"Gift Card"} className="mb-3" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
