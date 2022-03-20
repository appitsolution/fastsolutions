import React, { useState, useEffect } from "react"
import Container from "./Container"
import company1 from "../images/icon/company1.svg"
import company2 from "../images/icon/company2.svg"
import company3 from "../images/icon/company3.svg"
import company4 from "../images/icon/company4.svg"
import company5 from "../images/icon/company5.svg"
import facebook from "../images/icon/facebook.svg"
import twiter from "../images/icon/twiter.svg"
import linkedin from "../images/icon/linkedin.svg"
import logoFooter from "../images/icon/logo-footer.svg"
import { Link } from "gatsby"

const Footer = () => {
  const [num, setSuk] = useState(0)
  const [plus, setPlus] = useState(true)
  useEffect(() => {
    if (num > 1300) {
      setPlus(false)
    }
    if (num < 0) {
      setPlus(true)
    }
    plus ? setSuk(num + 0.1) : setSuk(num - 0.1)
  }, [num])
  return (
    <>
      <section className="footer">
        <div className="footer__companys">
          <ul
            className="footer__companys-list"
            style={{ transform: `translateX(-${num}px)` }}
          >
            <li className="footer__companys-list-item">
              <img src={company1} className="footer__companys-list-item-img" />
            </li>
            <li className="footer__companys-list-item">
              <img src={company2} className="footer__companys-list-item-img" />
            </li>
            <li className="footer__companys-list-item">
              <img src={company3} className="footer__companys-list-item-img" />
            </li>
            <li className="footer__companys-list-item">
              <img src={company4} className="footer__companys-list-item-img" />
            </li>
            <li className="footer__companys-list-item">
              <img src={company5} className="footer__companys-list-item-img" />
            </li>
            <li className="footer__companys-list-item">
              <img src={company1} className="footer__companys-list-item-img" />
            </li>
            <li className="footer__companys-list-item">
              <img src={company2} className="footer__companys-list-item-img" />
            </li>
            <li className="footer__companys-list-item">
              <img src={company3} className="footer__companys-list-item-img" />
            </li>
            <li className="footer__companys-list-item">
              <img src={company4} className="footer__companys-list-item-img" />
            </li>
            <li className="footer__companys-list-item">
              <img src={company1} className="footer__companys-list-item-img" />
            </li>
            <li className="footer__companys-list-item">
              <img src={company2} className="footer__companys-list-item-img" />
            </li>
            <li className="footer__companys-list-item">
              <img src={company3} className="footer__companys-list-item-img" />
            </li>
            <li className="footer__companys-list-item">
              <img src={company4} className="footer__companys-list-item-img" />
            </li>
            <li className="footer__companys-list-item">
              <img src={company5} className="footer__companys-list-item-img" />
            </li>
            <li className="footer__companys-list-item">
              <img src={company1} className="footer__companys-list-item-img" />
            </li>
            <li className="footer__companys-list-item">
              <img src={company2} className="footer__companys-list-item-img" />
            </li>
            <li className="footer__companys-list-item">
              <img src={company3} className="footer__companys-list-item-img" />
            </li>
            <li className="footer__companys-list-item">
              <img src={company4} className="footer__companys-list-item-img" />
            </li>
          </ul>
        </div>
        <Container>
          <div className="footer__information">
            <div className="footer__information-contacts">
              <img
                className="footer__information-contacts-img"
                src={logoFooter}
              />
              <ul className="footer__information-contacts-list">
                <li className="footer__information-contacts-list-item">
                  Agencja Badawczo-Marketingowa
                </li>
                <li className="footer__information-contacts-list-item">
                  FAST SOLUTIONS jest marką należącą
                </li>
                <li className="footer__information-contacts-list-item">
                  do Grupa WW sp. z o.o., z siedzibą
                </li>
                <li className="footer__information-contacts-list-item">
                  w Rzeszowie, Plac Jana Kilińskiego 2, 35-005, KRS:
                </li>
                <li className="footer__information-contacts-list-item">
                  0000413554, NIP: 8133671625, REGON: 180821757
                </li>
              </ul>
            </div>
            <div className="footer__information-feedback">
              <h1 className="footer__information-feedback-head">Oferta</h1>
              <ul className="footer__information-feedback-list">
                <li className="footer__information-feedback-list-item">
                  <Link
                    to="/testmark"
                    className="footer__information-feedback-list-item-link"
                  >
                    Badania marketingowe
                  </Link>
                </li>
                <li className="footer__information-feedback-list-item">
                  <Link
                    to="/socialstudies"
                    className="footer__information-feedback-list-item-link"
                  >
                    Badania społeczne
                  </Link>
                </li>
                <li className="footer__information-feedback-list-item">
                  <Link
                    to="/misteriousclient"
                    className="footer__information-feedback-list-item-link"
                  >
                    Tajemniczy Klient
                  </Link>
                </li>
                <li className="footer__information-feedback-list-item">
                  <a className="footer__information-feedback-list-item-link">
                    Badania jakości obsługi
                  </a>
                </li>
                <li className="footer__information-feedback-list-item">
                  <a className="footer__information-feedback-list-item-link">
                    Analiza statystyczna dla studentów i naukowców
                  </a>
                </li>
                <li className="footer__information-feedback-list-item">
                  <Link
                    to="/satisfaction"
                    className="footer__information-feedback-list-item-link"
                  >
                    Badania satysfakcji klientów
                  </Link>
                </li>
                <li className="footer__information-feedback-list-item">
                  <Link
                    to="/survey"
                    className="footer__information-feedback-list-item-link"
                  >
                    Badanie satysfakcji pracowników
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__information-navigation">
              <h1 className="footer__information-navigation-head">Nawigacja</h1>
              <ul className="footer__information-navigation-list">
                <li className="footer__information-navigation-list-item">
                  <Link
                    to="/"
                    className="footer__information-navigation-list-item-link"
                  >
                    Home
                  </Link>
                </li>
                <li className="footer__information-navigation-list-item">
                  <Link
                    to="/about"
                    className="footer__information-navigation-list-item-link"
                  >
                    O nas
                  </Link>
                </li>
                <li className="footer__information-navigation-list-item">
                  <Link
                    to="/joboffers"
                    className="footer__information-navigation-list-item-link"
                  >
                    Oferta
                  </Link>
                </li>
                <li className="footer__information-navigation-list-item">
                  <Link
                    to="/knowledgebase"
                    className="footer__information-navigation-list-item-link"
                  >
                    Baza wiedzy
                  </Link>
                </li>
                <li className="footer__information-navigation-list-item">
                  <Link
                    to="/blog"
                    className="footer__information-navigation-list-item-link"
                  >
                    Blog
                  </Link>
                </li>
                <li className="footer__information-navigation-list-item">
                  <a className="footer__information-navigation-list-item-link">
                    Polityka prywatności
                  </a>
                </li>
                <li className="footer__information-navigation-list-item">
                  <a className="footer__information-navigation-list-item-link">
                    RODO – Dane osobowe w badaniach
                  </a>
                </li>
                <li className="footer__information-navigation-list-item">
                  <Link
                    to="/contacts"
                    className="footer__information-navigation-list-item-link"
                  >
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__information-links">
              <h1 className="footer__information-links-head">Śledź nas</h1>
              <ul className="footer__information-links-list">
                <li className="footer__information-links-list-item">
                  <a href="#">
                    <img
                      src={facebook}
                      className="footer__information-links-list-item-img"
                    />
                  </a>
                </li>
                <li className="footer__information-links-list-item">
                  <a href="#">
                    <img
                      src={twiter}
                      className="footer__information-links-list-item-img"
                    />
                  </a>
                </li>
                <li className="footer__information-links-list-item">
                  <a href="#">
                    <img
                      src={linkedin}
                      className="footer__information-links-list-item-img"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
        <div className="footer__private">
          <p className="footer__private-text">
            Copyright © 2022. Pagepress || SoftGorillas . Wszystkie prawa
            zastrzeżone.
          </p>
        </div>
      </section>
    </>
  )
}
export default Footer
