import React from "react"
import Container from "./Container"
import DescTitle from "./DescTitle"
import RectanglTest from "../images/icon/RectanglTest.svg"
import Notification from "./Notification"
const Offermark = ({ nameDesc, title, text, array, pointTeg }) => {
  return (
    <section className="offermark">
      <Container>
        {nameDesc && <DescTitle>{nameDesc}</DescTitle>}
        <p className="offermark__text">{text}</p>
        {title === undefined ? null : (
          <h1 className="offermark__head">{title}</h1>
        )}
        <ul className="offermark__list">
          {array.map((num, index) => {
            if (array.length - 1 === index && pointTeg) {
              return (
                <li className={`offermark__list-item notification`}>
                  <Notification position={"left-top"}>{num.head}</Notification>
                </li>
              )
            }
            return (
              <li className={`offermark__list-item ${num.blue}`}>
                {num.number && (
                  <p className="offermark__list-item-number">{num.number}</p>
                )}

                {num.head && (
                  <h2 className="offermark__list-item-head">{num.head}</h2>
                )}
                {num.text && (
                  <p className="offermark__list-item-text">{num.text}</p>
                )}
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
export default Offermark
