import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Offermark from "../components/Offermark"
import Why from "../components/Why"
import MethodAction from "../components/MethodAction"
import FeedbackMail from "./../components/FeedbackMail"
import Footer from "./../components/Footer"
import megafonImg from "../images/megafon.png"
import "../sass/main.scss"
const arrayCards = [
  {
    number: "01",
    head: "Badania rynku",
    text: "Pozwalają na poznanie środowiska danej branży.",
  },
  {
    number: "01",
    head: "Badania rynku",
    text: "Pozwalają na poznanie środowiska danej branży.",
  },
  {
    number: "01",
    head: "Badania rynku",
    text: "Pozwalają na poznanie środowiska danej branży.",
  },
  {
    number: "01",
    head: "Badania rynku",
    text: "Pozwalają na poznanie środowiska danej branży.",
    blue: "active",
  },
  {
    number: "01",
    head: "Badania rynku",
    text: "Pozwalają na poznanie środowiska danej branży.",
  },
  {
    number: "01",
    head: "Badania rynku",
    text: "Pozwalają na poznanie środowiska danej branży.",
  },
]
const textWhy =
  "Do badań stosujemy niemal pełen zakres dostępnych ilościowych i jakościowych metod badawczych. Wykorzystujemy w tym celu wywiady: papierowe (PAPI), elektroniczne (CAWI) i telefoniczne (CATI), indywidualne wywiady pogłębione (IDI) i wywiady audytoryjne (FGI). Posiadamy własne, nowoczesne call center z profesjonalnie przeszkolonymi pracownikami, którzy wraz z szeroką, ogólnopolską siatką ankieterów i audytorów umożliwiają nam prowadzenie badań na terenie całej Polski. Łączymy teorię z praktyką aktywnie współpracując z ekspertami ze środowisk akademickich, mającymi doświadczenie przy realizacji projektów badawczych na skalę krajową i europejską. Stawiamy na wyraźny program kontroli jakości pracy ankieterów. Zatrudniamy ludzi, którzy rozumieją i potrafią stosować się do naszych wysokich standardów i określonych procedur, co ułatwia poruszanie się w wytyczonych wcześniej ramach etyki biznesu i jakości pracy."
const testmark = () => {
  return (
    <>
      <Header />
      <Hero
        title={
          "Badania marketingowe to najlepszy sposób na uzyskanie przez firmę kluczowych dla niej informacji o rynku i klientach."
        }
        widthEl="557"
        buttons={["Wypełnij brief", "Skontaktuj się"]}
        img={megafonImg}
      />

      <Offermark
        nameDesc={"OFERTA"}
        text={
          "Podjęcie racjonalnej oraz korzystnej decyzji marketingowej, opracowanie planów zwiększających prawdopodobieństwo sukcesu Państwa firmy, wymaga posiadania rzetelnej wiedzy o czynnikach motywujących klientów potencjalnychi istniejących."
        }
        array={arrayCards}
      />

      <Why
        nameDesc={"DLACZEGO"}
        title={"Dlaczego warto wybrać badania marketingowe właśnie u nas?"}
        text={textWhy}
      />
      <MethodAction
        nameDesc={"SPOSÓB DZIAŁANIA"}
        title={"Jak prowadzimy badania marketingowe?"}
        text1={
          "Korzystamy zarówno z badań ilościowych, jak i jakościowych, aby oprócz określenia i rozmiarów poszczególnych zjawisk rynkowych, poddać analizie również opinie oraz sugestie klientów i konsumentów na temat produktu lub usługi, a ponadto uzyskać wiedzę na temat motywów ich zachowań rynkowych. Zgromadzone w ten sposób dane, poddawane są wnikliwej analizie, mającej na celu sformułowanie czytelnych oraz klarownych wniosków i rekomendacji, zebranych w formie przystępnych raportów.Szczegółowych informacji w zakresie metod i technik badań marketingowych najodpowiedniejszych dla danych problemów badawczych udzielają nasi konsultanci. Zapraszamy także na nasz blog badawczy, na którym znajdą Państwo dodatkowe informacje odnośnie definicji, zakresu i funkcji badań marketingowych."
        }
        text2={
          "Posiadamy własną ogólnopolską siatkę ankieterów oraz audytorów, umożliwiającą realizację badań marketingowych  technikami PAPI, CAPI oraz tajemniczy klient w dowolnym miejscu w Polsce. Dysponujemy także własnym studiem do badań techniką CATI, a także panelami do realizacji badań techniką CAWI.Nasi koordynatorzy i ankieterzy realizują badania marketingowe w takich miastach jak; Rzeszów, Kraków, Tarnów, Dębica, Krosno, Przemyśl, Stalowa Wola, Tarnobrzeg, Kielce, Zamość, Lublin, Katowice, Częstochowa, Radom, Warszawa, Wrocław, Łódź, Poznań, Bydgoszcz, Warszawa, Białystok, Szczecin, Olsztyn, Gdańsk, Gdynia i wielu innych miastach we wszystkich województwach w kraju."
        }
      />
      <FeedbackMail />

      <Footer />
    </>
  )
}
export default testmark
