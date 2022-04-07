import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import ToFirma from "../components/ToFirma"
import WhyNot from "../components/WhyNot"
import Rules from "../components/Rules"
import WeWork from "../components/WeWork"
import homeimg from "../images/homeimg.png"
import Group from "../components/Group"
import Footer from "../components/Footer"
import FeedbackMail from "../components/FeedbackMail"
const About = () => {
  return (
    <>
      <Header />
      <Hero
        title={"Kompleksowe badania marketingowe, rynkowe, społeczne"}
        widthEl="343"
        text="Działamy na terenie całego kraju od 2011 roku."
        buttons={["Dowiedz się więcej"]}
        call={true}
        img={homeimg}
        heightImg={"120%"}
      />
      <ToFirma />
      <WhyNot />
      <Rules />
      <WeWork />
      <Group />
      <FeedbackMail />
      <Footer />
    </>
  )
}
export default About
