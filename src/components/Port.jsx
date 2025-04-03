import React from 'react'

import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Technologies from './Technologies'
import Experience from './Youtube'
import Projects from './Projects'
import Contact from'./Contact'
import Myexperience from'./Myexperience'


const Port = () => {
  return (

    <div className='bg-darkGray overflow-x-hidden'> 
      <div className='container mx-auto px-8'>
      <Navbar/>        
      <Hero/>
      <section id="about">  
       <About/>
      </section>
      <Technologies/>
      <section id="projects">
      </section>
      <Myexperience/>
      <section id="mye">
        
      <Projects/></section>
      <section id="experience">
      <Experience/></section>
      <section id="contact">
      <Contact/></section>
    </div></div>
  
  )}
  export default Port
