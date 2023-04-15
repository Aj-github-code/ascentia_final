import React, { useState, useEffect } from "react"
import EmptyFile from "../../common/Empty/EmptyFile"
import Sdata from "../Products/Sdata"
import { useParams } from "react-router-dom"
import "./SinglePage.css"


const SinglePage = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  
  const [img, setImg] = useState()
  useEffect(() => {
    let item = Sdata.find((item) => item.id === parseInt(id))
    if (item) {
      setItem(item)
      setImg(item.image)
    }
  }, [id])
  
    const hoverHandler = (image, i) => {
        setImg(image);

    };

    
  return (
    <>
      {item ? (
        <section className='single-page top'>
          <div className='container'>
            

            <article className='content flex'>
              <div className='main-content'>
                  <div className="left_1">
                    {item.images.map((image, i) => (
                        <div
                            className='img_wrap active'
                            key={i}
                            onMouseOver={() => hoverHandler(image, i)}
                        >
                            <img src={image} alt="" />
                        </div>
                    ))}
                  </div>
                  <div className='left_2'>
                    <img src={img} alt='' />
                  </div>
               
              </div>
              
              <div className='side-content'>
                <h2>{item.singletitle}</h2>
                <h3>{item.subtitle}</h3>
                <div dangerouslySetInnerHTML={{ __html: item.para }}></div>
                
              </div>
              
            </article>
          </div>
        </section>
      ) : (
        <EmptyFile />
      )}
      
    </>
  )
}

export default SinglePage