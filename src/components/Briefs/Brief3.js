import React from "react"
import Container from "../Container"
const Brief3 = ({ next, back }) => {
  return (
    <section className="brief3">
      <Container>
        <div className="brief3-block1">
          <ul className="brief-list">
            <li className="brief-list-item">
              <p className="brief-list-item-head">
                PREFERENCJE DOTYCZĄCE METODOLOGII BADANIA
              </p>
            </li>
            <li className="brief-list-item">
              <p className="brief-list-item-toomb">|</p>
            </li>
            <li className="brief-list-item">
              <p className="brief-list-item-text">
                Jeżeli posiadają Państwo jakieś konkretne oczekiwania związane z
                metodami i technikami, które Państwa zdaniem powinny zostać
                zastosowane w badaniu
              </p>
            </li>
          </ul>
          <input
            className="brief-input"
            placeholder="Jeżeli posiadają Państwo jakieś konkretne oczekiwania związane z metodami i technikami, które Państwa zdaniem powinny zostać zastosowane w badaniu "
          />
        </div>
        <div className="brief3-block2">
          <ul className="brief-list">
            <li className="brief-list-item">
              <p className="brief-list-item-head">ZAKŁADANY BUDŻET</p>
            </li>
            <li className="brief-list-item">
              <p className="brief-list-item-toomb">|</p>
            </li>
            <li className="brief-list-item">
              <p className="brief-list-item-text">
                Umożliwi to nam zaproponowanie projektu badawczego
                uwzględniającego ograniczenia budżetowe i zastosowanie innych
                metod i technik badawczych, np. quasi reprezentatywnych.
              </p>
            </li>
          </ul>
          <input className="brief-input" placeholder="Twoja odpowiedź..." />
        </div>
        <div className="brief3-button">
          <button className="brief-button-back" onClick={back}>
            Wróć
          </button>
          <button className="button" onClick={next}>
            Dalej
          </button>
        </div>
      </Container>
    </section>
  )
}
export default Brief3
