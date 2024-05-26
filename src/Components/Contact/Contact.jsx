import React, { useRef }  from 'react'
import emailjs from '@emailjs/browser';

import "./Contact.css"



const Contact = () => {

  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_aaznn3i', 'template_9hotq68', form.current, {
        publicKey: '2Ycv5TUoGn1ipnQsG',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };



  return (
    
    <div id='Contact' className='container contact my-4 py-3'>
      <h1 className='text-center my-2 py-2'>Get in touch</h1>
      <div className="row">
        <div className="col-md-6">
          <h2 className='py-2'>Let's talk</h2>
          <p className='py-2 contact-main-para'>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime. </p>
          <p className='py-2'><span><i class="bi bi-envelope-fill"></i></span>Ajay2002saini12@gmail.com</p>
          <p className='py-2'><span><i class="bi bi-telephone-fill"></i></span>+91-7023735105</p>
          <p className='py-2'><span><i class="bi bi-geo-alt-fill"></i></span>Rajasthan , India</p>
        </div>

        <div className="col-md-6">

          <form ref={form} onSubmit={sendEmail} method='POST' action="" className='form'>

          
          <div className='py-3'>
          <label htmlFor="name">Your Name</label>
          <br />
          <input type="text" name="user_name" className='form-control' />
          </div>


          <div className='py-3'>
          <label htmlFor="email">Your Email</label>
          <br />
          <input name="user_email" className='form-control' type="email" />
          </div>

<div className='py-3'>
<label htmlFor="">Write your message here</label>
<br />
          <textarea name="message" className='form-control' id="" cols="30" rows="10"></textarea>
</div>

<button value="Send"  type='submit' className='btn text-white'>Submit Now</button>

          </form>
        </div>
      </div>
      
    </div>
  )
}

export default Contact
