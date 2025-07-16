import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import vec1 from '/src/assets/vec1.png'
import vec2 from '/src/assets/vec2.png'
import vec3 from '/src/assets/vec3.png'

const Contact = () => {
  return (
    <>
    <Container className={"py-[30px]"}>
        <Flex className={"justify-evenly"}>
            <div className="w-[244px] text-center">
                <Images className={"m-auto"} src={vec1}/>
                <p className='font-Menu text-[18px] font-medium mt-[20px] mb-[10px]'>FAST AND FREE DELIVERY</p>
                <p className='font-Menu text-[15px]'>Free delivery for all orders over $140</p>
            </div>
            
            <div className="w-[244px] text-center">
                <Images className={"m-auto"} src={vec2}/>
                <p className='font-Menu text-[18px] font-medium mt-[20px] mb-[10px]'>24/7 CUSTOMER SUPPORT</p>
                <p className='font-Menu text-[15px]'>Friendly 24/7 customer support</p>
            </div>


            <div className="w-[244px] text-center">
                <Images className={"m-auto"} src={vec3}/>
                <p className='font-Menu text-[18px] font-medium mt-[20px] mb-[10px]'>MONEY BACK GUARANTEE</p>
                <p className='font-Menu text-[15px]'>We return money within 30 days</p>
            </div>
        </Flex>
    </Container>
    </>
  )
}

export default Contact
