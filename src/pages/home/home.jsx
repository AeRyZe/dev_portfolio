import './home.css'
import React from 'react'
import Banner from '../../components/banner/banner'
import About from '../../components/about/about'

function Home() {
    return (
        <React.StrictMode>
            <Banner />
            <About />
        </React.StrictMode>
    )
}

export default Home