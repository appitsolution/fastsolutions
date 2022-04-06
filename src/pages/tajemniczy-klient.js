import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Why from "../components/Why"
import MethodAction from "../components/MethodAction"
import FeedbackMail from "../components/FeedbackMail"
import Footer from "../components/Footer"
import ClientContent from "../components/ClientContent"
// import imgclient from "../images/imgclient.png"
import imgclient from "../images/client_img/header-kontatk-min.jpg"

const textWhy = `Realizujemy zarówno audyty tajemniczy klient obejmujące scenariusze dla klientów będących osobami fizycznymi jak i te wizyty, których scenariusz zakłada udział klienta biznesowego (w trakcie wizyty audytor podaje dane prowadzonej przez siebie prawdziwej działalności gospodarczej z danej branży). 

Typowe obszary zastosowania metody badań tajemniczych klientów:
р
Pomiar jakości obsługi klienta w wybranych placówkach
Badanie rekomendacji produktów i usług
Audyty ekspozycji produktów w placówkach
Okresowy monitoring jakości obsługi w ramach systemu premiowego
Kontrola akcji promocyjnych
Benchmark konkurencji 
Badanie rozpoznawalności i substytucji produktów
Wsparcie trade marketingu`
const misteriousclient = () => {
  return (
    <>
      <Header />
      <Hero
        title={
          "Jak tajemniczy klient wpływa na jakość obsługi i zwiększenie poziomu sprzedaży?"
        }
        widthEl={"557"}
        buttons={["Wypełnij brief", "Skontaktuj się"]}
        img={imgclient}
        widthImg={"100%"}
      />
      <ClientContent
        title={"KIM JEST TAJEMNCZY KLIENT?"}
        text1={
          "Tajemniczy klient jako metoda badań umożliwia efektywną kontrolę stosowania standardów obsługi klienta przez personel danej firmy. Weryfikacji podlega także  stosowanie przez obsługę wiedzy nabywanej podczas rozmaitych szkoleń. Doświadczeni audytorzy wcielają się w rolę Państwa zwykłych klientów.Każdy audytor z naszej ogólnopolskiej siatki tajemniczych klientów działających w terenie wszystkich województw przekazuje nam nagrania audio i szczegółowe dane z wizyt. Następnie materiały te poddawane są wnikliwej analizie przez naszych analityków. Końcowym etapem usługi jest profesjonalny raport z badań zawierający wnioski i rekomendacje wdrożeniowe w zakresie poprawy jakości obsługi."
        }
        notific={
          "Tajemniczy klient to usługa badawcza podczas której analizy prowadzimy zgodnie z obowiązującymi u Państwa standardami obsługi klientów. Wyniki audytów dostarczają ważnych informacji przydatnych zarówno dla osób decyzyjnych, jak również dla poszczególnych działów przedsiębiorstwa, w tym działów sprzedaży, marketingu, rekrutacji, szkoleń i HR-u."
        }
        text2={
          "Dokładny zakres prowadzonego pomiaru, późniejszych analiz oraz formy raportowania ustalane są z Państwem przed rozpoczęciem realizacji audytów tajemniczy klient. Wszystkie przeprowadzone audyty podlegają kontroli formalnej i merytorycznej ze strony specjalistów pracujących w naszej siebie. Jako materiał kontrolny mogą Państwo otrzymać m.in. nagrania audio, zdjęcia placówek oraz dowody zakupu produktu w placówce (np. paragony). Mając świadomość zróżnicowanych potrzeb względem dostarczanych analiz i raportów, każdorazowo dostosowujemy się do specyfiki danego projektu."
        }
      />
      <Why
        nameDesc={"ZAKRES USŁUG"}
        title={"Badania tajemniczego klienta – oferowany zakres usług "}
        text={textWhy}
      />
      <MethodAction
        nameDesc={"KORZYŚCI"}
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
export default misteriousclient
