import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import CaseStudies from "../components/CaseStudies"
import Blog from "../components/Blog"
import Library from "../components/Library"
import FeedbackMail from "../components/FeedbackMail"
import Footer from "../components/Footer"
const knowledgebase = () => {
  return (
    <>
      <Header />
      <Hero title={"Baza wiedzy"} buttons={[]} />
      <Blog />
      <Library />
      <CaseStudies />
      <FeedbackMail />
      <Footer />
    </>
  )
}
export default knowledgebase
