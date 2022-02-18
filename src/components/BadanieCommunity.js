import React from "react"
import Container from "./Container"
import DescTitle from "./DescTitle"
import Notification from "./Notification"
const BadanieCommunity = () => {
  return (
    <section className="badaniecommunity">
      <Container>
        <DescTitle>KORZYŚCI</DescTitle>
        <h1 className="badaniecommunity__head">
          Badanie opinii pracowników można przeprowadzić przy wykorzystaniu
          następujących metod i technik badawczych
        </h1>
        <p className="badaniecommunity__text">
          Najczęściej stosowana do badania satysfakcji i opinii pracowników jest
          ankieta ankiety audytoryjne – prowadzoną w dużych grupach osób w
          odpowiednio przygotowanych pomieszczeniach, np. w sali konferencyjnej,
          stołówce lub innym miejscu do tego przystosowanym w Państwa firmie,
          ankietyzacja prowadzona z wykorzystaniem urn – opieczętowane urny
          służą do wrzucania ankiet uzupełnianych przez badanych pracowników,
          ankiety internetowe – pracownik klika w link ankiety umieszczonej na
          naszym panelu badawczym CAWI (zapewniamy pełną anonimowość!) ankiety
          wysyłane na e-mail każdego pracownika – po jej wypełnieniu pracownik
          odsyła nam ankietę, indywidualne wywiady kwestionariuszowe (tzw.
          technika PAPI) – przeprowadza się je z każdym pracownikiem przy jego
          stanowisku pracy, bądź w przygotowanym do tego pomieszczeniu.
        </p>
        <Notification position={"left-top"}>
          Podczas prowadzenia badania satysfakcji pracowników dokładamy
          wszelkich starań, aby uniknąć zakłócania rytmu pracy Państwa
          pracowników. Wszelkie metody i techniki badań dobieramy pod kątem
          najwyższej skuteczności, przy jednocześnie jak najmniejszej
          inwazyjności w codzienne funkcjonowanie Państwa firmy.
        </Notification>
        <p className="badaniecommunity__text">
          Dokładny zakres prowadzonego pomiaru, późniejszych analiz oraz formy
          raportowania ustalane są z Państwem przed rozpoczęciem realizacji.
          Wszystkie przeprowadzone ankiety podlegają kontroli formalnej i
          merytorycznej ze strony specjalistów pracujących w naszej siedzibie.
          Jako materiał kontrolny podsumowujący badania ankietowe pracowników,
          mogą Państwo otrzymać m.in. kwestionariusze ankiet
          (zanonimizowane),surowe bazy danych, zdjęcia, pieczątki z badanych
          placówek. Mając świadomość zróżnicowanych potrzeb badawczych
          każdorazowo dostosowujemy się do specyfiki danego projektu. Ankieta
          satysfakcji pracownika przygotowana przez naszych specjalistów zawiera
          odpowiednio sprofilowane reguły przejścia oraz pytania kontrolne.
          Dzięki pogłębionej analizie danych określamy na ile udzielane przez
          pracowników odpowiedzi znajdują odzwierciedlenie w ich rzeczywistych,
          codziennych postawach.
        </p>
        <h2 className="badaniecommunity__head">
          Diagnoza pracownicza – jako uzupełnienie usługi badanie satysfakcji
          pracowników
        </h2>
        <p className="badaniecommunity__text-second">
          Uzupełnieniem oferty badanie satysfakcji pracowników jest również tzn.
          badanie Extended Disc. Jest to forma diagnozy pracowniczej pokazującej
          profil naturalny oraz profil zawodowy. Każdy z uczestników badania
          otrzymuje rozbudowany raport osobisty wraz z godzinną sesją
          coachingową. Dodatkowo osoby zarządzające danym działem pracowników
          (np. działem handlowym, działem produkcji) otrzymują raport grupowy
          także z godzinną sesją coachingową. Zapraszamy do kontaktu –
          podpowiemy najbardziej optymalne rozwiązania w zakresie badania
          satysfakcji pracowników! Zachęcamy do kontaktu w sprawie szczegółów
          metodologicznych oraz zakresu świadczonej usługi badanie satysfakcji
          pracowników. Informujemy, że w trosce o najwyższą jakość badań
          pracowniczych współpracujemy merytorycznie z pracownikami naukowymi
          oraz doświadczonymi ekspertami z zakresu psychologii biznesu,
          zarządzania zasobami ludzkimi oraz rekrutacji pracowniczych.
          Wieloletnie doświadczenie i szerokie kompetencje Agencji Badawczej
          Fast Solutions potwierdzają nasi zadowoleni klienci. *(czytaj więcej
          w: Agnieszka Springer, Wybrane czynniki kształtujące satysfakcję
          pracownika, Problemy Zarządzania, vol. 9, nr 4 (34): 162–180 ISSN
          1644-9584, Wydział Zarządzania UW) Więcej informacji odnośnie tego
          dlaczego badania satysfakcji pracowników stanowią cenne źródło
          informacji menedżerskich mogą Państwo znaleźć w niniejszym artykule{" "}
        </p>
      </Container>
    </section>
  )
}
export default BadanieCommunity
