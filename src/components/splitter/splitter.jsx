import './splitter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faStarOfLife } from '@fortawesome/free-solid-svg-icons'

function Splitter() {
    const palette = {
        white: '#ffffff',
        red: '#ff6464',
        yellow: '#fffb80',
        blue: '#76d5fe'
    }

    return (
        <div className='splitter-container'>
            <FontAwesomeIcon id='splitter-star-1' icon={faStarOfLife} beatFade style={{ color: palette.red }} />
            <FontAwesomeIcon id='splitter-star-2' icon={faCircle} beatFade style={{ color: palette.yellow }} />
            <FontAwesomeIcon id='splitter-star-3' icon={faCircle} beatFade style={{ color: palette.white }} />
            <FontAwesomeIcon id='splitter-star-4' icon={faStarOfLife} beatFade style={{ color: palette.blue }} />
            <FontAwesomeIcon id='splitter-star-5' icon={faCircle} beatFade style={{ color: palette.red }} />
            <FontAwesomeIcon id='splitter-star-6' icon={faCircle} beatFade style={{ color: palette.white }} />
            <FontAwesomeIcon id='splitter-star-7' icon={faStarOfLife} beatFade style={{ color: palette.yellow }} />
            <FontAwesomeIcon id='splitter-star-8' icon={faCircle} beatFade style={{ color: palette.blue }} />
            <FontAwesomeIcon id='splitter-star-9' icon={faCircle} beatFade style={{ color: palette.red }} />
        </div>
    )
}

export default Splitter