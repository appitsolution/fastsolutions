import React from "react"
import Container from "./Container"
import DescTitle from "./DescTitle"
const Benefits = () => {
  return (
    <section className="benefits">
      <Container>
        <DescTitle>KORZYŚCI</DescTitle>
        <h1 className="benefits__head">
          Posiadamy doświadczenie merytoryczne i realizacyjne w projektach badań
          opinii społecznej na następujących grupach respondentów.
        </h1>
        <ul className="benefits__list">
          <li className="benefits__list-item">
            mieszkańcy obszarów miejskich i wiejskich
          </li>
          <li className="benefits__list-item">klienci indywidualni</li>
          <li className="benefits__list-item">klienci biznesowi</li>
          <li className="benefits__list-item">
            kadra niższego, średniego i wyższego szczebla przedsiębiorstw z
            niemal wszystkich sektorów
          </li>
          <li className="benefits__list-item">
            pacjenci publicznej i prywatnej służby zdrowia
          </li>
          <li className="benefits__list-item">wyborcy</li>
          <li className="benefits__list-item">
            pracownicy ośrodków pomocy społecznej
          </li>
          <li className="benefits__list-item">naczelnicy urzędów skarbowych</li>
          <li className="benefits__list-item">
            kadra kierownicza urzędów pracy v
          </li>
          <li className="benefits__list-item">pracownicy ośrodków kultury</li>
          <li className="benefits__list-item">
            pracownicy wyższego i niższego szczebla w szkołach średnich i
            uczelniach wyższych
          </li>
          <li className="benefits__list-item">
            przedstawiciele organizacji pożytku publicznego
          </li>
        </ul>
      </Container>
    </section>
  )
}
export default Benefits
