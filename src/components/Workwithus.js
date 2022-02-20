import React from "react"
import ArrayNotification from "./ArrayNotification"
import Container from "./Container"
import DescTitle from "./DescTitle"
const arrayCards = [
  {
    head: "Kierownik Działu Badań ",
  },
  {
    head: "Specjalista ds. badań i analiz",
  },
  {
    head: "Statystyk",
    active: true,
  },
]
const Workwithus = () => {
  return (
    <section className="workwithus">
      <Container>
        <DescTitle>PRACUJ Z NAMI</DescTitle>
        <h1 className="workwithus__head">
          Zostań stałym pracownikiem naszej agencji!
        </h1>
        <p className="workwithus__text">
          Stale rozszerzając możliwości realizacyjne poszukujemy kandydatów do
          stałej pracy w naszej siedzibie:
        </p>
        <ArrayNotification array={arrayCards} />
        <p className="workwithus__text">
          <strong>Klauzula informacyjna</strong>
          <br />
          <br />
          Wysyłając zgłoszenie rekrutacyjne do Grupa WW sp. z o.o. z siedzibą w
          Rzeszowie, Plac Jana Kilińskiego 2, 35-005 Rzeszów (Pracodawca,
          administrator danych), zgadzasz się na przetwarzanie przez Pracodawcę
          Twoich danych osobowych zawartych w zgłoszeniu rekrutacyjnym w celu
          prowadzenia rekrutacji na stanowisko wskazane w ogłoszeniu. Jeżeli
          chcesz, abyśmy zachowali Twoje CV w naszej bazie, umieść dodatkowo w
          CV następującą zgodę: „Zgadzam się na przetwarzanie przez firmę Grupa
          WW sp. z o.o. z siedzibą w Rzeszowie, danych osobowych zawartych w
          moim zgłoszeniu rekrutacyjnym dla celów przyszłych rekrutacji”. W
          każdym czasie możesz cofnąć zgodę, kontaktując się z nami pod adresem
          rekrutacja@grupaww.pl
          <br />
          <br />
          Dodatkowe informacje dotyczące przetwarzania danych osobowych można
          znaleźć tutaj.
        </p>
      </Container>
    </section>
  )
}
export default Workwithus
