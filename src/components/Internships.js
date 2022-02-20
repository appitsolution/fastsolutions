import React from "react"
import Container from "./Container"
// import books from "../images/books.png"
import DescTitle from "./DescTitle"
const Internships = () => {
  return (
    <section className="internships">
      <Container>
        <ul className="internships__block">
          <li className="internships__block-item">
            {/* <img src={books} className="internships__block-img" /> */}
          </li>
          <li className="internships__block-item">
            <DescTitle>PRAKTYKI I STAŻE</DescTitle>
            <h1 className="internships__block-item-head">
              Oferta praktyk i staży dla studentów kierunków ścisłych,
              ekonomicznych i społecznych
            </h1>
            <p className="internships__block-item-text">
              Zapraszamy do kontaktu osoby pragnące odbyć staż lub praktykę w
              profesjonalnej agencji badawczej. Jesteśmy otwarci na młodych i
              ambitnych studentów i absolwentów kierunków zarówno
              humanistycznych (socjologia, ekonomia, zarządzanie, marketing,
              dziennikarstwo) , jak i ścisłych (np. matematyka).
            </p>
          </li>
        </ul>
        <p className="internships__text">
          Umożliwiamy odbycie zarówno staży współfinansowanych ze środków
          Powiatowych Urzędów Pracy, czy programów prowadzonych w ramach biur
          karier. Pozostałym osobom, które pozytywnie przejdą proces
          rekrutacyjny oferujemy również możliwość odbycia firmowego stażu
          płatnego. Zachęcamy także do odbycia praktyki studenckiej, bądź
          absolwenckiej. Po przeszkoleniu i okresie próbnym otrzymasz szansę
          zostania naszym stałym pracownikiem.
        </p>
        <p className="internships__text">
          Zapraszamy do kontaktu osoby pragnące odbyć staż lub praktykę w
          profesjonalnej agencji badawczej. Jesteśmy otwarci na młodych i
          ambitnych studentów i absolwentów kierunków zarówno humanistycznych
          (socjologia, ekonomia, zarządzanie, marketing, dziennikarstwo) , jak i
          ścisłych (np. matematyka). Umożliwiamy odbycie zarówno staży
          współfinansowanych ze środków Powiatowych Urzędów Pracy, czy programów
          prowadzonych w ramach biur karier. Pozostałym osobom, które pozytywnie
          przejdą proces rekrutacyjny oferujemy również możliwość odbycia
          firmowego stażu płatnego. Zachęcamy także do odbycia praktyki
          studenckiej, bądź absolwenckiej. Po przeszkoleniu i okresie próbnym
          otrzymasz szansę zostania naszym stałym pracownikiem.
        </p>
        <ul className="internships__list">
          <li className="internships__list-item">
            Chcesz pracować w młodym i dynamicznym zespole w przyjaznej
            atmosferze?
          </li>
          <li className="internships__list-item">
            Lubisz wyzwania i chcesz nauczyć się czegoś nowego?
          </li>
          <li className="internships__list-item">
            Chcesz rozwijać swoje umiejętności i kreatywność?
          </li>
          <li className="internships__list-item">
            Chcesz wzbogacić swoje CV o interesujący staż lub kolejne
            doświadczenia?
          </li>
          <li className="internships__list-item">
            Chcesz rozwijać swoje umiejętności i kreatywność?
          </li>
        </ul>
        <ul className="internships__button">
          <li className="internships__button-item">
            Jeśli choć na jedno z powyższych pytań Twoja odpowiedź brzmi: „tak”,
            aplikuj do nas już dziś!
          </li>
          <li className="internships__button-item">
            <p className="internships__button-item-text">
              Serdecznie zachęcamy do przesyłania dokumentów aplikacyjnych na
              adres e-mailowy:
            </p>
            <button className="internships__button-item-button">
              rekrutacja@fastsolutions.pl
            </button>
          </li>
        </ul>
      </Container>
    </section>
  )
}
export default Internships
