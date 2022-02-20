import React from "react"
import Container from "./Container"
import DescTitle from "./DescTitle"
import Offermark from "./Offermark"
const arrayCards = [
  {
    number: "01",
    head: "Diagnoza Satysfakcji",
  },
  {
    number: "02",
    head: "Analiza SWOT",
  },
  {
    number: "03",
    head: "Analiza CATI",
  },
  {
    number: "04",
    head: "Diagnoza Potencjału",
  },
  {
    number: "05",
    head: "Badanie typu Tajemniczy Klient",
  },
  {
    number: "06",
    head: "Metoda Obserwacji Uczestniczącej",
  },
  {
    number: "07",
    head: "Wywiady Osobiste PAPI",
  },
  {
    number: "08",
    head: "Weryfikacja Standardów",
  },
  {
    number: "09",
    head: "Pomiar Natężeń Ruchu",
  },
  {
    number: "10",
    head: "Ocena Jakości Obsługi",
  },
]
const CaseStudies = () => {
  return (
    <section className="casestudies">
      <Container>
        <DescTitle>CASE STUDIES</DescTitle>
        <h1 className="casestudies__head">Case Studies - Studia przypadku</h1>
        <p className="casestudies__text">
          Przykłady niektórych naszych dotychczasowych realizacji. Jesteśmy
          przekonani, że niniejsze studia przypadku pomogą Państwu w
          dokładniejszym zrozumieniu własnych potrzeb w zakresie badań i
          marketingu.
        </p>
        <Offermark array={arrayCards} />
      </Container>
    </section>
  )
}
export default CaseStudies
