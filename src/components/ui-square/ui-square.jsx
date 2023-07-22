import './ui-square.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faStarOfLife } from '@fortawesome/free-solid-svg-icons'
import Sun from '../../assets/sun.png'
import Satellite from '../../assets/satellite.png'
import BlackHole from '../../assets/black-hole.png'
import Vortex from '../../assets/vortex.png'
import Mars from '../../assets/mars.png'
import Uranus from '../../assets/uranus.png'
import UFO from '../../assets/ufo.png'

function UiSquare(props) {
    const palette = {
        white: '#ffffff',
        red: '#ff6464',
        yellow: '#fffb80',
        blue: '#76d5fe'
    };

    useEffect(() => {
        AOS.init();
    });

    if (props.id === '1') {
        return (
            <div className='ui-square-container' data-aos={props.anim} data-aos-anchor={props.anchor} data-aos-delay={props.delay}>
                <FontAwesomeIcon id='about-star-1' icon={faStarOfLife} beatFade style={{ color: palette.red }} />
                <FontAwesomeIcon id='about-star-2' icon={faCircle} beatFade style={{ color: palette.white }} />
                <FontAwesomeIcon id='about-star-3' icon={faCircle} beatFade style={{ color: palette.yellow }} />
                <FontAwesomeIcon id='about-star-4' icon={faStarOfLife} beatFade style={{ color: palette.white }} />
                <FontAwesomeIcon id='about-star-5' icon={faStarOfLife} beatFade style={{ color: palette.blue }} />
                <FontAwesomeIcon id='about-star-6' icon={faCircle} beatFade style={{ color: palette.red}} />
                <img id='sun' src={Sun} alt="Icône du Soleil" />
                <img id='satellite' src={Satellite} alt="Icône d'un satellite" />
            </div>
        )
    } else if (props.id === '2') {
        return (
            <div className='ui-square-container' data-aos={props.anim} data-aos-anchor={props.anchor} data-aos-delay={props.delay}>
                <FontAwesomeIcon id='services-star-1' icon={faStarOfLife} beatFade style={{ color: palette.yellow }} />
                <FontAwesomeIcon id='services-star-2' icon={faCircle} beatFade style={{ color: palette.white }} />
                <FontAwesomeIcon id='services-star-3' icon={faCircle} beatFade style={{ color: palette.red }} />
                <FontAwesomeIcon id='services-star-4' icon={faStarOfLife} beatFade style={{ color: palette.blue }} />
                <FontAwesomeIcon id='services-star-5' icon={faStarOfLife} beatFade style={{ color: palette.red }} />
                <FontAwesomeIcon id='services-star-6' icon={faCircle} beatFade style={{ color: palette.yellow }} />
                <img id='black-hole' src={BlackHole} alt="Icône d'un trou noir" />
                <img id='vortex' src={Vortex} alt="Icône du vortex d'un trou noir" />
            </div>
        )
    } else if (props.id === '3') {
        return(
            <div className='ui-square-container' data-aos={props.anim} data-aos-anchor={props.anchor} data-aos-delay={props.delay}>
                <FontAwesomeIcon id='contact-star-1' icon={faStarOfLife} beatFade style={{ color: palette.yellow }} />
                <FontAwesomeIcon id='contact-star-2' icon={faCircle} beatFade style={{ color: palette.white }} />
                <FontAwesomeIcon id='contact-star-3' icon={faCircle} beatFade style={{ color: palette.red }} />
                <FontAwesomeIcon id='contact-star-4' icon={faStarOfLife} beatFade style={{ color: palette.blue }} />
                <FontAwesomeIcon id='contact-star-5' icon={faCircle} beatFade style={{ color: palette.white }} />
                <FontAwesomeIcon id='contact-star-6' icon={faCircle} beatFade style={{ color: palette.yellow }} />
                <img id='mars' src={Mars} alt="Icône de Mars" />
                <img id='ufo' src={UFO} alt="Icône d'un alien dans un UFO" />
                <img id='uranus' src={Uranus} alt="" />
            </div>
        )
    }
}

export default UiSquare