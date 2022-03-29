import React from "react"
import DescTitle from "../DescTitle"
import Container from "../Container"
import Notification from "../Notification"
import ModalWindow from "../ModalWindow"
const BriefStart = ({ next }) => {
  function getBodyScrollTop() {
    return (
      (document.documentElement && document.documentElement.scrollTop) ||
      (document.body && document.body.scrollTop)
    )
  }
  const openWindow = () => {
    document.querySelector(".backdrop").classList.add("active")
    document.body.style = "overflow: hidden;"
    const num = 65 + +getBodyScrollTop().toFixed()
    document.getElementById("popup").style.top= `${num}px`
  }
  return (
    <section className="briefstart">
      <ModalWindow/>
      <Container>
        <DescTitle>BRIEF</DescTitle>
        <h2 className="briefstart__head">Szanowni Państwo! </h2>
        <p className="briefstart__text">
          W celu przygotowania szacunkowej wyceny usługi badawczej wraz z
          wstępnymi propozycjami metodologicznymi potrzebujemy uzyskać kilka
          kluczowych informacji kontekstowych.
        </p>
        <Notification position="right-bottom">
          W związku z powyższym uprzejmie{" "}
          <strong>prosimy o uzupełnienie krótkiego briefu badawczego.</strong>
        </Notification>
        <p className="briefstart__text">
          Mamy nadzieję, że okaże się on dla Państwa pomocny w dokładnym
          zdefiniowaniu potrzeb badawczych i celów badania. *Niniejszy formularz
          nie jest równoznaczny ze złożeniem zamówienia i ma na celu wyłącznie
          usprawnienie procesu sporządzenia dla Państwa wyceny lub oferty.{" "}
        </p>
        <div className="briefstart__buttons">
          <button className="button" onClick={next}>Wypełnij brief</button>
          <button className="button" onClick={openWindow} >
            Skontaktuj się
          </button>
        </div>
      </Container>
    </section>
  )
}
export default BriefStart
