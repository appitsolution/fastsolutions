import React from 'react';
import Container from './Container';
import DescTitle from './DescTitle';
import decstats from '../images/icon/decstats.svg'
import decstats2 from '../images/icon/decstats2.svg'
import RectanglTest from '../images/icon/RectanglTest.svg'
import slider from '../images/slider.jpg'
import slider2 from '../images/slider2.jpg'
const AboutCompany = () => {
    return(
        <>
        <section className='aboutcompany'>
            <Container>
                <div className='aboutcompany__stats'>
                    <DescTitle>
                        O FIRMIE
                    </DescTitle>
                    <ul className='aboutcompany__stats-list'>
                        <li className='aboutcompany__stats-list-item'>
                        <div className='aboutcompany__stats-list-item-block'>
                            <p className='aboutcompany__stats-list-item-head'>
                            10+
                        </p>
                        <p className='aboutcompany__stats-list-item-text'>
                            lat doświadczenia
                        </p>
                        </div>
                        </li>
                        <li className='aboutcompany__stats-list-item'>
                            <img src={decstats} alt="decstats" />
                            <div className='aboutcompany__stats-list-item-block'>
                                 <p className='aboutcompany__stats-list-item-head'>
                            220+
                        </p>
                        <p className='aboutcompany__stats-list-item-text'>
                           klientów
                        </p>
                            </div>
                        </li>
                        <li className='aboutcompany__stats-list-item'>
                            <img src={decstats2} alt="" />
                            <div className='aboutcompany__stats-list-item-block'>
                                <p className='aboutcompany__stats-list-item-head'>
                           650+
                        </p>
                        <p className='aboutcompany__stats-list-item-text'>
                           projektów
                        </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='aboutcompany__description'>
                    <ul className='aboutcompany__description-list'>
                        <li className='aboutcompany__description-list-item'>
                            <p className='aboutcompany__description-list-item-text'>
                                <span className='aboutcompany__description-list-item-text-span'>Agencja Badawczo-Marketingowa FAST SOLUTIONS</span> jest profesjonalnym podmiotem badawczym wyspecjalizowanym w projektowaniu i realizacji skutecznych rozwiązań z zakresu badań rynku i opinii oraz analiz.
                            </p>
                            <p className='aboutcompany__description-list-item-text'>
                                Prowadzimy badania  dla przedsiębiorstw z sektora MŚP, dużych korporacji i administracji państwowej oraz samorządowej. Nasze doświadczenie obejmuje ilościowe oraz jakościowe projekty badawcze wykonane dla takich firm jak <span className='aboutcompany__description-list-item-text-span'>PGNiG, ARRIVA, LIDL, PREMIUM MOBILE, CEFARM,  SANBank</span> i wielu innych.
                            </p>
                            <p className='aboutcompany__description-list-item-text'>
                                Dzięki wieloletniemu doświadczeniu i zespołowi skutecznych specjalistów, jesteśmy w stanie zaoferować Państwu rozwiązania szyte na miarę.
                            </p>
                        </li>
                        <li className='aboutcompany__description-list-item'>
                            <p className='aboutcompany__description-list-item-testing'>
                                Badania to sztuka zadawania trafnych pytań właściwym ludziom. <span className='aboutcompany__description-list-item-text-span'>Na tej sztuce znamy się bardzo dobrze!</span>
                                <img className='aboutcompany__description-list-item-testing-img' src={RectanglTest} alt="rectangl"/>
                            </p>
                        </li>
                    </ul>
                </div>
            </Container>
            <div className='aboutcompany__slider'>
                <ul className='aboutcompany__slider-list'>
                    <li className='aboutcompany__slider-list-item'>
                            <img className='aboutcompany__slider-list-item-img' src={slider} alt='office'/>
                    </li>
                    <li className='aboutcompany__slider-list-item'>
                        <img className='aboutcompany__slider-list-item-img' src={slider2} alt='team'/>                        
                    </li>
                </ul>
                <ul className='aboutcompany__slider-buttons'>
                    <li className='aboutcompany__slider-buttons-item'>
                        <button className='aboutcompany__slider-buttons-item-button'></button>
                    </li>
                    <li className='aboutcompany__slider-buttons-item'>
                        <button className='aboutcompany__slider-buttons-item-button active'></button>
                    </li>
                    <li className='aboutcompany__slider-buttons-item'>
                        <button className='aboutcompany__slider-buttons-item-button'></button>
                    </li>
                </ul>
            </div>
        </section>
        </>
    )
}
export default AboutCompany