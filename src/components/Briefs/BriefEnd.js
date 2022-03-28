import React from "react"
import { Link } from "gatsby"
import Container from "../Container"
import briefIcon from "../../images/icon/brief-icon.svg"
import ToFirma from "./../ToFirma"
const BriefEnd = () => {
  return (
    <section className="briefend">
      <Container>
        <div className="briefend__block">
          <div className="briefend__block-img">
            <img className="briefend__block-img-icon" src={briefIcon} />
          </div>
          <h1 className="briefend__block-head">
            Dziękujemy za wypełnienie briefu!{" "}
            <strong>Wkrótce się do Ciebie odezwiemy!</strong>
          </h1>
          <Link to="/" className="brief-button-back">
            Wróć na stronę główną
          </Link>
        </div>
      </Container>
    </section>
  )
}
export default BriefEnd
