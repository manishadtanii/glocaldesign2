import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import About from '../components/About'
import Consultation from '../components/Consultation'
import Portfolio from '../components/Portfolio'

const Home = () => {
    return (
        <main className="relative">
            <Navbar />
            <Hero />
            <Projects />
            <About />
            <Consultation />
            <Portfolio />
        </main>
    )
}

export default Home