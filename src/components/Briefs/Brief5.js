import React from "react"
import Container from "../Container"
const Brief5 = ({ next, back }) => {
  return (
    <section className="brief5">
      <Container>
        <div className="brief5-block1">
          <ul className="brief-list">
            <li className="brief-list-item">
              <p className="brief-list-item-head">OSOBA KONTAKTOWA:</p>
            </li>
            <li className="brief-list-item">
              <p className="brief-list-item-toomb">|</p>
            </li>
            <li className="brief-list-item">
              <p className="brief-list-item-text">
                Osoba, do której zostanie wysłana sporządzona przez nas oferta.
              </p>
            </li>
          </ul>
          <input className="brief-input" placeholder="John Doe" />
        </div>
        <div className="brief5-block2">
          <ul className="brief-list">
            <li className="brief-list-item">
              <p className="brief-list-item-head">ADRES E-MAIL</p>
            </li>
            <li className="brief-list-item">
              <p className="brief-list-item-toomb">|</p>
            </li>
            <li className="brief-list-item">
              <p className="brief-list-item-text">
                Adres, na który wyślemy sporządzoną dla Państwa ofertę.
              </p>
            </li>
          </ul>
          <input className="brief-input" placeholder="Twoja odpowiedź..." />
        </div>
        <div className="brief5-block3">
          <ul className="brief-list">
            <li className="brief-list-item">
              <p className="brief-list-item-head">NUMER TELEFONU</p>
            </li>
            <li className="brief-list-item">
              <p className="brief-list-item-toomb">|</p>
            </li>
            <li className="brief-list-item">
              <p className="brief-list-item-text">
                Potrzebny w razie konieczności uszczegółowienia niektórych
                kwestii podczas przygotowywania oferty.
              </p>
            </li>
          </ul>
          <input className="brief-input" placeholder="Twoja odpowiedź..." />
        </div>
        <div className="brief5-button">
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
export default Brief5
