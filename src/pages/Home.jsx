import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import About from '../components/About'
import Consultation from '../components/Consultation'
import Portfolio from '../components/Portfolio'
import FormSection from '../components/FormSection'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <main className="relative">
            <Navbar />
            <Hero />
            <Projects />
            <About />
            <Consultation />
            <Portfolio />
            <FormSection />
            <Footer />
        </main>
    )
}

export default Home