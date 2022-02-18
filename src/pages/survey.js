import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import BadaniaContent from "../components/BadanieContent"
import BadanieCommunity from "../components/BadanieCommunity"
import Cubs from "../components/Cubs"
import FeedbackMail from "../components/FeedbackMail"
import Footer from "../components/Footer"
const survey = () => {
  return (
    <>
      <Header />
      <Hero
        title={
          "Badanie satysfakcji pracowników – dlaczego warto je zlecić zewnętrznej agencji badawczej?"
        }
        buttons={["Wypełnij brief", "Skontaktuj się"]}
        widthEl={"557"}
      />
      <BadaniaContent />
      <Cubs />
      <BadanieCommunity />
      <FeedbackMail />
      <Footer />
    </>
  )
}
export default survey
