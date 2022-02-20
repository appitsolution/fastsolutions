import React from "react"
import Container from "./Container"
import DescTitle from "./DescTitle"
import chart from "../images/icon/chart.svg"
import teacher from "../images/icon/teacher.svg"
import statusUp from "../images/icon/status-up.svg"
import trade from "../images/icon/trade.svg"
import Slider from "./Slider"
const ToFirma = () => {
  return (
    <section className="ofirma">
      <Container>
        <div className="ofirma__push">
          <ul className="ofirma__push-list">
            <li className="ofirma__push-list-item">
              <img
                src={chart}
                className="ofirma__push-list-item-img"
                alt="chart"
              />
            </li>
            <li className="ofirma__push-list-item">
              <DescTitle>O FIRMIE</DescTitle>
              <h1 className="ofirma__push-list-item-head">
                <span className="ofirma__push-list-item-head-span">
                  ABM Fast Solutions to agencja badawcza
                </span>{" "}
                z siedzibą w Rzeszowie, która rozpoczęła działalnośćw grudniu
                2011 roku.
              </h1>
              <p className="ofirma__push-list-item-text">
                Od 2013 roku, dzięki stale rozwijanej ogólnopolskiej siatce
                ankieterów i audytorów oraz własnemu studio CATI,{" "}
                <span className="ofirma__push-list-item-text-span">
                  prowadzimy realizacje badań na terenie wszystkich województw w
                  kraju.
                </span>
              </p>
            </li>
          </ul>
        </div>
        <p className="ofirma__text">
          Projektujemy i skutecznie realizujemy badania marketingowe i rynkowe
          dla klientów biznesowych. Od początku działalności wykonujemy także
          badania naukowe oraz analizy statystyczne dla uczelni publicznych,
          uczelni prywatnych i naukowców. Jesteśmy także częstym wykonawcą i
          podwykonawcą badań społecznych dla instytucji administracji państwowej
          i samorządowej oraz instytucji otoczenia biznesu.
        </p>
        <p className="ofirma__text">
          Jako{" "}
          <span className="ofirma__text-span">
            agencja badawcza typu „full service”
          </span>{" "}
          posiadamy pełne własne zaplecze do prowadzenia szeroko zakrojonych
          badań na terenie całego kraju. Dysponujemy dedykowanym{" "}
          <span className="ofirma__text-span">
            panelem zarządzania projektami Badań Tajemniczego Klienta,
          </span>{" "}
          profesjonalnym{" "}
          <span className="ofirma__text-span">
            studiem do badań CATI i oprogramowaniem CAWI.
          </span>{" "}
          Własne studio do badań fokusowychw woj.podkarpackim oraz{" "}
          <span className="ofirma__text-span">zaplecze stałych ekspertów</span>{" "}
          związanych ze środowiskiem nauki i biznesu to dodatkowe atuty przy
          współpracy w złożonych metodologicznie projektach z naszą agencją
          badawczą.
        </p>
        <p className="ofirma__text">
          Nasze doświadczenie obejmuje ilościowe oraz jakościowe projekty
          badawcze wykonane dla takich firm jak{" "}
          <span className="ofirma__text-span">
            PGNiG S.A., Polska Spółka Gazownictwa S.A, CEFARM S.A., ARRIVA sp. z
            o.o., LIDL sp. z o.o. sp.k., Open Life Towarzystwo Ubezpieczeń Życie
            S.A., SANBank i wielu innych.
          </span>{" "}
          Obsługujemy także inne firmy badawcze w Polsce. Nasza agencja badań
          jest także stałym i wieloletnim podwykonawcą badań ankietowych dla
          wielu innych podmiotów:
        </p>
        <ul className="ofirma__list">
          <li className="ofirma__list-item">
            <img src={teacher} className="ofirma__list-item-img" alt="icon1" />
            <p className="ofirma__list-item-text">
              Uczelni publicznych i prywatnych
            </p>
          </li>
          <li className="ofirma__list-item">
            <img src={statusUp} className="ofirma__list-item-img" alt="icon2" />
            <p className="ofirma__list-item-text">Instytutów naukowych</p>
          </li>
          <li className="ofirma__list-item">
            <img src={trade} className="ofirma__list-item-img" alt="icon3" />
            <p className="ofirma__list-item-text">
              Firm konsultingowych, marketingowych, public relations
            </p>
          </li>
        </ul>
        <p className="ofirma__text">
          Jako agencja badawcza wspieramy także analitycznie naszą macierzystą
          firmę{" "}
          <span className="ofirma__text-span">Grupa WW Spółka z o.o.,</span>{" "}
          działającąw obszarze content marketingu i analityki internetowej. Jako
          spółka jesteśmy również członkiem{" "}
          <span className="ofirma__text-span">
            Klastra Firm Informatycznych Polski Wschodniej.{" "}
          </span>
        </p>
      </Container>
      <Slider />
    </section>
  )
}
export default ToFirma
