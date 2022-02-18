import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import WorkProcess from "../components/WorkProcess"
import Why from "../components/Why"
import TrustContent from "../components/TrustContent"
import FeedbackMail from "../components/FeedbackMail"
import Footer from "../components/Footer"
const textWhy = `Jesteśmy podmiotem, który sprawnie i fachowo wykona ankietyzację oraz wywiady indywidualne i grupowe. Ponadto zapewnimy wsparcie na pozostałych etapach projektów, tj. przy projektowaniu badań i prowadzeniu działań związanych z zarządzaniem oraz administracją danym badaniem.

Dysponujemy stała siatką własnych, doświadczonych ankieterów, dzięki czemu jesteśmy w stanie realizować badania na terenie całego województwa podkarpackiego. Wraz z coraz większym zainteresowaniem naszymi usługami liczba przeszkolonych przez nas ankieterów stale się zwiększa. Służymy pomocą w przeprowadzaniu zarówno badań ilościowych, jak i jakościowych. Posiadamy własne pomieszczenie, profesjonalne studio fokusowe, dostosowane do potrzeb badań przy użyciu grup fokusowych.`
const fieldwork = () => {
  return (
    <>
      <Header />
      <Hero
        title={
          "Koordynacja i realizacja badań terenowych to tzw. fieldwork – działamy również w tym zakresie!"
        }
        widthEl={"557"}
        buttons={["Wypełnij brief", "Skontaktuj się"]}
      />
      <WorkProcess />
      <Why
        nameDesc={"REALIZACJA"}
        title={
          "Marketingowe, rynkowe i społeczne – koordynujemy i realizujemy wszystkie te typy badań"
        }
        text={textWhy}
      />
      <TrustContent />
      <FeedbackMail />
      <Footer />
    </>
  )
}
export default fieldwork
