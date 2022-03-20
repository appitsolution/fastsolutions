import React from "react"
import Container from "./Container"
import DescTitle from "./DescTitle"
import Parallax from "./Parallax"
const MethodAction = ({ nameDesc, title, text1, text2 }) => {
  return (
    <section className="methodaction">
      <Container>
        <Parallax position="right">
          <DescTitle>{nameDesc}</DescTitle>
          <h1 className="methodaction__head">{title}</h1>
          <p className="methodaction__text">{text1}</p>
          <p className="methodaction__text">{text2}</p>
        </Parallax>
      </Container>
    </section>
  )
}
export default MethodAction
