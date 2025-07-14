import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import logo from "/src/assets/logo.png";
import { IoIosSearch } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";
import Menu from "../Menu";

const Header = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-md">
        <Container className={"py-[30px]"}>
        <Flex className={"justify-between"}>
          <Flex>
            <Images src={logo} className={"mr-[40px]"} />
            <Flex className={"gap-x-[40px]"}>
              <Menu text={"HOME"} />
              <Menu text={"SHOP"} />
              <Menu text={"COLLECTION"} />
              <Menu text={"JOURNAL"} />
              <Menu text={"LOOKBOOK"} />
              <Menu text={"PAGES"} />
            </Flex>
          </Flex>

          <div className="">
            <Flex
              className={
                "justify-between text-[30px] gap-x-[20px] font-bold cursor-pointer"
              }
            >
              <IoIosSearch />
              <CiUser />
              <CiHeart />
              <IoBagHandleOutline />
              <RiMenu2Fill />
            </Flex>
          </div>
        </Flex>
      </Container>
      </div>
    </>
  );
};

export default Header;
