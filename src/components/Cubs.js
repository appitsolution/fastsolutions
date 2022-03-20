import React from "react"
import Container from "./Container"
import DescTitle from "./DescTitle"
import plus from "../images/icon/plus.svg"
import Parallax from "./Parallax"
const Cubs = () => {
  return (
    <section className="cubs">
      <Container>
        <div className="cubs__content">
          <div className="cubs__content-block">
            <Parallax position="left">
              <DescTitle>KORZYŚCI</DescTitle>
              <h1 className="cubs__head">
                Korzyści jakich może dostarczyć przeprowadzone badanie
                satysfakcji pracowników to m.in.:
              </h1>
            </Parallax>
            <Parallax position="right">
              <ul className="cubs__list">
                <li className="cubs__list-item">
                  <img src={plus} className="cubs__list-item-img" />
                  Poznanie słabych i mocnych stron polityki personalnej firmy,
                </li>
                <li className="cubs__list-item">
                  <img src={plus} className="cubs__list-item-img" />
                  Ocena poziomu zadowolenia z prowadzonego stylu zarządzania,
                </li>
                <li className="cubs__list-item">
                  <img src={plus} className="cubs__list-item-img" />
                  Określenie poziomu identyfikacji pracowników z firmą,
                </li>
                <li className="cubs__list-item">
                  <img src={plus} className="cubs__list-item-img" />
                  Budowanie spójnego wizerunku firmy, jako potencjalnego
                  pracodawcy,
                </li>
                <li className="cubs__list-item">
                  <img src={plus} className="cubs__list-item-img" />
                  Wzmocnienie motywacji pracowników do wykonywanych zadań,
                </li>
                <li className="cubs__list-item">
                  <img src={plus} className="cubs__list-item-img" />
                  Eliminacja nieefektywnych narzędzi komunikacji wewnętrznej,
                </li>
                <li className="cubs__list-item">
                  <img src={plus} className="cubs__list-item-img" />
                  Wzrost poziomu zadowolenia pracowników, gdyż poczują się przez
                  Państwa docenieni.
                </li>
              </ul>
            </Parallax>
            <div className="cubs__backdrop"></div>
          </div>
        </div>
      </Container>
    </section>
  )
}
export default Cubs
