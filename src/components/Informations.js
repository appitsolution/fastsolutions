import React from "react"
import Container from "./Container"
import DescTitle from "./DescTitle"
import Button from "./Button"
import offer from "../images/icon/offer.svg"
import planetimg from "../images/planetimg.png"
import Slider2 from "./Slider2"
import CanvasJSReact from "../canvasjs.react"

const Informations = () => {
  const CanvasJS = CanvasJSReact.CanvasJS
  const CanvasJSChart = CanvasJSReact.CanvasJSChart
  const options = {
    animationEnabled: true,
    subtitles: [
      {
        text: "691",
        verticalAlign: "center",
        fontSize: 90,
        dockInsidePlotArea: true,
      },
    ],
    toolTip: {
      fontColor: "#dbd8e9",
      backgroundColor: "#4c3c90",
      Content: `{name} : {y}`,
    },
    data: [
      {
        type: "doughnut",
        color: "#DBD8E9",
        cursor: "pointer",
        dataPoints: [
          {
            name: `Ankieter terenowy`,
            y: `105`,
            color: "rgba(76, 60, 144, 1)",
          },
          { name: "Ankieter CATI", y: 63, color: "rgba(237, 235, 244, 1)" },
          {
            name: "Audytor",
            y: 446,
            color: "rgba(219, 216, 233, 1)",
            markerColor: "rgba(76, 60, 144, 1)",
          },
          { name: "Koordynator", y: 33, color: "rgba(183, 177, 211, 1)" },
          { name: "Moderator", y: 13, color: "rgba(148, 138, 188, 1)" },
          { name: "Transkrybent", y: 44, color: "rgba(112, 99, 166, 1)" },
        ],
      },
    ],
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
                  Szukają Państwo
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
          <div className="informations__team">
            <ul className="informations__offer-list">
              <li className="informations__offer-list-item">
                <CanvasJSChart options={options} />
              </li>
              <li className="informations__offer-list-item">
                <DescTitle>ZESPÓŁ</DescTitle>
                <h1 className="informations__offer-head">
                  Fast Solutions to
                  <span className="informations__offer-head-span">
                    zdywersyfikowany zespół ambitnych ludzi
                  </span>
                </h1>
                <p
                  className="informations__offer-text"
                  styles="max-width: 500px"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                  donec quisque aenean fermentum. Malesuada donec turpis
                  vulputate aliquam amet elit amet. Massa suscipit pulvinar
                  aliquet faucibus.
                </p>
              </li>
            </ul>
          </div>
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
