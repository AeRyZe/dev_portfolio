import './about.css'
import { useEffect } from 'react'
import Particles from '@tsparticles/react'
import particlesConfig from '../tsParticles/space.json';
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

    const today = new Date();
    const todayDate = today.toJSON().slice(0, 10);
    const todayYear = todayDate.slice(0, 4);
    const todayMonth = todayDate.slice(5, 7);
    const todayDay = todayDate.slice(8, 10);

    const bday = "2000-10-28";
    const bdayYear = Number(bday.slice(0, 4));
    const bdayMonth = Number(bday.slice(5, 7));
    const bdayDay = Number(bday.slice(8, 10));

    const codeDate = "2013-02-16";
    const codeYear = Number(codeDate.slice(0, 4));

    const age = todayMonth >= bdayMonth && todayDay >= bdayDay ? todayYear - bdayYear : todayYear - (bdayYear + 1);
    const exp = (todayYear - codeYear);

    return (
        <section id='about-container'>
            <Particles
                id="tsparticles-about"
                options={particlesConfig} />
            <h2 id='about-title' data-aos='fade-left' data-aos-anchor='#about-container'>À propos</h2>
            <div id='about-content'>
                <p id='about-text' data-aos='fade-right' data-aos-anchor='#about-container' data-aos-delay='200'>
                    Jeune développeur de {age} ans, je suis passioné de codage depuis plus de {exp} ans.
                    <br></br>
                    J'ai développé des jeux vidéos sur une plateforme en ligne nommé ROBLOX.
                    <br></br>
                    Ma passion ne faiblissant pas au fil des années, j'ai pris la décision de faire de cette passion mon métier à travers le développement web.
                    <br></br>
                    C'est ainsi que j'ai décidé de suivre la formation d'Openclassrooms, formation qui nécessite de travailler en parfaite autonomie et d'être rigoureux.
                    <br></br>
                    Je suis quelqu'un de créatif, curieux, flexible, communicatif, autonome et déterminé à apprendre et maîtriser de nouveaux langages/outils.
                </p>
                <UiSquare id='1' anim='fade-left' anchor='#about-container' delay='400' />
            </div>
            <div id='about-links-container'>
                <SocialLink icon={faGithub} link='https://github.com/AeRyZe' anim='fade-up' anchor='#about-container' delay='600' />
                <SocialLink icon={faLinkedin} link='https://www.linkedin.com/in/laurent-pardo-4675ba246/' anim='fade-up' anchor='#about-container' delay='600' />
                <SocialLink icon={faEnvelope} link='mailto:laurent.pardo.dev@gmail.com' anim='fade-up' anchor='#about-container' delay='800' />
            </div>
        </section>
    )
}

export default About