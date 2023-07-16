import './home.css'
import React from 'react'
import Banner from '../../components/banner/banner'
import About from '../../components/about/about'
import Splitter from '../../components/splitter/splitter'
import Services from '../../components/services/services'

function Home() {
    return (
        <div id='body-container'>
            <Banner />
            <About />
            <Splitter />
            <Services />
            <Splitter />
        </div>
    )
}

export default Home