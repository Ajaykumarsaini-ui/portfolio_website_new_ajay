import React, { useEffect, useState } from "react";
import "./Hero.css";
import quality_education_2 from "../../assets/quality_education_2.jpeg";
import { motion } from "motion/react";
const Hero = () => {
  const [name, setname] = useState("Frontend Web Developer based in INDIA.");

  let index = 1;

  const writting_effect = () => {
    let new_name = name.slice(0, index);
    setname(new_name);
    index++;

    if (index > name.length) {
      index = 1;
    }
    setTimeout(() => {
      writting_effect();
    }, 500);
  };

  useEffect(() => {
    writting_effect();
  }, []);
  // console.log(name);

  // writting_effect();

  return (
    <div id="Home" className="container  my-4 py-3">
      <div className="row">
        <div className="offset-md-2 col-md-8 offset-md-2">
          <div className="hero text-center">
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.9, ease: "easeOut" }}
              className="rounded-circle img-fluid my-3"
              src={quality_education_2}
              alt=""
              srcset=""
            />
            <h1 className="Hero-heading">
              <span>I'm Ajay Kumar,</span>
              {name}
            </h1>
            <p>
            At  DevCraft Solutions, we specialize in building seamless, user-friendly, and high-performing web applications. With expertise in frontend development using React.js, Next.js,JavaScript, Vite, Zustand, SCSS , TailwindCss , Framer-motion, and Bootstrap, we create stunning, dynamic, and responsive interfaces that enhance user experiences.
            </p>
            <div className="buttons">
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}  className="btn text-white  mx-3">Connect With Me</motion.button>
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}  className="btn text-white mx-3">My Resume</motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
