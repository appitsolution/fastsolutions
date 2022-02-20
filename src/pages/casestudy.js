import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import ContentCasestudy from "../components/ContentCasestudy"
import FeedbackMail from "../components/FeedbackMail"
import Footer from "../components/Footer"
const casestudy = () => {
  return (
    <>
      <Header />
      <Hero
        title={"Studium Przypadku Diagnoza Satysfakcji"}
        widthEl={"472"}
        buttons={[]}
      />
      <ContentCasestudy />
      <FeedbackMail />
      <Footer />
    </>
  )
}
export default casestudy
