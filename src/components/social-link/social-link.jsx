import './social-link.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SocialLink(props) {
    return (
        <a className='social-link' href='' data-aos='' data-aos-anchor='' data-aos-delay='' >
            <div className='social-link-container'>
                <FontAwesomeIcon icon={props.icon} />
            </div>
        </a>
    )
}

export default SocialLink