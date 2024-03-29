import './skill-card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function SkillCard(props) {
    useEffect(() => {
        AOS.init();
    });

    return (
        <div className='skill-card-container' data-aos={props.anim} data-aos-anchor={props.anchor} data-aos-delay={props.delay}>
            <FontAwesomeIcon className='skill-card-icon' icon={props.icon} style={{ color: '#ffffff' }} />
            <p>{props.text}</p>
        </div>
    )
}

export default SkillCard