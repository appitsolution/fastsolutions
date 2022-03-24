import React from "react"
import Container from "./Container"
import DescTitle from "./DescTitle"
import grupaww from "../images/icon/grupaww.svg"
import gorilla from "../images/icon/gorilla.svg"
import gorillaActive from "../images/softgorillas.svg"
import Parallax from "./Parallax"
const Group = () => {
  return (
    <section className="group">
      <Container>
          <DescTitle>GRUPA WW</DescTitle>
          <h1 className="group__head">Razem tworzymy jakość</h1>
          <ul className="group__list">
            <li className="group__list-item">
              <img
                src={gorilla}
                className="group__list-item-img"
                alt="gorilla"
              />
              <img
                src={gorillaActive}
                className="group__list-item-img active"
                alt="gorilla"
              />
              <h2 className="group__list-item-head">SOFT GORILLAS</h2>
              <p className="group__list-item-text">
                Strona WWW dostępna dla osób niepełnosprawnych. Audyt
                Dostępności WCAG 2.0.
              </p>
            </li>
            <li className="group__list-item">
              <img
                src={grupaww}
                className="group__list-item-img"
                alt="grupaww"
              />
              <h2 className="group__list-item-head">GRUPA WW</h2>
              <p className="group__list-item-text">
                Strona WWW dostępna dla osób niepełnosprawnych. Audyt
                Dostępności WCAG 2.0.
              </p>
            </li>
          </ul>
      </Container>
    </section>
  )
}
export default Group
