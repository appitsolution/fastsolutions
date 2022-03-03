import React from "react"
import Container from "./Container"
import DescTitle from "./DescTitle"
import Slider2 from "./Slider2"
const arrayWord = [
  "Polskie Górnictwo Naftowe i Gazownictwo S.A.",
  "LIDL Sklepy Spożywcze sp. z o.o.",
  "Centrala Farmaceutyczna CEFARM S.A.",
  "Polska Spółka Gazownictwa sp. z o.o.",
  "Open Life Towarzystwo Ubezpieczeń Życie S.A.",
  "Fundacja Obserwatorium Zarządzania",
  "Szkoła Główna Handlowa w Warszawie",
  "Uniwersytet Ekonomiczny w Katowicach",
  "Politechnika Warszawska",
  "Podkarpacki Urząd Wojewódzki",
  "Uniwersytet Ekonomiczny w Krakowie",
  "Multimedia Polska S.A.",
  "Provident Polska S.A.",
  "Uniwersytet Rzeszowski",
  "SANBank Nadsański Bank Spółdzielczy",
  "Podkarpacki Bank Spółdzielczy",
  "SKOK Wybrzeże",
  "SKOK Piast",
  "Multitap sp. z o.o.",
  "Powiatowy Urząd Pracy w Rzeszowie",
  "Urząd Miasta Rzeszowa",
  "Bezpieczeństwo IT sp. z o.o.",
  "Ines Sp. z o.o.",
  "Grupa OSB s.c.",
  "JBcomm sp. z o. o.",
  "Creative Tower",
  "Wydawnictwo Inżynieria sp. z o.o.",
  "PERS Pralnie ekologiczne",
  "Optyka Arpima-Hilarex Sp.J.",
  "Podkarpacka Kancelaria Rachunkowa sp. z o.o.",
  "TLConsulting",
  "Solo",
  "Stowarzyszenie Na Rzecz Rozwoju I Promocji Podkarpacia ”Pro Carpathia”",
  "Mestengo sp. z o.o.",
  "PMR Ltd. sp. z o.o.",
  "Komandor S.A.",
  "Followup sp. z o.o.",
  "IVS Grupa Sp. z o.o.",
  "360 Circus Sp. z o.o. S.K.A",
  "Play4Mix sp. z o.o.",
  "Proferis s.c.",
  "QWAY Group",
  "DANAE sp. z o.o.",
  "GrupaBST sp. z o.o.",
  "Politechnika Łódzka",
  "ADVERTIVA sp. j.",
  "Wyższa Szkoła Informatyki i Zarządzania w Rzeszowie",
  "Uniwersytet Pedagogiczny w Krakowie",
  "KANTAR Polska S.A.",
  "Niezapominajka sp. z o.o.",
  "Quant sp. z o.o.",
  "Dräger Polska Sp. z o.o.",
  "Traffic Trends Sp. z o.o.",
  "Urząd Marszałkowski Województwa Podkarpackiego",
]
const ClientReport = () => {
  return (
    <>
      <section className="clientreport">
        <Container>
          <DescTitle>REFERENCJE</DescTitle>
          <h1 className="clientreport__head">Marki, które nam zaufały</h1>
        </Container>
        <Slider2 />
      </section>
      <section className="clientreportlist">
        <ul className="clientreportlist__list">
          {arrayWord.map(num => (
            <li className="clientreportlist__list-item">{num}</li>
          ))}
        </ul>
      </section>
    </>
  )
}
export default ClientReport
