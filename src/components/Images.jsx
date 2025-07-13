import React from 'react'

const Images = ({alt,src,className}) => {
  return (
    <img src={src} alt={alt} className={className}/>
  )
}

export default Images