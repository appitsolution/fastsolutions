import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Informations from "../components/Informations"
import AboutCompany from "../components/AboutCompany"
import Blog from "../components/Blog"
import FeedbackMail from "../components/FeedbackMail"
import Footer from "../components/Footer"
import sukaindex from "../images/imgindex.png"
import ModalWindow from "../components/ModalWindow"
import "../sass/main.scss"
const index = () => {
  return (
    <div data-is-root-path="true">
      <Header />
      <Hero
        title={"Kompleksowe badania marketingowe,rynkowe,społeczne"}
        widthEl="343"
        text="Działamy na terenie całego kraju od 2011 roku."
        buttons={["Dowiedz się więcej"]}
        call={true}
        img={sukaindex}
      />
      <Informations />
      <AboutCompany />
      <Blog />
      <FeedbackMail />
      <Footer />
      {/* <ModalWindow/> */}
    </div>
  )
}
export default index
