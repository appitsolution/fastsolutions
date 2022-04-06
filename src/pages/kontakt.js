import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import MapsContacts from "../components/MapsContacts"
import FeedbackMail from "../components/FeedbackMail"
import Footer from "../components/Footer"
import clientImg from '../images/client_img/header-kontatk-min.jpg'
const contacts = () => {
  return (
    <>
      <Header />
      <Hero title={"Kontakt"} buttons={[]}/>
      <MapsContacts />
      <FeedbackMail />
      <Footer />
    </>
  )
}
export default contacts
