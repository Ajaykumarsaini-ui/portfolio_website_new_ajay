import React from 'react'
import "./MyWork.css"
import mywork_data from '../../assets/mywork_data'
import FadeInOnScroll from '../../Gsap/FadeInOnScroll'

const MyWork = () => {
  return (
    
    <div id='Mywork' className='mywork container'>
        <div className="mywork-title py-4">
        <h1 className='text-center my-2 py-2'><span className='span'>My Latest</span> work</h1>

            {/* <img src="" alt="" /> */}
        </div>
        <div className="mywork-container container py-3">
            { mywork_data.map((mywork ,index) => {
                return<div key={index} className='mywork-img text-center'>

                {/* <h1>{mywork.w_no}</h1> */}
                {/* <h2>{mywork.w_name}</h2> */}
                <img className='img-fluid' src= {mywork.w_img} alt="" />
                </div>

            })}
        </div>
      
    </div>
  )
}

export default MyWork
