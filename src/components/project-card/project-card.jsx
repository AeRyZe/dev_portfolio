import './project-card.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function ProjectCard(props) {
    useEffect(() => {
        AOS.init();
    });

    return (
        <div className='project-card-container' data-aos={props.anim} data-aos-anchor={props.anchor} data-aos-delay={props.delay}>
            <h2 className='project-card-title'>{props.title}</h2>
            <div className='project-card-preview'>
                <img className='project-card-img' src={props.image} alt='Aperçu du site web'></img>
                {props.link ? <a className='project-card-overlay' target='_blank' rel='noreferrer' href={props.link}>Voir le site web</a> : null}
            </div>
            <a className='project-card-code' target='_blank' rel='noreferrer' href={props.code}>Voir le code source</a>
        </div>
    )
}

export default ProjectCard