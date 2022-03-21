import React from "react"
import Container from "./Container"
import Notification from "./Notification"
import methodList from "../images/icon/methodList.svg"
import DescTitle from "./DescTitle"
import Parallax from "./Parallax"
import { cleanPath } from "./../../.cache/find-path"
import cub1 from "../images/icon/cub1.svg"
import cub2 from "../images/icon/cub2.svg"
import cub3 from "../images/icon/cub3.svg"
import cub4 from "../images/icon/cub4.svg"
const BadanieContent = () => {
  return (
    <section className="badaniecontent">
      <Container>
        <Parallax position="right">
          <DescTitle width={"210"}>KIM JEST TAJEMNCZY KLIENT?</DescTitle>
          <p className="badaniecontent__text">
            Badanie satysfakcji pracowników prowadzą firmy, które pragną odnieść
            długotrwały sukces na rynku oraz których kadry zarządzające mają
            świadomość, że pracownicy powinni być traktowani jako jeden z
            niematerialnych aktywów firmy oraz źródło konkurencyjności. Obecnie
            pracownicy są jednym z najważniejszych zasobów, które posiadają
            firmy. Nie sposób rozwijać przedsiębiorstwo w stabilny sposób bez
            zwrócenia uwagi na czynniki kształtujące satysfakcję pracowników.*
            Profesjonalne badanie opinii pracowników to również odpowiedź na
            problemy przedsiębiorstw borykających się z wysoką rotacją kadr.
          </p>
        </Parallax>
        <Parallax position="left">
          <div className="badaniecontent__end">
            <div className="badaniecontent__end-information">
              <Notification position={"right-bottom"} weight="800">
                Badania satysfakcji pracowników przeprowadzamy w kluczowych
                obszarach
              </Notification>
              <p className="badaniecontent__end-information-text">
                Istnieje możliwość przeprowadzenia badań o bardziej kompleksowym
                i przekrojowym charakterze, umożliwiających zbadanie kilku
                obszarów tematycznych równolegle.
              </p>
            </div>
            <div className="badaniecontent__end-image">
              <ul className="badaniecontent__end-image-list">
                <li className="badaniecontent__end-image-list-item">
                  <div className="badaniecontent__end-image-list-item-block1">
                    <img
                      className="badaniecontent__end-image-list-item-block1-img1"
                      src={cub1}
                    />
                    <img
                      className="badaniecontent__end-image-list-item-block1-img2"
                      src={cub2}
                    />
                  </div>
                </li>
                <li className="badaniecontent__end-image-list-item">
                  <div className="badaniecontent__end-image-list-item-block2">
                    <img
                      className="badaniecontent__end-image-list-item-block2-img3"
                      src={cub3}
                    />
                    <img
                      className="badaniecontent__end-image-list-item-block2-img4"
                      src={cub4}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Parallax>
      </Container>
    </section>
  )
}
export default BadanieContent
