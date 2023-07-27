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
    });

    return (
        <section id='skills-container'>
            <h2 id='skills-title' data-aos='fade-right' data-aos-anchor='#skills-container'>Compétences</h2>
            <div id='skills-content'>
                <UiSquare id='2' anim='fade-right' anchor='#skills-container' delay={window.innerWidth <= 993 ? '1000' : '200'} />
                <div id='skills-cards-container'>
                    <h3 data-aos='fade-left' data-aos-anchor='#skills-container' data-aos-delay={window.innerWidth <= 993 ? '200' : '400'}>Front-end</h3>
                    <div id='front-end-cards'>
                        <SkillsCard icon={faHtml5} anim='fade-down' anchor='#skills-container' delay={window.innerWidth <= 993 ? '400' : '600'} text='HTML5 & CSS3' />
                        <SkillsCard icon={faSquareJs} anim='fade-down' anchor='#skills-container' delay={window.innerWidth <= 993 ? '400' : '600'} text='JavaScript' />
                        <SkillsCard icon={faReact} anim='fade-down' anchor='#skills-container' delay={window.innerWidth <= 993 ? '400' : '600'} text='ReactJS' />
                    </div>
                    <h3 data-aos='fade-left' data-aos-anchor='#skills-container' data-aos-delay={window.innerWidth <= 993 ? '600' : '800'}>Back-end</h3>
                    <div id='back-end-cards'>
                        <SkillsCard icon={faNode} anim='fade-up' anchor='#skills-container' delay={window.innerWidth <= 993 ? '800' : '1000'} text='NodeJS' />
                        <SkillsCard icon={faLeaf} anim='fade-up' anchor='#skills-container' delay={window.innerWidth <= 993 ? '800' : '1000'} text='MongoDB' />
                        <SkillsCard icon={faPhp} anim='fade-up' anchor='#skills-container' delay={window.innerWidth <= 993 ? '800' : '1000'} text='PHP' />
                    </div>
                </div>
            </div>
            <p id='skills-tools' data-aos='fade-up' data-aos-anchor='#skills-container' data-aos-delay={'1200'}>
                <b>Outils :</b> GitHub, Visual Studio Code, npm, SASS, Postman, PhpMyAdmin, WAMP, Lighthouse, Google Analytics
            </p>
        </section>
    )
}

export default Skills