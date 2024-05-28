import React from 'react'
import './Blob.scss'

let Blob:React.FC<{imgSrc: string}> = ({imgSrc}) => {
  return (
    <>
      <img src={imgSrc} alt="hero" />
    </>
  )
}

export default Blob