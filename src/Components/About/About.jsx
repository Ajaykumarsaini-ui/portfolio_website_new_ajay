import React from 'react'
import "./About.css"
import quality_education_2 from "../../assets/quality_education_2.jpeg"

const About = () => {
  return (
  <div>
    
    <div id='About' className='about container'>
      <h1 className='py-5 text-center'><span className='span'>About</span> me</h1>
      <div className="row">
        <div className="col-lg-4 text-center">
          <img src={quality_education_2} alt="" />
        </div>
        <div className="col-lg-8">
<p>Welcome to DevCraft Solutions, where we turn ideas into powerful web experiences! We specialize in frontend development, API integration, and UI/UX design, helping businesses build fast, user-friendly, and scalable web applications. <br /> <br /> At DevCraft Solutions, we are passionate web developers who create high-quality digital solutions using modern technologies like Next.js, React.js, JavaScript, Vite, Zustand, SCSS, Framer-motion , Tailwind, and Bootstrap. Whether it’s an e-commerce platform, a news website, an event management system, or a custom dashboard, we deliver seamless and engaging web experiences.



</p>


<h6 className='about-skills'>HTML & CSS & BOOTSTRAP & Tailwind & Api Integration  <span> <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar progress-bar-html progress-bar-striped progress-bar-animated">95%</div>
</div></span> </h6>

<h6 className='about-skills' >JAVASCRIPT <span> <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar progress-bar-js progress-bar-striped progress-bar-animated">90%</div>
</div></span> </h6>

<h6 className='about-skills' > REACT JS<span> <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar progress-bar-react progress-bar-striped progress-bar-animated">85%</div>
</div></span> </h6>

<h6 className='about-skills' >NEXT JS  <span> <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar progress-bar-next progress-bar-striped progress-bar-animated">80%</div>
</div></span> </h6>


        </div>
      </div>
    </div>
    <div className="container about-second my-5">
      <div className="row text-center my-4">
        <div className="col-md-4 first"><h6>10+
          </h6>
          <p>YEARS OF EXPERIENCE</p></div>
        <div className="col-md-4 first">
          <h6>90+</h6>
          <p>PROJECTS COMPLETED</p>
        </div>
        <div className="col-md-4 first">
          <h6>15+</h6>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About
