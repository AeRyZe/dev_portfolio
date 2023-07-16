import './home.css'
import React from 'react'
import Banner from '../../components/banner/banner'
import About from '../../components/about/about'
import Splitter from '../../components/splitter/splitter'

function Home() {
    return (
        <div id='body-container'>
            <Banner />
            <About />
            <Splitter />
        </div>
    )
}

export default Home