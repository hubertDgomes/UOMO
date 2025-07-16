import React from "react";
import Container from "../Container";
import Images from "../Images";
import logo from "/src/assets/logo.png";
import social from "/src/assets/social.png";
import Menu from "../Menu";
import card from '/src/assets/cards.png'

const Footer = () => {
  return (
    <div className="bg-[#CFCDCD]">
      <Container className="py-[40px] md:py-[70px]">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="w-full md:w-[282px] font-Menu">
            <Images src={logo} />
            <p className="text-[14px] mb-[20px] md:mb-[40px] mt-[30px] md:mt-[50px]">
              1418 River Drive, Suite 35 Cottonhall, CA 9622 United States
            </p>
            <p className="font-medium text-[14px]">sale@uomo.com</p>
            <p className="font-medium text-[14px]">+1 246-345-0695</p>
            <Images className="mt-[20px] md:mt-[40px]" src={social} />
          </div>

          <div className="w-full md:w-[130px]">
            <p className="text-[18px] font-medium font-Menu mb-[20px] md:mb-[30px]">
              COMPANY
            </p>
            <div>
              <Menu text="About Us" className="mb-3" />
              <Menu text="Careers" className="mb-3" />
              <Menu text="Affiliates" className="mb-3" />
              <Menu text="Blog" className="mb-3" />
              <Menu text="Contact Us" className="mb-3" />
            </div>
          </div>

          <div className="w-full md:w-auto">
            <p className="text-[18px] font-medium font-Menu mb-[20px] md:mb-[30px]">
              SHOP
            </p>
            <div>
              <Menu text="New Arrivals" className="mb-3" />
              <Menu text="Accessories" className="mb-3" />
              <Menu text="Men" className="mb-3" />
              <Menu text="Women" className="mb-3" />
              <Menu text="Shop All" className="mb-3" />
            </div>
          </div>

          <div className="w-full md:w-auto">
            <p className="text-[18px] font-medium font-Menu mb-[20px] md:mb-[30px]">
              HELP
            </p>
            <div>
              <Menu text="Customer Service" className="mb-3" />
              <Menu text="My Account" className="mb-3" />
              <Menu text="Find a Store" className="mb-3" />
              <Menu text="Legal & Privacy" className="mb-3" />
              <Menu text="Contact" className="mb-3" />
              <Menu text="Gift Card" className="mb-3" />
            </div>
          </div>

          <div className="w-full md:w-[340px]">
            <p className="text-[18px] font-medium font-Menu mb-[20px] md:mb-[30px]">
              SUBSCRIBE
            </p>
            <p className="font-Menu text-[14px]">
              Be the first to get the latest news about trends, promotions,
              and much more!
            </p>
            <div className="flex flex-col sm:flex-row gap-2 mt-[20px]">
              <input
                className="placeholder:font-Menu placeholder:text-[14px] placeholder:text-black px-3 py-2 border border-gray-300 rounded-md flex-1"
                placeholder="Your email address"
              />
              <button className="font-Menu text-[14px] px-4 py-2 bg-black text-white rounded-md">
                JOIN
              </button>
            </div>
            <p className="font-Menu text-[15px] mt-[20px] md:mt-[30px] font-semibold">
              Secure payments
            </p>
            <Images className="mt-[10px] md:mt-[20px]" src={card} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
