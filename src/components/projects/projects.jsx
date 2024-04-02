import './projects.css'
import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ProjectCard from '../project-card/project-card'

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function getData() {
            const results = await fetch('/projects.json');
            const data = await results.json();
            setProjects(data);
        }
        getData();
    }, []);

    useEffect(() => {
        AOS.init();
    });

    return (
        <section id='projects-container'>
            <h2 id='projects-title' data-aos='fade-left' data-aos-anchor='#projects-container'>Travaux</h2>
            <div id='projects-content'>
                {
                    projects.map((project, index) => {
                        return (
                            <ProjectCard
                                key={project.name}
                                title={project.name}
                                image={project.image}
                                link={project.link}
                                code={project.code}
                                anim={index % 2 ? 'fade-left' : 'fade-right'}
                                anchor='#projects-container'
                                delay={`${200 * (index + 1)}`}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Projects