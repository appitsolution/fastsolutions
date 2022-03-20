import React from "react"
import Container from "./Container"
import DescTitle from "./DescTitle"
import phoneImg from "../images/phone.png"
import Parallax from "./Parallax"
const Why = ({ nameDesc, title, text }) => {
  return (
    <section className="why">
      <Container>
        <Parallax position="right">
          <ul className="why__list">
            <li className="why__list-item">
              <img className="why__list-item-img" src={phoneImg} />
            </li>
            <li className="why__list-item">
              <DescTitle>{nameDesc}</DescTitle>
              <h1 className="why__list-item-head">{title}</h1>
              <p className="why__list-item-text">{text}</p>
            </li>
          </ul>
        </Parallax>
      </Container>
    </section>
  )
}
export default Why
