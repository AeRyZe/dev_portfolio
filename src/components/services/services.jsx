import './services.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import UiSquare from '../ui-square/ui-square'

function Services() {
    useEffect(() => {
        AOS.init();
    })

    return (
        <div id='services-container'>
            <h2 id='services-title' data-aos='fade-down' data-aos-anchor='#services-container'>Services</h2>
            <UiSquare id='2' anim='fade-right' anchor='#services-container' delay='200' />
        </div>
    )
}

export default Services