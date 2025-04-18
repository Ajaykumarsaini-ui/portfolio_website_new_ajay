import React from 'react';
import "./Services.css";
import { motion } from "framer-motion";

// import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/mywork_data.js';
// import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
  return (
    <div id='Services' className='services mb-3'>
      <div className="services-title">
        <h1 className='text-center py-5'>
          <span className='span'>My</span> Services
        </h1>
      </div>
      
      <motion.div 
        className='services-container container'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5,  ease : "easeInOut" }}
      >
        {Services_Data.map((service, index) => (
          <motion.div 
            key={service.w_no} 
            className='services-format'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          > 
            <h2>{service.w_name}</h2>
            <p>{service.w_description}</p>
            {/* <div className="services-readmore">
                <p>Read More<i class="bi bi-arrow-right"></i></p>
                <img src= {arrow_icon} alt="" />
            </div> */}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Services;
