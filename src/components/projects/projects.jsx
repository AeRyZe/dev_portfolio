import './projects.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ProjectCard from '../project-card/project-card'
import Booki from '../../assets/projects/booki.png'
import SophieBluel from '../../assets/projects/sophiebluel.png'
import NinaCarducci from '../../assets/projects/ninacarducci.png'
import Kasa from '../../assets/projects/kasa.png'
import MonVieuxGrimoire from '../../assets/projects/monvieuxgrimoire.png'

function Projects() {
    useEffect(() => {
        AOS.init();
    })

    return (
        <div id='projects-container'>
            <h2 id='projects-title'>Travaux</h2>
            <div id='projects-content'>
                <ProjectCard
                    title='Booki'
                    image={Booki}
                    link='https://aeryze.github.io/Booki/'
                    text="Interface d'un site de locations immobilières"
                    code='https://github.com/AeRyZe/Booki'
                />
                <ProjectCard
                    title='Sophie Bluel'
                    image={SophieBluel}
                    link='https://aeryze.github.io/SophieBluel/FrontEnd'
                    text="Portfolio de la photographe Sophie Bluel"
                    code='https://github.com/AeRyZe/SophieBluel'
                />
                <ProjectCard
                    title='Nina Carducci'
                    image={NinaCarducci}
                    link='https://aeryze.github.io/nina-carducci.github.io/'
                    text="Optimisation SEO du site web de la photographe Nina Carducci"
                    code='https://github.com/AeRyZe/nina-carducci.github.io'
                />
                <ProjectCard
                    title='Kasa'
                    image={Kasa}
                    link='https://kasa-self.vercel.app/'
                    text="construire le front-end d'un site web avec ReactJS"
                    code='https://github.com/AeRyZe/kasa'
                />
                <ProjectCard
                    title='Mon Vieux Grimoire'
                    link='https://mon-vieux-grimoire-server.onrender.com/api/books'
                    image={MonVieuxGrimoire}
                    text="construire le back-end d'un site web avec NodeJS"
                    code='https://github.com/AeRyZe/mon-vieux-grimoire'
                />
            </div>
        </div>
    )
}

export default Projects