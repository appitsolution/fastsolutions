import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import PermanentTeam from "../components/PermanentTeam"
import Internships from "../components/Internships"
import Workwithus from "../components/Workwithus"
import FeedbackMail from "../components/FeedbackMail"
import Footer from "../components/Footer"
const joboffers = () => {
  return (
    <>
      <Header />
      <Hero
        title={
          "Dołącz do naszego stałego zespołu w biurze lub podejmij współpracę!"
        }
        widthEl={"558"}
        buttons={["Skontaktuj się"]}
      />

      <PermanentTeam />
      <Internships />
      <Workwithus />
      <FeedbackMail />
      <Footer />
    </>
  )
}
export default joboffers
