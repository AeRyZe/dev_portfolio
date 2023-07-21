import './footer.css'
import SocialLink from '../social-link/social-link'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer>
            <div id='footer-links-container'>
                <SocialLink icon={faGithub} link='https://github.com/AeRyZe' />
                <SocialLink icon={faLinkedin} link='https://www.linkedin.com/in/laurent-pardo-4675ba246/' />
                <SocialLink icon={faEnvelope} link='mailto:laurent.pardo.dev@gmail.com' />
            </div>
            <p>Site web réalisé à la main par Laurent Pardo</p>
        </footer>
    )
}

export default Footer