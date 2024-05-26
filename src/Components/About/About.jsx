import React from 'react'
import "./About.css"
import quality_education_2 from "../../assets/quality_education_2.jpeg"

const About = () => {
  return (
  <div>
    
    <div id='About' className='about container'>
      <h1 className='py-5 text-center'>About me</h1>
      <div className="row">
        <div className="col-lg-4 text-center">
          <img src={quality_education_2} alt="" />
        </div>
        <div className="col-lg-8">
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quam reiciendis accusantium eligendi neque, similique magni nulla alias aliquid placeat consectetur, voluptatum veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, iusto! <br /> <br /> <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, praesentium. Provident dolorum illum.</p></p>

<h6>HTML&CSS&BOOTSTRAP  <span> <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar progress-bar-html progress-bar-striped progress-bar-animated">90%</div>
</div></span> </h6>

<h6>JAVASCRIPT <span> <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar progress-bar-js progress-bar-striped progress-bar-animated">80%</div>
</div></span> </h6>

<h6> REACT JS<span> <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar progress-bar-react progress-bar-striped progress-bar-animated">75%</div>
</div></span> </h6>

<h6>NEXT JS  <span> <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar progress-bar-next progress-bar-striped progress-bar-animated">60%</div>
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
