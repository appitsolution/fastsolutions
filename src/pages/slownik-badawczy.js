import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import SortResear from "../components/SortResear"
import FeedbackMail from "../components/FeedbackMail"
import Footer from "../components/Footer"
const researchdictionary = () => {
  return (
    <>
      <Header />
      <Hero title={"Słownik badawczy"} widthEl={"420"} buttons={[]} />
      <SortResear />
      <FeedbackMail />
      <Footer />
    </>
  )
}
export default researchdictionary
