import React from "react"
import Button from "../Button"
import Container from "../Container"
const Brief1 = ({ next }) => {
  return (
    <section className="brief1">
      <Container>
        <div className="brief1-block1">
          <ul className="brief-list">
            <li className="brief-list-item">
              <p className="brief-list-item-head">TYTUŁ</p>
            </li>
            <li className="brief-list-item">
              <p className="brief-list-item-toomb">|</p>
            </li>
            <li className="brief-list-item">
              <p className="brief-list-item-text">
                Prosimy maksymalnie jednoznacznie określić temat badania.
              </p>
            </li>
          </ul>
          <input
            className="brief-input"
            placeholder="Lorem ipsum dolor sit |"
          />
        </div>
        <div className="brief1-block2">
          <ul className="brief-list">
            <li className="brief-list-item">
              <p className="brief-list-item-head">KONTEKST MARKETINGOWY</p>
            </li>
            <li className="brief-list-item">
              <p className="brief-list-item-toomb">|</p>
            </li>
            <li className="brief-list-item">
              <p className="brief-list-item-text">
                Kilka zdań odnośnie aktualnej sytuacji rynkowej firmy, głównej
                konkurencji, docelowej grupie klientów oraz inne istotne
                informacje, które mogą się przydać w kontekście obecnego
                badania.
              </p>
            </li>
          </ul>
          <input className="brief-input" placeholder="Twoja odpowiedź..." />
        </div>
        <div className="brief1-button">
          <button className="button" onClick={next}>
            Dalej
          </button>
        </div>
      </Container>
    </section>
  )
}
export default Brief1
