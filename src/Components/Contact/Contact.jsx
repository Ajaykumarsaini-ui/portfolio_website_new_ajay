import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aaznn3i",
        "template_9hotq68",
        form.current,
        {
          publicKey: "Pb1K1ncl4bCNiMWAX",
        }
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          alert("Email sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <div id="Contact" className="container contact my-4 py-3">
      <h1 className="text-center my-2 py-2">
        <span className="span">Get in</span> Touch
      </h1>
      <div className="row">
        <div className="col-md-6">
          <h2 className="py-2">Let's talk</h2>
          <p className="py-2 contact-main-para">
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on.
          </p>
          <p className="py-2">
            <span>
              <i className="bi bi-envelope-fill"></i>
            </span>
            Ajay2002saini12@gmail.com
          </p>
          <p className="py-2">
            <span>
              <i className="bi bi-telephone-fill"></i>
            </span>
            +91-7023735105
          </p>
          <p className="py-2">
            <span>
              <i className="bi bi-geo-alt-fill"></i>
            </span>
            Rajasthan, India
          </p>
        </div>

        <div className="col-md-6">
          <form ref={form} onSubmit={sendEmail} className="form">
            <div className="py-3">
              <label htmlFor="name">Your Name</label>
              <input type="text" name="user_name" className="form-control" required />
            </div>

            <div className="py-3">
              <label htmlFor="email">Your Email</label>
              <input name="user_email" className="form-control" type="email" required />
            </div>

            <div className="py-3">
              <label htmlFor="message">Write your message here</label>
              <textarea name="message" className="form-control" required></textarea>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              type="submit"
              className="btn text-white"
            >
              Submit Now
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
