import React from "react"
import Container from "./Container"
import DescTitle from "./DescTitle"
import Notification from "./Notification"
import Parallax from "./Parallax"
const ClientContent = ({ title, text1, notific, text2 }) => {
  return (
    <section className="clientcontent">
      <Container>
        <Parallax position="right">
          <DescTitle>{title}</DescTitle>
          <p className="clientcontent-text">{text1}</p>
        </Parallax>
        <Parallax position="left">
          <Notification position={"left-top"}>{notific}</Notification>
        </Parallax>
        <Parallax position="right">
          <p className="clientcontent-description">{text2}</p>
        </Parallax>
      </Container>
    </section>
  )
}
export default ClientContent
