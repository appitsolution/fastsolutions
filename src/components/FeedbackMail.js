import React, { useState } from "react"
import Container from "./Container"
import AdobeStock from "../images/AdobeStock.png"
import arrowRightBLue from "../images/icon/arrow-right-blue.svg"
const FeedbackMail = () => {
  const [checkedE, setCheckedE] = useState(false)
  const checked = () => {
    setCheckedE(!checkedE)
  }
  return (
    <>
      <section className="feedback">
        <Container>
          <div className="feedback__content">
            <div className="feedback__information">
              <h1 className="feedback__information-head">
                Dowiedz się jak{" "}
                <span className="feedback__information-head-span">
                  wiele możesz zyskać!
                </span>
              </h1>
              <p className="feedback__information-text">
                Napisz do nas, a na pewno doradzimy Ci najlepiej jak potrafimy.
              </p>
              <form className="feedback__information-form" type="submit">
                <div className="feedback__information-form-submit">
                  <input
                    className="feedback__information-form-input"
                    type="text"
                    placeholder="name@email.com"
                  />
                  <button className="feedback__information-form-button">
                    <img
                      className="feedback__information-form-icon"
                      src={arrowRightBLue}
                    />
                  </button>
                </div>
                <div className="feedback__information-form-accept-thoomb">
                  <input
                    className={`feedback__information-form-accept ${
                      checkedE && "active"
                    }`}
                    type="checkbox"
                    onClick={checked}
                  />
                  <span className="feedback__information-form-span">
                    Oświadczam, że dane podaję dobrowolnie, a Administrator
                    danych – Grupa WW Sp. z o. o. prowadzącą działaność pod
                    adresem: Plac Jana Kiliśnkiego 2, Rzeszów 35-005 – przekazał
                    mi informacje, o których mowa w art. 13 ust. 1 i 2
                    Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679
                    z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych
                    w związku z przetwarzaniem danych osobowych i w sprawie
                    swobodnego przepływu takich danych oraz uchylenia dyrektywy
                    95/46/WE (dalej jako „RODO”) – informacje te są dostępne
                    tutaj.
                  </span>
                </div>
              </form>
            </div>
            <img src={AdobeStock} className="feedback__content-img" />
          </div>
        </Container>
      </section>
    </>
  )
}
export default FeedbackMail
