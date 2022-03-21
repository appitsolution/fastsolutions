import React from "react"
import FeedbackMail from "../components/FeedbackMail"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Offermark from "../components/Offermark"
import Why from "../components/Why"
import MethodAction from "./../components/MethodAction"
import successImg from '../images/success.png'
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
    head:
      "Podpowiadamy, co należy zrobić, aby zatrzymać obecnych klientów, definiujemy grupy klientów zagrożone odejściem, badając kategorię klientów utraconych (np. krytyków marki) oraz wskazujemy prawdziwe powody rezygnacji z usług, czy produktów.",
    text: "Pozwalają na poznanie środowiska danej branży.",
  },
]

const textWhy = `W toku badań stosujemy także alternatywne metody oceny satysfakcji klientów m.in. poprzez standaryzowane wskaźniki satysfakcji takie jak np.:
NPS (ang. Net Promoter Score),
CSI (ang. Customer Satisfaction Index),
TRI:M (czyli wieloaspektowy wskaźnik lojalności)
CLR (ang. Customer Loyality Ratio)
SERVQUAL oraz inne. Dysponujemy własną, profesjonalną pracownią do badań telefonicznych (CATI), umożliwiającą efektywną realizację na poziomie nawet 1000 ankiet telefonicznych w ciągu nawet jednego tygodnia.Przy projektowaniu kwestionariusza ankiety używanego w badaniach stosujemy odpowiednio sprofilowane reguły przejścia oraz pytania kontrolne, które dzięki późniejszej pogłębionej analizie danych, umożliwią oddzielenie odpowiedzi mających charakter wyłącznie deklaratywny oraz tych, które są udzielane przez klientów w sposób przemyślany i znajdujący odzwierciedlenie w ich rzeczywistych postawach. Z kolei zastosowanie kafeterii odpowiedzi mających układ symetrycznych skal wielostopniowych zapewni możliwość określenia natężenia i wagi badanych zjawisk. `
const satisfaction = () => {
  return (
    <>
      <Header />
      <Hero
        title={"Czym dokładnie są badania satysfakcji klientów?"}
        buttons={["Wypełnij brief", "Skontaktuj się"]}
        img={successImg}
        widthImg={"30%"}
        widthEl={400}
      />
      <Offermark
        nameDesc={"ZALETY"}
        title={
          "Prowadzimy badania satysfakcji klientów prowadzimy przy użyciu następujących metod."
        }
        text={
          "Badania satysfakcji klientów pozwalają określić jaki jest poziom zadowolenia klientów i konsumentów, sprawdzamy jakie są powody nielojalności klientów lub punkty graniczne ich lojalności. Rzetelnie przeprowadzony proces badania satysfakcji klientów pozwoli zdiagnozować przyczyny pomniejszania się wolumenu klientów, ich odpływu do konkurencji oraz wskazać obszary wymagające najpilniejszych usprawnień w zakresie procesu obsługi klientów biznesowych lub indywidualnych."
        }
        array={arrayCards}
        pointTeg={true}
      />
      <Why
        nameDesc={"METODOLOGIA"}
        title={"Jakie metody oceny satysfakcji klientów stosujemy?"}
        text={textWhy}
      />
      <MethodAction
        nameDesc={"JAK CZĘSTO?"}
        title={"Częstotliwość badania satysfakcji klientów"}
        text1={
          "W zależności od Państwa realnych potrzeb informacyjnych badanie satysfakcji klientów mogłoby zostać wykonane jednorazowo lub przyjąć formułę badań cyklicznych (np. kwartalne lub coroczne), które umożliwią Państwu stałą analizę satysfakcji Państwa klientów w danym ujęciu czasowym.W każdym przypadku rekomendujemy jednak dobieranie klientów do udziału w badaniach w taki sposób, aby możliwe było zachowanie możliwe maksymalnej reprezentatywności wyników przeprowadzonych ankiet. Innymi słowy wskazane byłoby zachowanie odpowiedniej proporcji ankietowanych klientów do ogólnej liczny klientów o podobnych parametrach (ten sam wyodrębniony segment klientów lub kategoria analityczna)."
        }
        text2={
          "Na życzenie zamawiających badania zadowolenia klientów często uzupełniamy również badaniami jakości obsługi klienta przy zastosowaniu metod wizyt tajemniczych klientów (tzw. mystery shopper). Umożliwia to dokonanie równoległej kontroli stosowania standardów obsługi wykonywanej przez pracowników badanego przedsiębiorstwa oraz weryfikację sposobów stosowania wiedzy i umiejętności, które zasoby kadrowe nabywają podczas szkoleń poświęconych procesom sprzedaży i obsługi klienta.Produktem finalnym zrealizowanego badania satysfakcji klientów jest kompleksowy raport analityczny przedstawiający wyniki analizy statystycznej zgromadzonych danych. Wyniki badania prezentowane są w formie opisowej i w postaci informacji tabelaryczno-graficznej. Na podstawie wyników badania opracowujemy wnioski i formułujemy stosowne rekomendacje wdrożeniowe.Dowiedz się więcej o usłudze badawczej mierzącej zadowolenie klientów zapoznając się z naszym artykułem poświęconym procedurze i zaletom prowadzenia artykułem na naszym blogu."
        }
      />
      <FeedbackMail />
      <Footer />
    </>
  )
}
export default satisfaction
