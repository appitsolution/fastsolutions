import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import ClientReport from "../components/ClientReport"
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
      />
      <ClientReport />
    </>
  )
}
export default ourcustomers
