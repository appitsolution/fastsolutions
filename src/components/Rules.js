import React from "react"
import Container from "./Container"
import DescTitle from "./DescTitle"
import Rectangle2 from "../images/icon/Rectangle2.svg"
import ParallaxY from "./ParallaxY"
const Rules = () => {
  return (
    <section className="rules">
      <Container>
        <DescTitle>ZASADY</DescTitle>
        <p className="rules__text">
          Jako doświadczona firma badawcza{" "}
          <span className="rules__text-span">
            współpracę z naszymi Klientami opieramy na przejrzystych zasadach.
          </span>
          <img src={Rectangle2} className="rules__text-img" alt="rectangle" />
        </p>
        <ul className="rules__notification">
          <li className="rules__notification-item">
            Każde z badań podlega indywidualnej, uczciwej dla obydwu stron
            wycenie, przedstawiamy dokładne kosztorysy
            <img
              src={Rectangle2}
              className="rules__notification-item-img"
              alt="rectangle"
            />
          </li>
          <li className="rules__notification-item">
            Jak wszyscy lubimy kiedy Klienci do nas wracają i rekomendują nasze
            usługi do kolejnych klientów
            <img
              src={Rectangle2}
              className="rules__notification-item-img"
              alt="rectangle"
            />
          </li>
        </ul>
      </Container>
      <ul className="rules__list-message">
        <li className="rules__list-message-item">
          Stosujemy politykę uczciwej ceny
        </li>
        <li className="rules__list-message-item">
          Stawiamy dobro klienta na pierwszym planie
        </li>
        <li className="rules__list-message-item">
          Zachowujemy wysokie standardy jakości i rzetelności wykonywanych przez
          nas usług badawczych
        </li>
        <li className="rules__list-message-item">
          Stosujemy kreatywność w rozwiązywaniu problemów naszych Klientów i
          dostosowywaniu się do ich rzeczywistych potrzeb
        </li>
        <li className="rules__list-message-item">
          Dbamy o efektywną i przejrzystą komunikację z Klientami
        </li>
        <li className="rules__list-message-item">
          W pełni angażujemy się w powierzone nam zadania
        </li>
        <li className="rules__list-message-item">
          Rygorystycznie przestrzegamy zasad poufności badań i ochrony tajemnicy
          handlowej
        </li>
        <li className="rules__list-message-item">
          Dbamy o miłą atmosferę współpracy
        </li>
      </ul>
    </section>
  )
}
export default Rules
