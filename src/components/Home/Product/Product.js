import React from 'react'
import WebpageVideo from '../../../Videos/WebpageVideo.mp4';

function Product() {
  return (
      <video autoPlay loop muted style={{ width:"100%"}}>
        <source src={WebpageVideo} type="video/mp4" />
      </video>
  )
}

export default Product