import './social-link.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function SocialLink(props) {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <a className='social-link' href={props.link} data-aos={props.anim} data-aos-anchor={props.anchor} data-aos-delay={props.delay} >
            <div className='social-link-container'>
                <FontAwesomeIcon className='social-link-icon' icon={props.icon} />
            </div>
        </a>
    )
}

export default SocialLink