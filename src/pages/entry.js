import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import EntryContent from "../components/EntryContent"
import FeedbackMail from "./../components/FeedbackMail"
import Footer from "../components/Footer"
const entry = () => {
  return (
    <>
      <Header />
      <Hero
        title={"Opracowanie statystyczne wyników badań „od kuchni”"}
        widthEl={"1000"}
        buttons={[]}
      />
      <EntryContent />
      <FeedbackMail />
      <Footer />
    </>
  )
}
export default entry
