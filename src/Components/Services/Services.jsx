import React from 'react'
import "./Services.css"
// import theme_pattern from '//assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data.js'
// import arrow_icon from '//assets/arrow_icon.svg' 

const Services = () => {
  return (
    <div id='Services' className='services mb-3'>
        <div className="services-title">
            <h1 className='text-center py-5'>My Services</h1>
            {/* <img src= {theme_pattern} alt="" srcset="" /> */}
        </div>
        <div className='services-container container'>
            { Services_Data.map((service , index)=>{
                return <div key = {index} className='services-format'> 
                
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
                <div className="services-readmore">
                    <p>Read More<i class="bi bi-arrow-right"></i></p>
                    {/* <img src= {arrow_icon} alt="" srcset="" /> */}
                </div>
                
                </div>
            })
            
            }
        </div>
      
    </div>
  )
}

export default Services
