import './projects.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import UiSquare from '../ui-square/ui-square'

function Projects() {
    useEffect(() => {
        AOS.init();
    })

    return (
        <div id='projects-container'>
            <h2 id='projects-title'>Travaux</h2>
            <div id='projects-content'>
                <div id='projects-cards'>

                </div>
                <UiSquare id='3' anim='' anchor='' delay='' />
            </div>
        </div>
    )
}

export default Projects