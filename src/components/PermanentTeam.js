import React from "react"
import DescTitle from "./DescTitle"
import Container from "./Container"
import ArrayNotification from "./ArrayNotification"
import Parallax from "./Parallax"
const arrayCards = [
  {
    head: "Audytor Tajemniczy Klient",
    text: "mystery shopper, mystery client",
    active: false,
  },
  {
    head: "Ankieter terenowy",
    active: true,
  },
  {
    head: "Ankieter Telefoniczny",
  },
]
const PermanentTeam = () => {
  return (
    <section className="permanentteam">
      <Container>
        <Parallax position="left">
          <DescTitle>STAŁY ZESPÓŁ</DescTitle>
          <h1 className="permanentteam__head">
            ABM Fast Solutions jest agencją badawczo-marketingową,
            specjalizującą się w realizacji badań rynkowych, marketingowych i
            społecznych, a także szeroko rozumianej analizie danych zastanych.
          </h1>
          <p className="permanentteam__text">
            Istniejemy od 2011 roku, natomiast od 2013 roku działamy już na
            terenie całego kraju. W związku z nieustannym rozwojem siatki
            ankieterów i audytorów, a także stałych współpracowników, serdecznie
            zapraszamy do zapoznania się z aktualnymi propozycjami współpracy.
            Dopełniając obowiązku informacyjnego zgodnie Rozporządzeniem o
            ochronie danych osobowych (RODO) przed przesłaniem nam jakichkolwiek
            danych osobowych prosimy zapoznać się z polityką przetwarzania
            danych osobowych w naszej firmie dostępną tutaj.
          </p>
        </Parallax>
        <Parallax position="right">
          <ArrayNotification array={arrayCards} />
        </Parallax>
      </Container>
    </section>
  )
}
export default PermanentTeam
