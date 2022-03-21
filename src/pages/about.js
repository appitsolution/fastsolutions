import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import ToFirma from "../components/ToFirma"
import WhyNot from "../components/WhyNot"
import Rules from "../components/Rules"
import WeWork from "../components/WeWork"
import flag from "../images/flag.jpg"
import Group from "../components/Group"
import Footer from "../components/Footer"
import FeedbackMail from "./../components/FeedbackMail"
const About = () => {
  return (
    <>
      <Header />
      <Hero
        title="Agencja badawcza
ABM Fast Solutions jest
profesjonalną firmą badawczą działającą na terenie całego kraju."
        widthEl={524}
        buttons={["Wypełnij brief", "Skontaktuj się"]}
        img={flag}
        widthImg={"auto"}
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
