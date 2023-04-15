import React, { useState } from "react"
import Dcards from "./Dcard"
import "./Products.css"
import Sdata from "./Sdata"

const AllItem = () => {
  const [items, setIems] = useState(Sdata)
  return (
    <>
      <section className='gallery desi mtop'>
        <div className="producttitle">
        <h3><b>Products</b></h3>

        </div>
        <div className='container'>
          <div className='content grid'>
            {items.map((item) => {
              return <Dcards key={item.slug} item={item} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default AllItem

