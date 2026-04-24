import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Experiences from './sections/Experiences'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar />
      <section id='home'><Hero/></section>
      <section id='about'><About/></section>
      <Projects/>
      <section id='work'><Experiences/></section>
      <section id='contact'><Contact/></section>
      <Footer/>
      {/* <section className='min-h-screen'></section> */}
      {/* about */}
      {/* projects */}
      {/* experience */}
      {/* testimonial */}
      {/* contact */}
      {/* footer */}
    </div>
  )
}

export default App
