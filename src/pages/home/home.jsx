import './home.css'
import React from 'react'
import Banner from '../../components/banner/banner'
import About from '../../components/about/about'
import Skills from '../../components/skills/skills'
import Projects from '../../components/projects/projects'
import Contact from '../../components/contact/contact'

function Home() {
    return (
        <div id='body-container'>
            <Banner />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}

export default Home