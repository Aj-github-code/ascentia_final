import React from "react"
import AllMedia from "./AllMedia"

const Blog = () => {
  return (
    <>
      <div className="mainmedia">
        <img src="../../images/Media_bg.png" className="mediabgimage"/>
      
        <div className='headingMedia'>
            <h1>Media</h1>
        </div>
      <AllMedia />
      </div>
    </>
  )
}

export default Blog