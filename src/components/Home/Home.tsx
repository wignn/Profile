import React from 'react'
import Hero from './Hero'
import About from '../About/About'
import Service from '../service/Service'
import Project from '../Project/Project'
import Skills from '../Skills/Skills'
import Contact from '../Contact/Contact'

const HomeComponent = () => {
  return (
    <div className='overflow-hidden'> 
    <Hero/>
    <About/>
    <Service/>
    <Project/>
    <Skills/>
    <Contact/>
    </div>
  )
}

export default HomeComponent