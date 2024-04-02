import './skills.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import UiSquare from '../ui-square/ui-square'
import SkillsCard from '../skill-card/skill-card'
import { faHtml5, faCss3Alt, faSass, faSquareJs, faReact, faNode, faPhp } from '@fortawesome/free-brands-svg-icons'
import { faLeaf, faDatabase } from '@fortawesome/free-solid-svg-icons'

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
                        <div id='front-slider'>
                            <SkillsCard icon={faHtml5} width='5vw' anim='fade-down' anchor='#skills-container' delay={window.innerWidth <= 993 ? '400' : '600'} text='HTML5' />
                            <SkillsCard icon={faCss3Alt} width='5vw' anim='fade-down' anchor='#skills-container' delay={window.innerWidth <= 993 ? '400' : '600'} text='CSS3' />
                            <SkillsCard icon={faSass} anim='fade-down' anchor='#skills-container' delay={window.innerWidth <= 993 ? '400' : '600'} text='SASS' />
                            <SkillsCard icon={faSquareJs} anim='fade-down' anchor='#skills-container' delay={window.innerWidth <= 993 ? '400' : '600'} text='JavaScript' />
                            <SkillsCard icon={faReact} anim='fade-down' anchor='#skills-container' delay={window.innerWidth <= 993 ? '400' : '600'} text='ReactJS' />
                            <SkillsCard icon={faHtml5} width='5vw' anim='fade-down' anchor='#skills-container' delay={window.innerWidth <= 993 ? '400' : '600'} text='HTML5' />
                            <SkillsCard icon={faCss3Alt} width='5vw' anim='fade-down' anchor='#skills-container' delay={window.innerWidth <= 993 ? '400' : '600'} text='CSS3' />
                            <SkillsCard icon={faSass} anim='fade-down' anchor='#skills-container' delay={window.innerWidth <= 993 ? '400' : '600'} text='SASS' />
                            <SkillsCard icon={faSquareJs} anim='fade-down' anchor='#skills-container' delay={window.innerWidth <= 993 ? '400' : '600'} text='JavaScript' />
                            <SkillsCard icon={faReact} anim='fade-down' anchor='#skills-container' delay={window.innerWidth <= 993 ? '400' : '600'} text='ReactJS' />
                        </div>
                    </div>
                    <h3 data-aos='fade-left' data-aos-anchor='#skills-container' data-aos-delay={window.innerWidth <= 993 ? '600' : '800'}>Back-end</h3>
                    <div id='back-end-cards'>
                        <div id='back-slider'>
                            <SkillsCard icon={faNode} anim='fade-up' anchor='#skills-container' delay={window.innerWidth <= 993 ? '800' : '1000'} text='NodeJS' />
                            <SkillsCard icon={faLeaf} anim='fade-up' anchor='#skills-container' delay={window.innerWidth <= 993 ? '800' : '1000'} text='MongoDB' />
                            <SkillsCard icon={faPhp} anim='fade-up' anchor='#skills-container' delay={window.innerWidth <= 993 ? '800' : '1000'} text='PHP' />
                            <SkillsCard icon={faDatabase} anim='fade-up' anchor='#skills-container' delay={window.innerWidth <= 993 ? '800' : '1000'} text='MariaDB' />
                            <SkillsCard icon={faNode} anim='fade-up' anchor='#skills-container' delay={window.innerWidth <= 993 ? '800' : '1000'} text='NodeJS' />
                            <SkillsCard icon={faLeaf} anim='fade-up' anchor='#skills-container' delay={window.innerWidth <= 993 ? '800' : '1000'} text='MongoDB' />
                            <SkillsCard icon={faPhp} anim='fade-up' anchor='#skills-container' delay={window.innerWidth <= 993 ? '800' : '1000'} text='PHP' />
                            <SkillsCard icon={faDatabase} anim='fade-up' anchor='#skills-container' delay={window.innerWidth <= 993 ? '800' : '1000'} text='MariaDB' />
                        </div>
                    </div>
                </div>
            </div>
            <p id='skills-tools' data-aos='fade-up' data-aos-anchor='#skills-container' data-aos-delay={'1200'}>
                <b>Outils :</b> GitHub, Visual Studio Code, npm, Postman, PhpMyAdmin, WAMP, Lighthouse, Google Analytics
            </p>
        </section>
    )
}

export default Skills