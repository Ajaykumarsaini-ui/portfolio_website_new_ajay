import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div id='Footer' className='footer'>
      <div className="container footer-first py-3">
        <div className="row">
          <div className="col-md-6">
            <h1>Portfolio</h1>
            <p>I am a frontend developer from rajasthan, INDIA and 10 years of experience in multiple companies like Microsoft,Tesla and Apple.</p>

          </div>
          <div className="col-md-6 text-center">
          <div class="input-group text-center">
                    <input type="email" placeholder="Enter your email" class="form-control" />
                    <span class="input-group-text">Subscribe</span>
                </div>
          </div>
        </div>
      </div>

      <div className="footer-second container pt-3">
        <div className="row text-center">
          <div className="col-md-6">
            <p>@ 2024 Ajay Kumar.All rights reserved</p>
          </div>
          <div className="col-md-6 text-center">
            <ul>
              <li className='m-auto'>Term of Services</li>
              <li className='m-auto'>Privacy Policy</li>
              <li className='m-auto'>Connect with me</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
