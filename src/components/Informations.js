import React, { useEffect } from "react"
import Container from "./Container"
import DescTitle from "./DescTitle"
import Button from "./Button"
import offer from "../images/icon/offer.svg"
import planetimg from "../images/planetimg.png"
import Slider2 from "./Slider2"
import ChartComponent from "./ChartComponent"
import Parallax from "./Parallax"

const Informations = () => {
  return (
    <>
      <section className="informations">
        <Container>
          <Parallax position="right">
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
                      <Button>Wypełnij brief</Button>
                    </li>
                    <li className="informations__offer-buttons-item">
                      <Button>Skontaktuj się</Button>
                    </li>
                  </ul>
                </li>
                <li className="informations__offer-list-item">
                  <img
                    className="informations__offer-list-item-img"
                    src={offer}
                    alt="offer"
                  />
                </li>
              </ul>
            </div>
          </Parallax>
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
