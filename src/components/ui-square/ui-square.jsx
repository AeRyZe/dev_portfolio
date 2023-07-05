import './ui-square.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import Sun from '../../assets/sun.png'
import Satellite from '../../assets/satellite.png'

function UiSquare(props) {
    useEffect(() => {
        AOS.init();
    })

    if (props.id === '1') {
        return (
            <div className='ui-square-container' data-aos={props.anim} data-aos-anchor={props.anchor} data-aos-delay={props.delay}>
                <FontAwesomeIcon id='about-star-1' icon={faCircle} beatFade style={{ color: "#ffffff", }} />
                <FontAwesomeIcon id='about-star-2' icon={faCircle} beatFade style={{ color: "#ffffff", }} />
                <FontAwesomeIcon id='about-star-3' icon={faCircle} beatFade style={{ color: "#ffffff", }} />
                <FontAwesomeIcon id='about-star-4' icon={faCircle} beatFade style={{ color: "#ffffff", }} />
                <FontAwesomeIcon id='about-star-5' icon={faCircle} beatFade style={{ color: "#ffffff", }} />
                <FontAwesomeIcon id='about-star-6' icon={faCircle} beatFade style={{ color: "#ffffff", }} />
                <img id='sun' src={Sun} alt="Icône du Soleil" />
                <img id='satellite' src={Satellite} alt="Icône d'un satellite" />
            </div>
        )
    }
}

export default UiSquare