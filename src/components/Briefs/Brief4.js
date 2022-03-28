import React from "react"
import Container from "../Container"
const Brief4 = ({ next, back }) => {
  return (
    <section className="brief4">
      <Container>
        <div className="brief4-block1">
          <ul className="brief-list">
            <li className="brief-list-item">
              <p className="brief-list-item-head">POZOSTAŁE OCZEKIWANIA</p>
            </li>
            <li className="brief-list-item">
              <p className="brief-list-item-toomb">|</p>
            </li>
            <li className="brief-list-item">
              <p className="brief-list-item-text">
                Prosimy podać, w jakiej formie pragną Państwo otrzymać dane
                zgromadzone podczas badań – kompleksowy raport w formacie .doc i
                .pdf, surowe dane w arkuszu kalkulacyjnym, prezentacja Power
                Point lub inne.
              </p>
            </li>
          </ul>
          <input
            className="brief-input"
            placeholder="Lorem ipsum dolor sit |"
          />
        </div>
        <div className="brief4-block2">
          <ul className="brief-list">
            <li className="brief-list-item">
              <p className="brief-list-item-head">INFORMACJE DODATKOWE</p>
            </li>
            <li className="brief-list-item">
              <p className="brief-list-item-toomb">|</p>
            </li>
            <li className="brief-list-item">
              <p className="brief-list-item-text">
                Prosimy wpisać dodatkowe informacje związane ze specyfiką
                zamówienia.
              </p>
            </li>
          </ul>
          <input className="brief-input" placeholder="Twoja odpowiedź..." />
        </div>
        <div className="brief4-button">
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
export default Brief4
