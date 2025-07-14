import React from 'react'
import Header from "../layouts/Header";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import person from '/src/assets/person1.png'
import summer from '/src/assets/summer.png'

const Banner = () => {
  return (
    <>
      
        <div className="bg-[#f5e6e0] rounded-2xl border-2 border-amber-200">
          <div className="bg-[url(/src/assets/layerBG.png)] bg-no-repeat bg-center bg-cover pt-[80px]">
          <Container>
            
              <Flex className={"justify-between"}>
                <div className="w-[780px]">
                  <Flex>
                    <span className="h-[2px] w-[40px] bg-[#C32929] shadow-lg mr-[10px]"></span>
                    <p className="text-[#C32929] font-Menu font-medium">
                      NEW TREND
                    </p>
                  </Flex>
                  <p className="text-[70px] font-Menu">SUMMER SALE STYLISH <span className="font-bold">WOMENS</span></p>
                  <p className="font-Menu text-[14px] font-medium relative group cursor-pointer">DISCOVER MORE <span className="absolute top-5 left-0 h-[2px] w-[10px] bg-black group-hover:w-[100px] transition-all duration-500"></span></p>
                </div>
                

                <div className="">
                  <Images src={person}/>
                </div>

                <div className="">
                  <Images src={summer}/>
                </div>

              </Flex>
            
          </Container>
          </div>
        </div>

    </>
  )
}

export default Banner