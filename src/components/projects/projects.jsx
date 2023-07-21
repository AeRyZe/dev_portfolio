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
    });

    return (
        <div id='projects-container'>
            <h2 id='projects-title' data-aos='fade-left' data-aos-anchor='#projects-container'>Travaux</h2>
            <div id='projects-content'>
                <ProjectCard
                    title='Booki'
                    image={Booki}
                    link='https://aeryze.github.io/Booki/'
                    text="créer la page d'accueil d'une agence de voyage avec HTML & CSS ; rendre un site web responsive pour appareils mobiles"
                    code='https://github.com/AeRyZe/Booki'
                    anim='fade-right'
                    anchor='#projects-container'
                    delay='200'
                />
                <ProjectCard
                    title='Sophie Bluel'
                    image={SophieBluel}
                    link='https://aeryze.github.io/SophieBluel/FrontEnd'
                    text="créer une page web dynamique avec JavaScript ; afficher des données à l'aide d'une API"
                    code='https://github.com/AeRyZe/SophieBluel'
                    anim='fade-left'
                    anchor='#projects-container'
                    delay='300'
                />
                <ProjectCard
                    title='Nina Carducci'
                    image={NinaCarducci}
                    link='https://aeryze.github.io/nina-carducci.github.io/'
                    text="débugger et optimiser un site de photographe (optimisation des images, optimisation de la structure du code, accroître le référencement)"
                    code='https://github.com/AeRyZe/nina-carducci.github.io'
                    anim='fade-right'
                    anchor='#projects-container'
                    delay='400'
                />
                <ProjectCard
                    title='Kasa'
                    image={Kasa}
                    link='https://kasa-self.vercel.app/'
                    text="créer une application web de location immobilière avec ReactJS ; utilisation de SASS pour améliorer l'interface"
                    code='https://github.com/AeRyZe/kasa'
                    anim='fade-left'
                    anchor='#projects-container'
                    delay='500'
                />
                <ProjectCard
                    title='Mon Vieux Grimoire'
                    link='https://mon-vieux-grimoire-server.onrender.com/api/books'
                    image={MonVieuxGrimoire}
                    text="développer le back-end d'un site de notation de livres avec NodeJS ; application des bonnes pratiques Green Code"
                    code='https://github.com/AeRyZe/mon-vieux-grimoire'
                    anim='fade-up'
                    anchor='#projects-container'
                    delay='600'
                />
            </div>
        </div>
    )
}

export default Projects