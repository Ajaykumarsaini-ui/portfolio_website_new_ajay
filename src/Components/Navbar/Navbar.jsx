import React, { useState } from 'react'
import './Navbar.css'
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {

  const [menu , setMenu] = useState("home")

  return (

    
    <div className='navbar-bootstrap'>
      <nav className="navbar navbar-expand-lg sticky-top">
  <div className="container-fluid px-5">

    <a className="navbar-brand" href="#">Portfilio React</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="toggler-icon"> <i className="bi bi-list-stars"></i></span>
    </button>

    <div className="offcanvas bg-black text-white

offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Portfolio</h5>

        <button type="button" className="btn-close text-center" data-bs-dismiss="offcanvas" aria-label="Close" ><i className="bi bi-x-lg"></i></button>
      </div>

      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-center align-items-center flex-grow-1 pe-5">

          <li className="nav-item px-2">
            <Link
            to="Home"
            smooth={true}
            spy ={true}
            duration={200} onClick={()=>setMenu("home")} className="nav-link active" aria-current="page" href="#">Home</Link>
            
          </li>
          
          <li className="nav-item px-2">
            <Link
            to="About"
            smooth={true}
            spy ={true}
            duration={200} onClick={()=>setMenu("about")} className="nav-link active" aria-current="page" href="#">About Me</Link>
            
          </li>

          <li className="nav-item px-2">
            <Link
            to="Mywork"
            smooth={true}
            spy ={true}
            duration={200} onClick={()=>setMenu("portfolio")} className="nav-link active" aria-current="page" href="#">Portfolio</Link>
            
          </li>

          <li className="nav-item px-2">
            <Link
            to="Services"
            smooth={true}
            spy ={true}
            duration={200} onClick={()=>setMenu("services")} className="nav-link active" aria-current="page" href="#">Services</Link>
            
          </li>

          <li className="nav-item px-2">
            <Link activeClass="active"
                to="Contact"
                smooth={true}
                spy ={true}
                duration={200}
 onClick={()=>setMenu("contact")} className="nav-link active" aria-current="page" href="#">Contact</Link>
            
          </li>


        </ul>

        <form className="d-flex justify-content-center my-2" role="search">
          <button className="btn text-white align-items-center justify-content-center" type="submit">Connect With Me</button>
        </form>

      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
