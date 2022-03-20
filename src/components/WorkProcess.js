import React from "react"
import DescTitle from "./DescTitle"
import imgProcess from "../images/icon/process.svg"
import Container from "./Container"
import Notification from "./Notification"
import Parallax from "./Parallax"

const WorkProcess = () => {
  return (
    <section className="workprocess">
      <Container>
        <Parallax>
          <DescTitle>NASZ PROCES</DescTitle>
          <div className="workprocess__block">
            <div className="workprocess__block-content">
              <p className="workprocess__block-content-text">
                ABM Fast Solutions z siedzibą w Rzeszowie już od 2011 roku
                świadczy usługi w zakresie koordynacji badań oraz ich
                kompleksowej realizacji. Fieldwork prowadzimy zarówno w zakresie
                badań rynkowych i społecznych. Od 2014 roku obsługujemy
                realizację badań ogólnopolskich. Zasięg naszej siatki
                ankieterskiej do celów ankietyzacji obejmuje zarówno Rzeszów,
                jak i całe województwo podkarpackie, a także wybrane miasta i
                powiaty na terenie całej Polski. Dokładamy starań, aby zapewnić
                najwyższe standardy jakościowe pracy terenowej. Wszyscy
                współpracujący z nami ankieterzy i audytorzy przechodzą
                dedykowane szkolenia merytoryczne i realizacyjne dotyczące
                realizowanego projektu. Nasz stały zespół to także doświadczeni
                moderatorzy badań fokusowych i paneli eksperckich.
                Profesjonalnie realizujemy badania jakościowe na terenie
                dowolnego miasta Polski południowo- wschodniej. Przy
                ogólnopolskich projektach współpracujemy ze sprawdzonymi
                moderatorami.
              </p>
            </div>
            <div className="workprocess__block-images">
              <img src={imgProcess} className="workprocess__block-images-img" />
            </div>
          </div>
        </Parallax>
        <Parallax position="right">
          <Notification position={"right-top"}>
            Przyjmujemy zlecenia koordynacji i realizacji badań marketingowych i
            społecznych od agencji badawczych, ośrodków badania opinii
            społecznej, instytucji publicznych, a także organizacji non-profit,
            w tym fundacji i stowarzyszeń.
          </Notification>
        </Parallax>
      </Container>
    </section>
  )
}
export default WorkProcess
