import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import SocialServices from "../components/SocialServices"
import SocialTheme from "../components/SocialTheme"
import Benefits from "../components/Benefits"
import FeedbackMail from "../components/FeedbackMail"
import Footer from "../components/Footer"
import groupImg from '../images/group_people.png'
const socialstudies = () => {
  return (
    <>
      <Header />
      <Hero
        title={
          "Dzięki współpracy ze środowiskiem akademickim do badń społecznych podchodzimy rzetelnie i skutecznie!"
        }
        widthEl={"557"}
        buttons={["Wypełnij brief", "Skontaktuj się"]}
        img={groupImg}
        widthImg={"40%"}
        right={140}
      />
      <SocialTheme
        title={"Z KIM WSPÓŁPRACUJEMY"}
        widthTitle={"178"}
        head={
          "Badania społeczne prowadzimy głównie na zlecenie instytucji administracji państwowej i samorządowej, a także organizacji pożytku publicznego oraz instytucji otoczenia biznesu."
        }
        text={
          "Dzięki stale z nami współpracującymi ekspertami ze środowisk akademickich – w tym doktorami nauk ekonomicznych i socjologii – mającymi szerokie doświadczenie w realizacji projektów badawczych na skalę krajową i europejską, jesteśmy w stanie skutecznie i rzetelnie realizować szeroko rozumiane badania społeczne."
        }
      />
      <SocialServices />
      <Benefits />
      <FeedbackMail />
      <Footer />
    </>
  )
}
export default socialstudies
