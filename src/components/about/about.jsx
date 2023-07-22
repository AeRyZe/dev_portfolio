import './about.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import UiSquare from '../ui-square/ui-square'
import SocialLink from '../social-link/social-link'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function About() {
    useEffect(() => {
        AOS.init();
    });
    
    return (
        <div id='about-container'>
            <h2 id='about-title' data-aos='fade-left' data-aos-anchor='#about-container'>À propos</h2>
            <div id='about-content'>
                <p id='about-text' data-aos='fade-right' data-aos-anchor='#about-container' data-aos-delay='200'>
                    Jeune développeur de 23 ans, je suis passioné de codage depuis plus de 11 ans.
                    <br></br>
                    J'ai développé des jeux vidéos sur une plateforme en ligne dénommé ROBLOX.
                    <br></br>
                    Ma passion ne faiblissant pas au fil des années, j'ai pris la décision de faire de cette passion mon métier à plein temps à travers le développement web.
                    <br></br>
                    C'est ainsi que j'ai décidé de suivre la formation distancielle d'Openclassrooms, formation qui nécessite de travailler en parfaite autonomie et d'être rigoureux.
                    <br></br>
                    Je suis quelqu'un de créatif, curieux, flexible, communicatif, rigoureux et très déterminé à apprendre et maîtriser de nouveaux langages/outils.
                </p>
                <UiSquare id='1' anim='fade-left' anchor='#about-container' delay='400' />
            </div>
            <div id='about-links-container'>
                <SocialLink icon={faGithub} link='https://github.com/AeRyZe' anim='fade-up' anchor='#about-container' delay='600' />
                <SocialLink icon={faLinkedin} link='https://www.linkedin.com/in/laurent-pardo-4675ba246/' anim='fade-up' anchor='#about-container' delay='600' />
                <SocialLink icon={faEnvelope} link='mailto:laurent.pardo.dev@gmail.com' anim='fade-up' anchor='#about-container' delay='800' />
            </div>
        </div>
    )
}

export default About