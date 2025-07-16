import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import uomo1 from '/src/assets/uomo1.jpg'

const Uomo = ()=>{
    return(
        <>
        <div className="w-[230px] relative">
            <Images className={""} src={uomo1}/>
            <div className=""></div>
        </div>
        </>
    )
}

const UOMO = () => {
  return (
    <>
    <Container className={"py-[60px]"}>
        <p className='text-[35px] font-Menu text-center'>@UOMO</p>
        <Flex>
            <Uomo/>
        </Flex>
    </Container>
    </>
  )
}

export default UOMO
