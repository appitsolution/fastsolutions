import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import ClientReport from "../components/ClientReport"
import FeedbackMail from "../components/FeedbackMail"
import Footer from "../components/Footer"
import headImg from '../images/our_client.png'
const ourcustomers = () => {
  return (
    <>
      <Header />
      <Hero
        title={
          "Staramy się by nasi klienci chętnie do nas wracali, a my z przyjemnością im doradzamy!"
        }
        widthEl={"558"}
        buttons={["Wypełnij brief", "Skontaktuj się"]}
        img={headImg}
        widthImg={"40%"}
      />
      <ClientReport />
      <FeedbackMail />
      <Footer />
    </>
  )
}
export default ourcustomers
