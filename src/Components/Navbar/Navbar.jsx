import React, { useEffect, useState } from "react";
import { NavLink } from "react-router"; // Correct import for routing
import "./Navbar.css";
import { motion } from "framer-motion";
import logo from "./../../../public/logo.png";

const Navbar = ({ toggleTheme }) => {
  const [scrolldir, setscrolldir] = useState("up");
  const [lastscroll, setlastscroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setscrolldir(currentScroll > lastscroll ? "down" : "up");
      setlastscroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastscroll]);

  return (
    <div className={`navbar-bootstrap ${scrolldir === "down" ? "opacity-0" : "opacity-100"}`}>
      <nav className="navbar navbar-expand-lg py-1 sticky-top">
        <div className="container-fluid px-5">
          <a className="navbar-brand" href="#">
            <img src={logo} className="logo img-fluid w-25 h-auto" alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon">
              <i className="bi bi-list-stars"></i>
            </span>
          </button>

          <div className="offcanvas bg-black text-white offcanvas-end" tabIndex="-1" id="offcanvasNavbar">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Portfolio</h5>
              <button type="button" className="btn-close text-center" data-bs-dismiss="offcanvas" aria-label="Close">
                <i className="bi bi-x-lg"></i>
              </button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center align-items-center flex-grow-1 pe-5">
                <li className="nav-item">
                  <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active px-3" : "nav-link px-3"}>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active px-3" : "nav-link px-3"}>
                    About Me
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/mywork" className={({ isActive }) => isActive ? "nav-link active px-3" : "nav-link px-3"}>
                    Portfolio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/services" className={({ isActive }) => isActive ? "nav-link active px-3" : "nav-link px-3"}>
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active px-3" : "nav-link px-3"}>
                    Contact
                  </NavLink>
                </li>
              </ul>

              {/* Dark Mode Toggle */}
              <div onChange={toggleTheme} className="toggle-switch">
                <label className="switch-label">
                  <input type="checkbox" className="checkbox" />
                  <span className="slider"></span>
                </label>
              </div>

              {/* WhatsApp Button */}
              <form className="d-flex justify-content-center my-2" role="search">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="btn text-white align-items-center justify-content-center"
                >
                  <a href="https://wa.me/917023735105" target="_blank" className="nav-link" rel="noopener noreferrer">
                    Connect With Me
                  </a>
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
