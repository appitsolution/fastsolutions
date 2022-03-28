import React, { useState } from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import BriefStart from "../components/Briefs/BriefStart"
import Brief1 from "../components/Briefs/Brief1"
import Brief2 from "../components/Briefs/Brief2"
import Brief3 from "../components/Briefs/Brief3"
import Brief4 from "../components/Briefs/Brief4"
import Brief5 from "../components/Briefs/Brief5"
import BriefEnd from "../components/Briefs/BriefEnd"

const Brief = () => {
  const [numBrief, setNumBrief] = useState(0)

  const nextPage = () => {
    const newSun = numBrief + 1
    setNumBrief(newSun)
  }
  const backPage = () => {
    const newSun = numBrief - 1
    setNumBrief(newSun)
  }
  const briefList = [
    <BriefStart next={nextPage} />,
    <Brief1 next={nextPage} />,
    <Brief2 next={nextPage} back={backPage} />,
    <Brief3 next={nextPage} back={backPage} />,
    <Brief4 next={nextPage} back={backPage} />,
    <Brief5 next={nextPage} back={backPage} />,
    <BriefEnd />,
  ]
  return (
    <>
      <Header />
      <Hero title="Brief badawczy" buttons={[]} />
      {briefList[numBrief]}
      <Footer />
    </>
  )
}
export default Brief
