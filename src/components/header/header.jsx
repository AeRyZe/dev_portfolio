import './header.css'
import Logo from '../../assets/wlogo.png'
import { HashLink as Link } from 'react-router-hash-link'

function Header() {
    return (
        <header>
            <nav>
                <img src={Logo} alt='Logo de Laurent Pardo' className='header-logo' />
                <div>
                    <Link to='/' className='header-link'>Accueil</Link>
                    <Link to='/' className='header-link'>À propos</Link>
                    <Link to='/' className='header-link'>Services</Link>
                    <Link to='/' className='header-link'>Travaux</Link>
                    <Link to='/' className='header-link'>Contact</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header