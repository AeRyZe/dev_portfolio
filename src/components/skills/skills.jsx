import './skills.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import UiSquare from '../ui-square/ui-square'
import SkillsCard from '../skill-card/skill-card'
import { faHtml5, faSquareJs, faReact, faNode, faPhp } from '@fortawesome/free-brands-svg-icons'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'

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
                    <h3 data-aos='fade-left' data-aos-anchor='#skills-container' data-aos-delay='400'>Front-end</h3>
                    <div id='front-end-cards'>
                        <SkillsCard icon={faHtml5} anim='fade-down' anchor='#skills-container' delay='600' text='HTML5 & CSS3' />
                        <SkillsCard icon={faSquareJs} anim='fade-down' anchor='#skills-container' delay='600' text='JavaScript' />
                        <SkillsCard icon={faReact} anim='fade-down' anchor='#skills-container' delay='600' text='ReactJS' />
                    </div>
                    <h3 data-aos='fade-left' data-aos-anchor='#skills-container' data-aos-delay='800'>Back-end</h3>
                    <div id='back-end-cards'>
                        <SkillsCard icon={faNode} anim='fade-up' anchor='#skills-container' delay='1000' text='NodeJS' />
                        <SkillsCard icon={faLeaf} anim='fade-up' anchor='#skills-container' delay='1000' text='MongoDB' />
                        <SkillsCard icon={faPhp} anim='fade-up' anchor='#skills-container' delay='1000' text='PHP' />
                    </div>
                </div>
            </div>
            <p id='skills-tools' data-aos='fade-up' data-aos-anchor='#skills-container' data-aos-delay='1200'>
                <b>Outils :</b> GitHub, Visual Studio Code, npm, Postman, PhpMyAdmin, WAMP, Lighthouse, Google Analytics
            </p>
        </div>
    )
}

export default Skills