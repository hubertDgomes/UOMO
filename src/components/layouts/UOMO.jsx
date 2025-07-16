import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import uomo1 from '/src/assets/uomo1.jpg'
import uomo2 from '/src/assets/uomo2.jpg'
import uomo3 from '/src/assets/uomo3.jpg'
import uomo4 from '/src/assets/uomo4.jpg'
import uomo5 from '/src/assets/uomo5.jpg'
import uomo6 from '/src/assets/uomo6.jpg'
import uomo7 from '/src/assets/uomo7.jpg'
import uomo8 from '/src/assets/uomo8.jpg'
import uomo9 from '/src/assets/uomo9.jpg'
import uomo10 from '/src/assets/uomo10.jpg'
import uomo11 from '/src/assets/uomo11.jpg'
import uomo12 from '/src/assets/uomo12.jpg'

const Uomo = ({uomo})=>{
    return(
        <>
        <div className="w-[230px] relative group cursor-pointer">
            <Images className={""} src={uomo}/>
            <div className="w-[230px] h-[230px] bg-white absolute top-0 opacity-20 scale-x-0 group-hover:scale-x-100 transition-all duration-500"></div>
            <div className="w-[230px] h-[230px] bg-white absolute top-0 opacity-20 scale-y-0 group-hover:scale-y-100 transition-all duration-500"></div>
        </div>
        </>
    )
}

const UOMO = () => {
  return (
    <>
    <Container className={"py-[60px]"}>
        <p className='text-[35px] font-Menu text-center mb-[20px]'>@UOMO</p>
        <Flex className={"justify-between flex-wrap gap-y-[20px] flex-col lg:flex-row"}>
            <Uomo uomo={uomo1}/>
            <Uomo uomo={uomo2}/>
            <Uomo uomo={uomo3}/>
            <Uomo uomo={uomo4}/>
            <Uomo uomo={uomo5}/>
            <Uomo uomo={uomo6}/>
            <Uomo uomo={uomo7}/>
            <Uomo uomo={uomo8}/>
            <Uomo uomo={uomo9}/>
            <Uomo uomo={uomo10}/>
            <Uomo uomo={uomo11}/>
            <Uomo uomo={uomo12}/>
        </Flex>
    </Container>
    </>
  )
}

export default UOMO
