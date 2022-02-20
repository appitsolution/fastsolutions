import React from "react";
import Container from "./Container";
import company1 from '../images/icon/company1.svg'
import company2 from '../images/icon/company2.svg'
import company3 from '../images/icon/company3.svg'
import company4 from '../images/icon/company4.svg'
import company5 from '../images/icon/company5.svg'
import facebook from '../images/icon/facebook.svg'
import twiter from '../images/icon/twiter.svg'
import linkedin from '../images/icon/linkedin.svg'
import logoFooter from '../images/icon/logo-footer.svg'
import { Link } from 'gatsby';

const Footer = () => {
return(
    <>
    <section className="footer">
        <div className="footer__companys">
                <ul className="footer__companys-list">
                    <li className="footer__companys-list-item">
                        <img src={company1} className="footer__companys-list-item-img"/>
                    </li>
                    <li className="footer__companys-list-item">
                        <img src={company2} className="footer__companys-list-item-img"/>
                    </li>
                    <li className="footer__companys-list-item">
                        <img src={company3} className="footer__companys-list-item-img"/>
                    </li>
                    <li className="footer__companys-list-item">
                        <img src={company4} className="footer__companys-list-item-img"/>
                    </li>
                    <li className="footer__companys-list-item">
                        <img src={company5} className="footer__companys-list-item-img"/>
                    </li>
                    <li className="footer__companys-list-item">
                        <img src={company1} className="footer__companys-list-item-img"/>
                    </li>
                    <li className="footer__companys-list-item">
                        <img src={company2} className="footer__companys-list-item-img"/>
                    </li>
                    <li className="footer__companys-list-item">
                        <img src={company3} className="footer__companys-list-item-img"/>
                    </li>
                    <li className="footer__companys-list-item">
                        <img src={company4} className="footer__companys-list-item-img"/>
                    </li>
                </ul>
        </div>
        <Container>
            <div className="footer__information">
                <div className="footer__information-contacts">
                        <img className="footer__information-contacts-img" src={logoFooter}/>
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
                    <h1 className="footer__information-feedback-head">
                        Oferta
                    </h1>
                    <ul className="footer__information-feedback-list">
                        <li className="footer__information-feedback-list-item">
                            <a className="footer__information-feedback-list-item-link">
                                Badania marketingowe
                            </a>
                        </li>
                        <li className="footer__information-feedback-list-item">
                            <a className="footer__information-feedback-list-item-link">
                                Badania społeczne
                            </a>
                        </li>
                        <li className="footer__information-feedback-list-item">
                            <a className="footer__information-feedback-list-item-link">
                                Tajemniczy Klient
                            </a>
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
                            <a className="footer__information-feedback-list-item-link">
                                Badania satysfakcji klientów
                            </a>
                        </li>
                        <li className="footer__information-feedback-list-item">
                            <a className="footer__information-feedback-list-item-link">
                                Badanie satysfakcji pracowników
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer__information-navigation">
                    <h1 className="footer__information-navigation-head">
                        Nawigacja
                    </h1>
                    <ul className="footer__information-navigation-list">
                        <li className="footer__information-navigation-list-item">
                            <Link className="footer__information-navigation-list-item-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="footer__information-navigation-list-item">
                            <Link className="footer__information-navigation-list-item-link" to="/about">
                                O nas
                            </Link>
                        </li>
                        <li className="footer__information-navigation-list-item">
                            <a className="footer__information-navigation-list-item-link">
                                Oferta
                            </a>
                        </li>
                        <li className="footer__information-navigation-list-item">
                            <a className="footer__information-navigation-list-item-link">
                                Baza wiedzy
                            </a>
                        </li>
                        <li className="footer__information-navigation-list-item">
                            <a className="footer__information-navigation-list-item-link">
                                Blog
                            </a>
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
                            <a className="footer__information-navigation-list-item-link">
                                Kontakt
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer__information-links">
                        <h1 className="footer__information-links-head">
                            Śledź nas
                        </h1>
                        <ul className="footer__information-links-list">
                            <li className="footer__information-links-list-item">
                                <img src={facebook} className="footer__information-links-list-item-img"/>
                            </li>
                            <li className="footer__information-links-list-item">
                                <img src={twiter} className="footer__information-links-list-item-img"/>
                            </li>
                            <li className="footer__information-links-list-item">
                                <img src={linkedin} className="footer__information-links-list-item-img"/>
                            </li>
                        </ul>
                </div>
            </div>
        </Container>
        <div className="footer__private">
            <p className="footer__private-text">Copyright © 2022. Pagepress || SoftGorillas . Wszystkie prawa zastrzeżone.</p>
        </div>
    </section>
    </>
)
}
export default Footer