import React from 'react'
import { Routes , Route } from 'react-router'
import Layout from '../Layout'
import Hero from '../Components/Hero/Hero'
import About from '../Components/About/About'
import Services from '../Components/Services/Services'
import MyWork from '../Components/MyWork/MyWork'
import Contact from '../Components/Contact/Contact'

const Approute = () => {
  return (
    <>
    <Routes>
        {/* Add your routes here */}
        <Route path="/" element={<Layout />} >
        <Route index element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/mywork" element={<MyWork />} />
        <Route path="/contact" element={<Contact />} />
        </Route>
    </Routes>
      
    </>
  )
}

export default Approute
