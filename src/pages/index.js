import React, { useEffect } from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Informations from "../components/Informations"
import AboutCompany from "../components/AboutCompany"
import Blog from "../components/Blog"
import FeedbackMail from "../components/FeedbackMail"
import Footer from "../components/Footer"
import flag from "../images/flag.jpg"
import "../sass/main.scss"
const index = () => {
  return (
    <div data-is-root-path="true">
      <Header />
      <Hero
        title="Agencja badawcza`
ABM Fast Solutions jest
profesjonalną firmą badawczą działającą na terenie całego kraju."
        widthEl={524}
        buttons={["Wypełnij brief", "Skontaktuj się"]}
        img={flag}
        widthImg={"auto"}
      />
      <Informations />
      <AboutCompany />
      <Blog />
      <FeedbackMail />
      <Footer />
    </div>
  )
}
export default index
