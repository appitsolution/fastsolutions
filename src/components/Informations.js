import React, { useEffect } from "react"
import Container from "./Container"
import { Link } from "gatsby"
import DescTitle from "./DescTitle"
import Button from "./Button"
import offer from "../images/icon/offer.svg"

import planetimg from "../images/planetimg.png"
import Slider2 from "./Slider2"
import ChartComponent from "./ChartComponent"
import Parallax from "./Parallax"

const Informations = () => {
  function getBodyScrollTop() {
    return (
      (document.documentElement && document.documentElement.scrollTop) ||
      (document.body && document.body.scrollTop)
    )
  }
  const openWindow = () => {
    document.querySelector(".backdrop").classList.add("active")
    document.body.style = "overflow: hidden;"
    const num = 125 + +getBodyScrollTop().toFixed()
    document.getElementById("popup").style.top = `${num}px`
  }
  return (
    <>
      <section className="informations">
        <Container>
          <div className="informations__offer">
            <ul className="informations__offer-list">
              <li className="informations__offer-list-item">
                <DescTitle>OFERTA</DescTitle>
                <h1 className="informations__offer-head">
                  Szukają Państwo{" "}
                  <span className="informations__offer-head-span">
                    skutecznych rozwiązań badawczych?
                  </span>
                </h1>
                <p className="informations__offer-text">
                  Zapraszamy do niezobowiązujących konsultacji z naszymi
                  ekspertami.
                </p>
                <ul className="informations__offer-buttons">
                  <li className="informations__offer-buttons-item">
                    <Link to="/brief" className="button">
                      Wypełnij brief
                    </Link>
                  </li>
                  <li className="informations__offer-buttons-item">
                    <button className="button" onClick={openWindow}>
                      Skontaktuj się
                    </button>
                  </li>
                </ul>
              </li>
              <li className="informations__offer-list-item">
                <ul className="informations__offer-list-item-offerlist">
                  <li className="informations__offer-list-item-offerlist-item">
                    <Parallax position="right">
                      <p className="informations__offer-list-item-offerlist-item-text">
                        Badania satysfakcji klientów
                      </p>
                    </Parallax>
                  </li>
                  <li className="informations__offer-list-item-offerlist-item">
                    <Parallax position="left">
                      <p className="informations__offer-list-item-offerlist-item-text">
                        Badania marketingowe
                      </p>
                    </Parallax>
                  </li>
                  <li className="informations__offer-list-item-offerlist-item">
                    <Parallax position="right">
                      <p className="informations__offer-list-item-offerlist-item-text">
                        Tajemniczy klient
                      </p>
                    </Parallax>
                  </li>
                  <li className="informations__offer-list-item-offerlist-item">
                    <Parallax position="left">
                      <p className="informations__offer-list-item-offerlist-item-text">
                        Badania rynku i opinii
                      </p>
                    </Parallax>
                  </li>
                </ul>
                <img
                  className="informations__offer-list-item-img"
                  src={offer}
                  alt="offer"
                />
              </li>
            </ul>
          </div>

          <Parallax position="left">
            <div className="informations__team">
              <ul className="informations__offer-list">
                <li className="informations__offer-list-item">
                  <ChartComponent />
                </li>
                <li className="informations__offer-list-item">
                  <DescTitle>ZESPÓŁ</DescTitle>
                  <h1 className="informations__offer-head">
                    Fast Solutions to{" "}
                    <span className="informations__offer-head-span">
                      zdywersyfikowany zespół ambitnych ludzi
                    </span>
                  </h1>
                  <p
                    className="informations__offer-text"
                    styles="max-width: 500px"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quis donec quisque aenean fermentum. Malesuada donec turpis
                    vulputate aliquam amet elit amet. Massa suscipit pulvinar
                    aliquet faucibus.
                  </p>
                </li>
              </ul>
            </div>
          </Parallax>
        </Container>
        <div className="informations__reference">
          <img src={planetimg} className="informations__reference-absolute" />
          <Container>
            <DescTitle>REFERENCJE</DescTitle>
            <h1 className="informations__reference-head">
              Marki, które nam zaufały
            </h1>
          </Container>
          <Slider2 />
        </div>
      </section>
    </>
  )
}
export default Informations
