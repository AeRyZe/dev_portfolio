import './banner.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faStarOfLife } from '@fortawesome/free-solid-svg-icons'
import Galaxy from '../../assets/galaxy.png'

function Banner() {
    useEffect(() => {
        AOS.init();
    }, [])

    const palette = {
        white: '#ffffff',
        red: '#ff6464',
        yellow: '#fffb80',
        blue: '#76d5fe'
    }

    return (
        <div className='banner-container' id='banner-container'>
            <h1 data-aos='zoom-in' data-aos-delay='400' data-aos-duration='1000'>Bonjour ! <br/> Je suis Laurent Pardo, développeur front-end et back-end.</h1>
            <div className='banner-ui'>
                <FontAwesomeIcon id='banner-star-1' icon={faStarOfLife} beatFade style={{ color: palette.white }} />
                <FontAwesomeIcon id='banner-star-2' icon={faCircle} beatFade style={{ color: palette.red }} />
                <FontAwesomeIcon id='banner-star-3' icon={faCircle} beatFade style={{ color: palette.yellow }} />
                <FontAwesomeIcon id='banner-star-4' icon={faStarOfLife} beatFade style={{ color: palette.blue }} />
                <FontAwesomeIcon id='banner-star-5' icon={faCircle} beatFade style={{ color: palette.white }} />
                <FontAwesomeIcon id='banner-star-6' icon={faCircle} beatFade style={{ color: palette.red }} />
                <FontAwesomeIcon id='banner-star-7' icon={faStarOfLife} beatFade style={{ color: palette.yellow }} />
                <FontAwesomeIcon id='banner-star-8' icon={faCircle} beatFade style={{ color: palette.blue }} />
                <FontAwesomeIcon id='banner-star-9' icon={faCircle} beatFade style={{ color: palette.white }} />
                <FontAwesomeIcon id='banner-star-10' icon={faStarOfLife} beatFade style={{ color: palette.red }} />
            </div>
            <img className='galaxy' src={Galaxy} alt="Icône d'une galaxie" />
        </div>
    )
}

export default Banner