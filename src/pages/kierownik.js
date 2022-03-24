import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import DepContent from "../components/DepContent"
import Footer from "../components/Footer"
const depmanager = () => {
  return (
    <>
      <Header />
      <Hero title={"Kierownik działu badań"} widthEl={"528"} buttons={[]} />
      <DepContent />
      <Footer />
    </>
  )
}
export default depmanager
