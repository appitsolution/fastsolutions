import React from "react"
import Container from "./Container"
import Notification from "./Notification"
import methodList from "../images/icon/methodList.svg"
import DescTitle from "./DescTitle"
const BadanieContent = () => {
  return (
    <section className="badaniecontent">
      <Container>
        <DescTitle width={"210"}>KIM JEST TAJEMNCZY KLIENT?</DescTitle>
        <p className="badaniecontent__text">
          Badanie satysfakcji pracowników prowadzą firmy, które pragną odnieść
          długotrwały sukces na rynku oraz których kadry zarządzające mają
          świadomość, że pracownicy powinni być traktowani jako jeden z
          niematerialnych aktywów firmy oraz źródło konkurencyjności. Obecnie
          pracownicy są jednym z najważniejszych zasobów, które posiadają firmy.
          Nie sposób rozwijać przedsiębiorstwo w stabilny sposób bez zwrócenia
          uwagi na czynniki kształtujące satysfakcję pracowników.* Profesjonalne
          badanie opinii pracowników to również odpowiedź na problemy
          przedsiębiorstw borykających się z wysoką rotacją kadr.
        </p>
        <div className="badaniecontent__end">
          <div className="badaniecontent__end-information">
            <Notification position={"right-bottom"} weight="800">
              Badania satysfakcji pracowników przeprowadzamy w kluczowych
              obszarach
            </Notification>
            <p className="badaniecontent__end-information-text">
              Istnieje możliwość przeprowadzenia badań o bardziej kompleksowym i
              przekrojowym charakterze, umożliwiających zbadanie kilku obszarów
              tematycznych równolegle.
            </p>
          </div>
          <div className="badaniecontent__end-image">
            <img className="badaniecontent__end-image-img" src={methodList} />
          </div>
        </div>
      </Container>
    </section>
  )
}
export default BadanieContent
