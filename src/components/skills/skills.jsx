import './skills.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import UiSquare from '../ui-square/ui-square'
import ServiceCard from '../skills-cards/skills-card'

function Skills() {
    useEffect(() => {
        AOS.init();
    })

    return (
        <div id='skills-container'>
            <h2 id='skills-title' data-aos='fade-right' data-aos-anchor='#skills-container'>Compétences</h2>
            <div id='skills-content'>
                <UiSquare id='2' anim='fade-right' anchor='#skills-container' delay='200' />
                <div id='skills-cards-container'>
                    <div id='front-end-cards'>
                        <h3 data-aos='fade-left' data-aos-anchor='#skills-container' data-aos-delay='400'>Front-end</h3>
                        <ServiceCard icon='' anim='fade-down' anchor='#skills-container' delay='600' />
                    </div>
                    <div id='back-end-cards'>
                        <h3 data-aos='fade-left' data-aos-anchor='#skills-container' data-aos-delay='800'>Back-end</h3>
                        <ServiceCard icon='' anim='fade-up' anchor='#skills-container' delay='1000' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills