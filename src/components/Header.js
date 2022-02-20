import React from "react"
import { Link } from "gatsby"
import logo from "../images/icon/Logo.svg"
import imgBottom from "../images/icon/arrow-bottom.svg"
import "../sass/main.scss"

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="navigation">
          <Link to="/" className="navigation__logo">
            <img src={logo} />
          </Link>
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link to="/about" className="navigation__link">
                O nas
                <img src={imgBottom} className="navigation__item-img" />
              </Link>
            </li>
            <li className="navigation__item">
              <a className="navigation__link" src="">
                Oferta
                <div className="navigation__link-block">
                  <ul className="navigation__link-list">
                    <li className="navigation__link-list-item">
                      <Link
                        to="/testmark"
                        className="navigation__link-list-item-link"
                      >
                        Badania marketingowe
                      </Link>
                    </li>
                    <li className="navigation__link-list-item">
                      <Link
                        to="/satisfaction"
                        className="navigation__link-list-item-link"
                      >
                        Badania satysfakcji klientów
                      </Link>
                    </li>
                    <li className="navigation__link-list-item">
                      <Link
                        to="/misteriousclient"
                        className="navigation__link-list-item-link"
                      >
                        Tajemniczy klient
                      </Link>
                    </li>
                    <li className="navigation__link-list-item">
                      <Link
                        to="/socialstudies"
                        className="navigation__link-list-item-link"
                      >
                        Badania społeczne
                      </Link>
                    </li>
                    <li className="navigation__link-list-item">
                      <Link
                        to="/survey"
                        className="navigation__link-list-item-link"
                      >
                        Badanie Satysfkacji Praconików
                      </Link>
                    </li>
                    <li className="navigation__link-list-item">
                      <Link
                        to="/fieldwork"
                        className="navigation__link-list-item-link"
                      >
                        Koordynacja i realizacja badań - Fieldwork
                      </Link>
                    </li>
                  </ul>
                </div>
                <img src={imgBottom} className="navigation__item-img" />
              </a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link" src="">
                Fokusownia Rzeszów
              </a>
            </li>
            <li className="navigation__item">
              <Link to="/ourcustomers" className="navigation__link">
                Nasi Klienci
              </Link>
            </li>
            <li className="navigation__item">
              <Link to="/joboffers" className="navigation__link">
                Oferty pracy
              </Link>
            </li>
            <li className="navigation__item">
              <a className="navigation__link" src="">
                Baza wiedzy
                <img src={imgBottom} className="navigation__item-img" />
              </a>
            </li>
            <li className="navigation__item">
              <Link to="/contacts" className="navigation__link">
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
export default Header
