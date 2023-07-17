import './home.css'
import React from 'react'
import Banner from '../../components/banner/banner'
import About from '../../components/about/about'
import Skills from '../../components/skills/skills'

function Home() {
    return (
        <div id='body-container'>
            <Banner />
            <About />
            <Skills />
        </div>
    )
}

export default Home