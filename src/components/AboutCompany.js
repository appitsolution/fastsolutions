import React, { useEffect } from "react"
import CountUp from "react-countup"
import Container from "./Container"
import DescTitle from "./DescTitle"
import decstats from "../images/icon/decstats.svg"
import decstats2 from "../images/icon/decstats2.svg"
import RectanglTest from "../images/icon/RectanglTest.svg"
import Slider from "./Slider"
import Parallax from "./Parallax"

const AboutCompany = () => {
  return (
    <>
      <section className="aboutcompany">
        <Container>
          <div className="aboutcompany__stats">
            <DescTitle>O FIRMIE</DescTitle>
            <Parallax position="top">
              <ul className="aboutcompany__stats-list">
                <li className="aboutcompany__stats-list-item">
                  <div className="aboutcompany__stats-list-item-block">
                    <p className="aboutcompany__stats-list-item-head">
                      <CountUp start={0} end={10} />+
                    </p>
                    <p className="aboutcompany__stats-list-item-text">
                      lat doświadczenia
                    </p>
                  </div>
                </li>
                <li className="aboutcompany__stats-list-item">
                  <div className="aboutcompany__stats-list-item-block">
                    <p className="aboutcompany__stats-list-item-head">
                      <CountUp start={0} end={220} />+
                    </p>
                    <p className="aboutcompany__stats-list-item-text">
                      klientów
                    </p>
                  </div>
                </li>
                <li className="aboutcompany__stats-list-item">
                  <div className="aboutcompany__stats-list-item-block">
                    <p className="aboutcompany__stats-list-item-head">
                      <CountUp start={0} end={650} />+
                    </p>
                    <p className="aboutcompany__stats-list-item-text">
                      projektów
                    </p>
                  </div>
                </li>
              </ul>
            </Parallax>
          </div>
          <div className="aboutcompany__description">
            <ul className="aboutcompany__description-list">
              <li className="aboutcompany__description-list-item">
                <p className="aboutcompany__description-list-item-text">
                  <span className="aboutcompany__description-list-item-text-span">
                    Agencja Badawczo-Marketingowa FAST SOLUTIONS
                  </span>{" "}
                  jest profesjonalnym podmiotem badawczym wyspecjalizowanym w
                  projektowaniu i realizacji skutecznych rozwiązań z zakresu
                  badań rynku i opinii oraz analiz.
                </p>
                <p className="aboutcompany__description-list-item-text">
                  Prowadzimy badania dla przedsiębiorstw z sektora MŚP, dużych
                  korporacji i administracji państwowej oraz samorządowej. Nasze
                  doświadczenie obejmuje ilościowe oraz jakościowe projekty
                  badawcze wykonane dla takich firm jak{" "}
                  <span className="aboutcompany__description-list-item-text-span">
                    PGNiG, ARRIVA, LIDL, PREMIUM MOBILE, CEFARM, SANBank
                  </span>{" "}
                  i wielu innych.
                </p>
                <p className="aboutcompany__description-list-item-text">
                  Dzięki wieloletniemu doświadczeniu i zespołowi skutecznych
                  specjalistów, jesteśmy w stanie zaoferować Państwu rozwiązania
                  szyte na miarę.
                </p>
              </li>
              <li className="aboutcompany__description-list-item">
                <p className="aboutcompany__description-list-item-testing">
                  Badania to sztuka zadawania trafnych pytań właściwym ludziom.{" "}
                  <span className="aboutcompany__description-list-item-text-span">
                    Na tej sztuce znamy się bardzo dobrze!
                  </span>
                  <img
                    className="aboutcompany__description-list-item-testing-img"
                    src={RectanglTest}
                    alt="rectangl"
                  />
                </p>
              </li>
            </ul>
          </div>
        </Container>
        <Slider />
      </section>
    </>
  )
}
export default AboutCompany
