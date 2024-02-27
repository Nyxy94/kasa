import logo from '../../assets/logo.svg'
import './header.scss'
import { NavLink } from 'react-router-dom'



function Header() {
    return (
        <header className="header">
            <img src={logo} alt="kasa" className="header__logo" />
            <nav className="header__nav">
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/About">A Propos</NavLink>
            </nav>
        </header>
    )
}

export default Header