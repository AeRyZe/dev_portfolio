import './about.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import UiSquare from '../ui-square/ui-square'
import SocialLink from '../social-link/social-link'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function About() {
    useEffect(() => {
        AOS.init();
    }, [])
    
    return (
        <div id='about-container'>
            <h2 id='about-title' data-aos='fade-left' data-aos-anchor='#about-container'>À propos</h2>
            <div id='about-content'>
                <p id='about-text' data-aos='fade-right' data-aos-anchor='#about-container' data-aos-delay='200'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rerum assumenda deserunt natus omnis vero fugit velit voluptatibus ut culpa, amet quis perspiciatis quam quo iure reprehenderit est autem facere.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam recusandae alias voluptates minus dolorem quaerat animi! Quibusdam quidem, perspiciatis labore autem iste culpa deleniti! Mollitia ad error id architecto laboriosam?
                </p>
                <UiSquare id='1' anim='fade-left' anchor='#about-container' delay='400' />
            </div>
            <SocialLink icon={faGithub} link='https://github.com/AeRyZe' anim='fade-up' anchor='#about-container' delay='600' />
        </div>
    )
}

export default About