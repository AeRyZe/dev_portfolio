import './services.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import UiSquare from '../ui-square/ui-square'
import ServiceCard from '../service-card/service-card'

function Services() {
    useEffect(() => {
        AOS.init();
    })

    return (
        <div id='services-container'>
            <h2 id='services-title' data-aos='fade-right' data-aos-anchor='#services-container'>Services</h2>
            <div id='services-content'>
                <UiSquare id='2' anim='fade-right' anchor='#services-container' delay='200' />
                <div id='services-cards-container'>
                    <div id='front-end-cards'>
                        <h3 data-aos='fade-left' data-aos-anchor='#services-container' data-aos-delay='400'>Front-end</h3>
                        <ServiceCard icon='' anim='fade-down' anchor='#services-container' delay='600' />
                    </div>
                    <div id='back-end-cards'>
                        <h3 data-aos='fade-left' data-aos-anchor='#services-container' data-aos-delay='800'>Back-end</h3>
                        <ServiceCard icon='' anim='fade-up' anchor='#services-container' delay='1000' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services