import './ui-square.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faStarOfLife } from '@fortawesome/free-solid-svg-icons'
import Sun from '../../assets/sun.png'
import Satellite from '../../assets/satellite.png'

function UiSquare(props) {
    const palette = {
        white: '#ffffff',
        red: '#ff6464',
        yellow: '#fffb80',
        blue: '#76d5fe'
    }

    useEffect(() => {
        AOS.init();
    })

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
    }
}

export default UiSquare