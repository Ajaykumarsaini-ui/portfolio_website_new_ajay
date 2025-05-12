import React from 'react'
import "./Hero.css"
import quality_education_2 from '../../assets/quality_education_2.jpeg'

const Hero = () => {
  return (
    <div id='Home' className="container  my-4 py-3">
      <div className="row">
        <div className="offset-md-2 col-md-8 offset-md-2">


    <div className='hero text-center'>
      
    <img className='rounded-circle img-fluid my-3' src={quality_education_2} alt="" srcset="" />
      <h1 className='Hero-heading'>
        <span>I'm Ajay Kumar,  </span>
           Frontend Developer based in INDIA.
      </h1>
      <p>I am a frontend developer from rajasthan, INDIA and 10 years of experience in multiple companies like Microsoft,Tesla and Apple.</p>
      <div className="buttons">
        <button className='btn text-white mx-3'>Connect With Me</button>
        <button className='btn text-white mx-3'>My Resume</button>
      </div>
    </div>
    </div>
      </div>
        </div>
  )
}

export default Hero
