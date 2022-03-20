import React from "react"
import Container from "./Container"
import Logo from "../images/icon/Logo.svg"
import Parallax from "./Parallax"
const DepContent = () => {
  return (
    <section className="depcontent">
      <Container>
        <Parallax position="left">
          <img className="depcontent__img" src={Logo} />
        </Parallax>
        <Parallax position="right">
          <p className="depcontent__text">
            Jesteśmy firmą badawczą o ustabilizowanej pozycji na rynku, ze
            stosunkowo bogatym portfolio zrealizowanych niemal 100 projektów
            badawczych, w tym wielu o zasięgu krajowym. Obsługiwaliśmy również
            klientów zagranicznych. Dysponujemy własną siatką ankieterów i
            audytorów na terenie wszystkich województw w Polsce, zapleczem do
            badań CATI oraz dedykowanym oprogramowaniem.
            <br />
            <br />W związku ze stałym rozwojem, poszukujemy kandydatów na
            stanowisko <strong>„Kierownik Działu Badań i Analiz”.</strong>
            <br />
            <br />
            <strong>
              Zależy nam na podjęciu współpracy z doświadczonym pracownikiem
              merytorycznym z terenu województwa podkarpackiego, prawdziwym
              pasjonatem branży badawczej, który umożliwi podejmowanie nam
              jeszcze większej ilości równolegle realizowanych projektów.
            </strong>
          </p>
          <h2 className="depcontent__head">Zakres obowiązków na stanowisku</h2>
          <ul className="depcontent__list">
            <li className="depcontent__list-item">
              opracowywanie kompleksowych metodologii realizowanych badań
              marketingowych i badań społecznych,
            </li>
            <li className="depcontent__list-item">
              przygotowywanie ofert oraz kosztorysowanie projektów badawczych,
            </li>
            <li className="depcontent__list-item">
              kontakt z klientem, udział w briefingach online lub w siedzibie
              klienta,
            </li>
            <li className="depcontent__list-item">
              udział w konstruowaniu narzędzi badawczych,
            </li>
            <li className="depcontent__list-item">
              udział w przygotowywaniu raportów końcowych,
            </li>
            <li className="depcontent__list-item">
              współpraca z ekspertami zewnętrznymi,
            </li>
            <li className="depcontent__list-item">
              pomoc w koordynacji prac Działu Badań i Analiz,
            </li>
            <li className="depcontent__list-item">
              nadzór nad stałą rozbudową i gruntowaniem własnej siatki
              ankieterskiej oraz kontrola prac koordynatorów regionalnych (we
              współpracy z oddelegowanym pracownikiem),
            </li>
            <li className="depcontent__list-item">
              udział w rozbudowie dedykowanego oprogramowania firmowego.
            </li>
          </ul>
          <h2 className="depcontent__head">Wymagania</h2>
          <ul className="depcontent__list">
            <li className="depcontent__list-item">
              bardzo dobra znajomość technik badawczych (PAPI, CAWI, CATI, IDI,
              FGI, desk research)
            </li>
            <li className="depcontent__list-item">
              dobra teoretyczna i praktyczna znajomość zagadnień
              metodologicznych związanych z badaniami marketingowymi (warunek
              konieczny) oraz obszaru metodologii badań społecznych (mile
              widziane),
            </li>
            <li className="depcontent__list-item">
              przynajmniej kilkumiesięczne, potwierdzone doświadczenie
              praktyczne w koordynacji terenowej badań przy użyciu siatki
              ankieterskiej i/lub audytorskiej (fieldwork)
            </li>
            <li className="depcontent__list-item">
              potwierdzone minimum 3 letnie doświadczenie praktyczne na
              stanowisku specjalisty ds. badań i analiz lub równoważnym w firmie
              badawczej lub konsultingowej,
            </li>
            <li className="depcontent__list-item">
              mile widziane doświadczenie stanowisku kierowniczym w firmie
              badawczej lub konsultingowej, w zbliżonym zakresie obowiązków,
            </li>
            <li className="depcontent__list-item">
              komunikatywna znajomość języka angielskiego,
            </li>
            <li className="depcontent__list-item">
              kreatywność i samodzielność,
            </li>
            <li className="depcontent__list-item">
              zdolności analityczne i planistyczne,
            </li>
            <li className="depcontent__list-item">
              wykształcenie marketing i zarządzanie, socjologia, psychologia lub
              matematyka
            </li>
          </ul>
          <h2 className="depcontent__head">Mile widziane</h2>
          <ul className="depcontent__list">
            <li className="depcontent__list-item">
              znajomość zagadnień metodologicznych związanych z badaniami
              społecznymi,
            </li>
            <li className="depcontent__list-item">
              bardzo dobra znajomość języka angielskiego,
            </li>
            <li className="depcontent__list-item">
              własne zasoby ankieterskie,
            </li>
            <li className="depcontent__list-item">
              własna działalność gospodarcza.
            </li>
          </ul>
          <ul className="depcontent__mail">
            <li className="depcontent__mail-item">
              <p className="depcontent__mail-item-text">
                Serdecznie zachęcamy do przesyłania dokumentów aplikacyjnych na
                adres e-mailowy:
              </p>
              <button className="depcontent__mail-item-button">
                rekrutacja@fastsolutions.pl
              </button>
            </li>
            <li className="depcontent__mail-item">
              <button className="depcontent__mail-item-link">Powrót</button>
            </li>
          </ul>
        </Parallax>
      </Container>
    </section>
  )
}
export default DepContent
