import React from 'react'
import ContactSection from '../components/ContactComponents/ContactSection'
import NavbarLight from '../components/NavbarLight'
import Footer from '../components/Footer'
import ContactHero from '../components/ContactComponents/ContactHero'
import Navbar2 from '../components/Navbar2'

const Contact = () => {
  return (
    <>
    <Navbar2/>
    <ContactHero/>
    <ContactSection/>
    {/* <Footer/> */}
    </>
  )
}

export default Contact