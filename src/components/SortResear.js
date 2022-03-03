import React from "react"
import Container from "./Container"
import buttonHidden from "../images/icon/block-hidden.svg"
const objectEL = [
  {
    word: "A",
    listRequest: [
      {
        title: "Ankieter",
        description: `Osoba, która odpowiada za realizację wywiadów osobistych z
                  uczestnikami danego badania (respodentami). Do jego obowiązków
                  należy dotarcie do respondenta i zyskanie jego zgody na
                  wywiad, a następnie wykonanie wywiadu według otrzymanych
                  instrukcji. Praca ankietera jest kontrolowana przez agencje
                  badawcze, gdyż zebrane przez niego wyniki są kluczowe dla
                  realizacji badania.`,
      },
      {
        title: "Audyt",
        description: `Jest to ocena sporządzona przez autonomiczną i uprawnioną grupę osób, czy dany przedmiot audytu spełnia wymagania i jest zgodny ze standardami. Zespół audytujący może składać się z jednej bądź kilku osób. Natomiast przedmiotem audytu może być osoba, produkt, firma, system, proces.`,
      },
      {
        title: "Audytor",
        description: `Osoba realizująca bezpośrednio w terenie badanie typu „Mystery Shopping”. `,
      },
      {
        title: "Ankieter",
        description: `Osoba, która odpowiada za realizację wywiadów osobistych z uczestnikami danego badania (respodentami). Do jego obowiązków należy dotarcie do respondenta i zyskanie jego zgody na wywiad, a następnie wykonanie wywiadu według otrzymanych instrukcji. Praca ankietera jest kontrolowana przez agencje badawcze, gdyż zebrane przez niego wyniki są kluczowe dla realizacji badania.`,
      },
    ],
  },
  {
    word: "B",
    listRequest: [
      {
        title: "Badania Ad-hoc",
        description: `Badania, które są sprecyzowane na dany problem, kwestię, której charakter jest doraźny i nieschematyczny. Badania te są realizowane na zlecenie pojedyńczego klienta i ściśle dostosowane do jego swoistych potrzeb i oczekiwań. Inaczej badania te nazywane są potocznie “szytymi na miarę” (ang. custom designed).`,
      },
      {
        title: "Badania B2B",
        description: `Rodzaj badań marketingowych koncentrujących się na respondentach, którymi są przedsiębiorstwa. Dokładniej rzecz ujmując na osobach odpowiedzialnych za kupno i eksploatację produktów lub usług, czyli tzw. osoby decyzyjne, finalni użytkownicy.  `,
      },
      {
        title: "Badania B2C",
        description: `W tym rodzaju badań marketingowych respondentami są konsumenci i użytkownicy będącymi osobami fizycznymi.  `,
      },
      {
        title: "Badania ewaluacyjne",
        description: `Celem tych badań jest ocena skuteczności i efektywności projektów, programów, a także inicjatyw społecznych, które realizowane są przez instytucje rządowe, instytucje publiczne, firmy,  jak i samorządy terytorialne. Badania te nierzadko wykonywane są zarówno w trakcie, jak również po zakończeniu projektu finansowanego z dotacji państwowych, czy ze środków Unii Europejskiej.`,
      },
      {
        title: "Badania ilościowe",
        description: `(ang. quantitative research) Główną cechą badań ilościowych jest możliwość generalizacji na całą badaną populację. W potocznym rozumieniu badania udzielają odpowiedzi na pytania: kto? co? ile? Wykorzystuje się je zwłaszcza w sytuacjach, kiedy priorytetowym celem jest uzyskanie informacji dotyczącej wielkości i częstotliwości badanego zjawiska.`,
      },
      {
        title: "Badania ilościowe",
        description: `(ang. qualitative research) Badania, których priorytetowym celem jest dokładna analiza trendu, zjawiska, zdarzeń, zachowań preferencji, postaw respondentów. Pozwalają one uzyskać odpowiedzi na pytania: dlaczego? jak? Nie muszą one spełniać wymogu reprezentatywności, dlatego też realizowane mogą być na kilkunastoosobowych próbach badawczych. `,
      },
      {
        title: "Badania marketingowe",
        description: `(ang. marketing research) Badania pomagające podjęcie racjonalnych działań przez firmy, przedsiębiorstwa oraz inne podmioty komerycjne. Tematyka badań marketingowych dotyczy m.in. produktu, kanałów dystrybucji, strategii reklamowych i promocyjnych, ceny akceptowalnej przez konsumentów, rynku i działań konkurencji, wizerunku marki, czy opinii klientów.`,
      },
      {
        title: "Badania Satysfakcji Klienta",
        description: `(ang. customer satisfaction studies)
Badania, których celem jest określenie stopnia zadowolenia klienta z użytkowanych produktów lub usług.`,
      },
    ],
  },
  {
    word: "C",
    listRequest: [
      {
        title: "CAPI",
        description: `(ang. Computer Assisted Personal Interviewing) Wywiad indywidualny, przy którego realizacji wykorzystywany jest komputer. Odpowiedzi, które zostają udzielane przez respondenta, jak również prezentacja kwestionariusza odbywa się przy udziale danego programu komputerowego. Ów program automatycznie koduje dane oraz sprawdza poprawność odpowiedzi. `,
      },
      {
        title: "Case Study",
        description: `Studium przypadku, którego celem jest pogłębiona analiza oraz wyjaśnienie problematyki i zakresu przeprowadzonych badań lub zrealizowanych projektów. W case study przedstawiane są m.in. zastosowania rozmaitych metod badawczych: wywiadów FGI, IDI, czy desk research itp., w odniesieniu do problemów badawczych, które występowały w danym przedsięwzięciu badawczym. `,
      },
      {
        title: "CASI",
        description: `(ang. Computer Assisted Self Interviewing) Jest to komputerowa ankieta, którą samodzielnie wypełnia respondent. Ta technika badań ilościowych jest podobna do systemu CAPI. Badany, który posiada komputer ze specjalistycznym oprogramowaniem indywidualnie przegląda kolejne pytania z kwestionariusza i osobiście wprowadza swoje odpowiedzi do komputera.`,
      },
      {
        title: "CATI",
        description: `(ang. Computer Assisted Telephone Interviewing) Wywiad telefoniczny ze wspomaganiem komputerowym.Jest to technika wykorzystywana w badaniach ilościowych, w której odpowiedzi respondneta pozyskuje się za pośrednictwem telefonu oraz przy jednoczesny wykorzystaniu profesjonalnego oprogramowania komputerowego.  `,
      },
      {
        title: "CAWI",
        description: `(ang. Computer Assisted Web Interviewing) Ankieta internetowa kontrolowana przez specjalistyczny system komputerowy. Technika badań ilościowych, w której pytania pobierane są ze strony internetowej zleceniodawcy badania oraz przesyłane dzięki pośrednictwu sieci do obojętnie którego punktu, gdzie znajduje się badany wraz z komputerem podłączonym do Internetu. `,
      },
    ],
  },
  {
    word: "D",
    listRequest: [
      {
        title: "Data mining",
        description: `Jest to proces analizy oraz przeszukiwanie danych w celu wykrycia prawidłowości i korelacji między poszczególnymi zmiennymi.`,
      },
      {
        title: "Desk Research",
        description: `W tym badaniu wykorzystuje się dane wtórne, czyli już istniejące, a wcześniej skumulowane oraz przetworzone np. przez instytucje publiczne (urzędy państwowe, GUS), firmy prowadzące banki danych, agencje badawcze..`,
      },
    ],
  },
  {
    word: "F",
    listRequest: [
      {
        title: "FGI",
        description: `(Focus Group Interview) Inaczej zogniskowany Wywiad Grupowy, Jest to jedna z najbardziej rozpowszechnionych technik wywiadu jakościowego tuż obok IDI. Powszechne określenie FGI to także grupa fokusowa, fokus, wywiad fokusowy, wywiad grupowy. Ten rodzaj wywiadu przeprowadzany jest w odpowiednio do tego przygotowanym studiu badawczym (fokusowni).`,
      },
    ],
  },
  {
    word: "I",
    listRequest: [
      {
        title: "Identyfikacja wizualna",
        description: `(z ang. corporate identity) Ogół symboli oraz zachowań wykorzystywanych w danej firmie, których celem jest uzyskanie zgodnej i zrozumiałej identyfikacji rynkowej. Podstawę identyfikacji przedsiębiorstwa stanowi logo. Identyfikacja wizualna jest zasadniczym narzędziem służącym do kreowania wizerunku marki firmy na rynku.`,
      },
      {
        title: "IDI",
        description: `(Individual In-Depth Interview) Indywidualny Wywiad Pogłębiony; wywiad jakościowy prowadzony przez moderatora z jedną osobą. `,
      },
    ],
  },
  {
    word: "K",
    listRequest: [
      {
        title: "Kwestionariusz ankiety",
        description: `Formularz, który zawiera wystandaryzowane pytania oraz inne narzędzia, które służą do zbierania informacji, które zostaną przeanalizowane.`,
      },
    ],
  },
  {
    word: "T",
    listRequest: [
      {
        title: "Tajemniczy klient",
        description: `(inaczej Mystery Shopping) to rodzaj badania, w którym audytor (Mystery Shopper) gra rolę zwykłego klienta, który w trakcie dokonywania zakupu prowadzi obserwację, a później notuje ją na specjalnym kwestionariuszu.. Audytor nie może się ujawnić, dlatego też osoba przez niego obserwowana nie zdaje sobie sprawy, czy jego praca w tym momencie jest monitorowana, czy nie.`,
      },
    ],
  },
]
const SortResear = () => {
  const openDescription = evn => {
    evn.currentTarget.parentNode.children[1].classList.toggle("active")
    evn.currentTarget.children[0].classList.toggle("active")
  }
  return (
    <section className="sortresear">
      <Container>
        <ul className="sortresear__list">
          {objectEL.map(num => (
            <li className="sortresear__list-item">
              <h2 className="sortresear__list-item-head">{num.word}</h2>
              <ul className="sortresear__list-item-filter">
                {num.listRequest.map(num => (
                  <li className="sortresear__list-item-filter-item">
                    <button
                      className="sortresear__list-item-filter-item-button"
                      onClick={openDescription}
                    >
                      {num.title}
                      <img
                        src={buttonHidden}
                        className="sortresear__list-item-filter-item-button-img"
                      />
                    </button>
                    <p className="sortresear__list-item-filter-item-description">
                      {num.description}
                    </p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
export default SortResear
