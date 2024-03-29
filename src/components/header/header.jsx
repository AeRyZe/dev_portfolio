import './header.css'
import { useState } from 'react'
import Logo from '../../assets/wlogo.png'
import { Link } from "react-scroll";
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
                <div id='header-container'>
                    <img src={Logo} alt='Logo de Laurent Pardo' className='header-logo' />
                    <div id='header-links'>
                        <Link to='banner-container' smooth={true} className='header-link'>Accueil</Link>
                        <Link to='about-container' smooth={true} className='header-link'>À propos</Link>
                        <Link to='skills-container' smooth={true} className='header-link'>Compétences</Link>
                        <Link to='projects-container' smooth={true} className='header-link'>Travaux</Link>
                        <Link to='contact-container' smooth={true} className='header-link'>Contact</Link>
                    </div>
                    <div id='menu-container' onClick={toggle}>
                        <FontAwesomeIcon className={isOpen ? 'icon-close' : 'icon-open'} id='menu-button' icon={isOpen ? faClose : faBars} />
                    </div>
                </div>
                <div id={isOpen ? 'menu-open' : 'menu-close'}>
                    <Link to='banner-container' smooth={true} onClick={toggle} offset={(-1 * window.innerWidth) / 10} className='menu-link'>Accueil</Link>
                    <Link to='about-container' smooth={true} onClick={toggle} offset={(-1 * window.innerWidth) / 10} className='menu-link'>À propos</Link>
                    <Link to='skills-container' smooth={true} onClick={toggle} offset={(-1 * window.innerWidth) / 10} className='menu-link'>Compétences</Link>
                    <Link to='projects-container' smooth={true} onClick={toggle} offset={(-1 * window.innerWidth) / 10} className='menu-link'>Travaux</Link>
                    <Link to='contact-container' smooth={true} onClick={toggle} offset={(-1 * window.innerWidth) / 10} className='menu-link'>Contact</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header