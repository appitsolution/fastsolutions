import React from 'react'
import { Link } from "gatsby"
import logo from '../images/icon/Logo.svg'
import '../sass/main.scss'

const Header = () => {
    return (
        <>
        <header className='header'>
            <nav className='navigation'>
        <Link to='/' className='navigation__logo'><img src={logo}/></Link>
        <ul className='navigation__list'>
        <li className='navigation__item'><Link to='/about' className='navigation__link' src="">O nas</Link></li>
        <li className='navigation__item'><a className='navigation__link' src="">Oferta</a></li>
        <li className='navigation__item'><a className='navigation__link' src="">Fokusownia Rzeszów</a></li>
        <li className='navigation__item'><a className='navigation__link' src="">Nasi Klienci</a></li>
        <li className='navigation__item'><a className='navigation__link' src="">Oferty pracy</a></li>
        <li className='navigation__item'><a className='navigation__link' src="">Baza wiedzy</a></li>
        <li className='navigation__item'><a className='navigation__link' src="">Kontakt</a></li>
        </ul>
        </nav>
        </header>
        </>
    )
}
export default Header