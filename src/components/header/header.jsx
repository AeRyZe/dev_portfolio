import './header.css'
import { useState } from 'react'
import Logo from '../../assets/wlogo.png'
import { HashLink as Link } from 'react-router-hash-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <nav>
                <img src={Logo} alt='Logo de Laurent Pardo' className='header-logo' />
                <div id='header-links'>
                    <Link to='/#banner-container' className='header-link'>Accueil</Link>
                    <Link to='/#about-container' className='header-link'>À propos</Link>
                    <Link to='/#skills-container' className='header-link'>Compétences</Link>
                    <Link to='/#projects-container' className='header-link'>Travaux</Link>
                    <Link to='/#contact-container' className='header-link'>Contact</Link>
                </div>
                <div id='menu-container' onClick={toggle}>
                    <FontAwesomeIcon id='menu-button' icon={isOpen ? faClose : faBars} />
                </div>
                <div id={isOpen ? 'menu-open' : 'menu-close'}>
                    <Link to='/#banner-container' className='menu-link'>Accueil</Link>
                    <Link to='/#about-container' className='menu-link'>À propos</Link>
                    <Link to='/#skills-container' className='menu-link'>Compétences</Link>
                    <Link to='/#projects-container' className='menu-link'>Travaux</Link>
                    <Link to='/#contact-container' className='menu-link'>Contact</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header