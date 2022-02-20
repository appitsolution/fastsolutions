import React from "react"
import DescTitle from "./DescTitle"
import Container from "./Container"
import avatar from "../images/avatar.png"
import notebook from "../images/notebook.jpg"
import facebook from "../images/icon/facebook.svg"
import twiter from "../images/icon/twiter.svg"
import linkedin from "../images/icon/linkedin.svg"
import imgText from "../images/imgtext.jpg"
import Blog from "./Blog"
const EntryContent = () => {
  return (
    <section className="entrycontent">
      <Container>
        <DescTitle>BLOG</DescTitle>
        <ul className="entrycontent__block">
          <li className="entrycontent__block-item">
            <img src={notebook} className="entrycontent__block-item-img" />
          </li>
          <li className="entrycontent__block-item">
            <div className="blogcomponent__info-list-item-avatar">
              <img
                src={avatar}
                className="blogcomponent__info-list-item-avatar-img"
              />
              <div className="blogcomponent__info-list-item-avatar-block">
                <h2 className="blogcomponent__info-list-item-avatar-block-head">
                  Krzysztof Krudysz
                </h2>
                <p className="blogcomponent__info-list-item-avatar-block-text">
                  Market Research & Fieldwork
                </p>
              </div>
            </div>
            <p className="entrycontent__block-item-text-date">
              Data publikacji
            </p>
            <p className="entrycontent__block-item-text">31 Styczeń 22</p>
            <p className="entrycontent__block-item-text-date">Czas czytania</p>
            <p className="entrycontent__block-item-text">
              <strong>8 min</strong>
            </p>
            <h2 className="entrycontent__block-item-second">
              Podziel się wiedzą
            </h2>
            <ul className="footer__information-links-list">
              <li className="footer__information-links-list-item">
                <img
                  src={facebook}
                  className="footer__information-links-list-item-img"
                />
              </li>
              <li className="footer__information-links-list-item">
                <img
                  src={twiter}
                  className="footer__information-links-list-item-img"
                />
              </li>
              <li className="footer__information-links-list-item">
                <img
                  src={linkedin}
                  className="footer__information-links-list-item-img"
                />
              </li>
            </ul>
            <h2 className="entrycontent__block-item-second">
              Podobne artykuły
            </h2>
            <h2 className="entrycontent__block-item-bold">
              Opracowanie statystyczne wyników badań „od kuchni”
            </h2>
            <p className="blogcomponent__info-list-item-date">
              <span className="blogcomponent__info-list-item-date-day">
                31 Sty 22
              </span>
              <span className="blogcomponent__info-list-item-date-time">
                8 min
              </span>
            </p>
          </li>
        </ul>
        <div className="entrycontent__content">
          <h1 className="entrycontent__content-head">
            Opracowanie statystyczne wyników badań „od kuchni”
          </h1>
          <h2 className="entrycontent__content-second">
            Dlaczego opracowanie statystyczne wyników badań do prac naukowych
            warto zlecić profesjonalistom?
          </h2>
          <p className="entrycontent__content-text">
            Opracowanie statystyczne wyników badań coraz częściej jest
            powierzane statystykom nie tylko przez studentów, ale także
            pracowników naukowych, instytuty naukowe i inne podmioty. Wynika to
            najczęściej z faktu, że w czasach tak szybkiego postępu
            technologicznego oraz przyrostu zasobów wiedzy merytorycznej,
            zlecenie analizy do profesjonalnego podmiotu wydaje się bardziej
            racjonalnym posunięciem. Firmom zajmującym się świadczeniem tego
            typu usług zlecane jest już nie tylko analiza statystyczna do pracy
            doktorskiej, bądź innych tego typu opracowań naukowych, lecz także
            konsultacje metodologii badań. Korzystanie ze wsparcia w zakresie
            usługi opracowanie statystyczne wyników badań jest już powszechnie
            stosowaną praktyką. Przed skorzystaniem z tego typu usług
            statystycznych, warto jednak dowiedzieć się na czym polega praca
            przy wykonywaniu analizy wyników badań. Kluczowe jest także poznanie
            jakie są jej etapy oraz co, tak naprawdę, składa się na jej koszty.
          </p>
          <h2 className="entrycontent__content-second">
            Jak opracować wyniki ankiety w pracy magisterskiej czy doktorskiej?
          </h2>
          <p className="entrycontent__content-text">
            Po przygotowaniu ostatecznej bazy z wynikami badania można
            przystąpić do właściwej części opracowania wyników. Odpowiednie
            opracowanie danych statystycznych przeprowadzonych badań to główne
            zadanie statystyka wykonującego usługę analiza statystyczna do badań
            dla studentów lub pracowników naukowych. Pierwszą częścią etapu
            opracowania statystycznego wyników badań jest poddanie
            przekształceniom danych w sporządzonej bazie wyników. Ma to na celu
            przeprowadzenie dalszej części analizy oraz ułatwienia interpretacji
            wyników odbiorcom raportu/opracowania. Znajdujące się w bazie danych
            surowych zmienne są zatem grupowane, zliczane, na ich podstawie
            tworzone są tak zwane indeksy. Jeśli badanie prowadzone było na
            podstawie kwestionariusza standaryzowanego (w przypadku opracowania
            statystycznego wyników badań do prac licencjackich bądź do prac
            magisterskich związanych z medycznymi kierunkami studiów bardzo
            często stosowane są kwestionariusze psychologiczne), jego wyniki
            opracowywane są na podstawie klucza interpretacyjnego załączonego do
            takiego kwestionariusza. Po opracowaniu zebranego materiału
            empirycznego wykonywany jest jego opis statystyczny oraz
            wnioskowanie statystyczne. Inaczej mówiąc opracowane zostają
            wszystkie potrzebne wyniki badania: rozkłady odpowiedzi na
            poszczególne pytania ankietowe, statystyki opisowe wybranych
            zmiennych ilościowych, tabele krzyżowe, w których zestawiane są ze
            sobą różne zmienne (pytania) czy testy statystyczne badające
            potencjalne związki między zmiennymi. Wszystkie wykonane obliczenia
            prezentowane są w postaci wykresów, tabel, infografik bądź opisu
            tekstowego. Sam opis statystyczny służy poznaniu rozkładu badanych
            cech w zbiorowości interesującej autora pracy. Natomiast
            wnioskowanie statystyczne to przenoszenie wyników przeprowadzonych
            badań na populację generalną. Usługi statystyczne wykonywane przez
            profesjonalne podmioty, są zazwyczaj przeprowadzane na oryginalnym,
            licencjonowanym oprogramowaniu, np. SPSS lub STATISTICA. Warto
            jednak zwrócić uwagę, że istnieje także możliwość, aby samodzielnie
            popróbować swoich sił w analizie. Można do tego celu wykorzystać
            darmowe oprogramowanie opartego na licencji typu freeware. Godnym
            polecenia programem jest choćby PSPP. Jego funkcjonalności i
            interfejs w znacznym stopniu przypominają starsze wydania programu
            SPSS. Poniżej przedstawiamy podgląd interfejsu programu PSPP:
          </p>
          <img src={imgText} className="entrycontent__content-img" />
          <p className="entrycontent__content-text">
            Podsumowując, poprawne opracowanie statystyczne wyników badań do
            prac naukowych sprowadzają się także do umiejętnego przygotowania
            matrycy z wynikami badania, która później staje się obiektem pracy
            statystyka. Natomiast narzędziem jest w tym przypadku program
            statystyczny. W szerszej perspektywie całości procesu badawczego,
            błędy popełnione na etapie projektowania badania mają znaczący wpływ
            na uzyskane z niego wyniki. Równie ważne jest jednak też uniknięcie
            błędów na etapach przygotowania bazy z wynikami i późniejszej ich
            interpretacji. Zapraszamy na nasz specjalny serwis
            ObliczeniaStatystyczne.pl – opisujemy na nim szeroko analizy
            statystyczne i usługi dla studentów i pracowników naukowych.
          </p>
        </div>
        <Blog />
      </Container>
    </section>
  )
}
export default EntryContent
