import React from "react"
import DescTitle from "./DescTitle"
import Container from "./Container"
import planet from "../images/Planet.png"
import Parallax from "./Parallax"
const Library = () => {
  return (
    <section className="library">
      <Container>
        <Parallax position="right">
          <div className="library__block">
            <div className="library__block-thoomb">
              <DescTitle width={"208"}>SŁOWNIK BADAWCZY</DescTitle>
              <h1 className="library__block-head">
                Znajdą tu Państwo wszelkie niezbędne informacje dotyczące
                podstawowych pojęć i definicji używanych w badaniach.
              </h1>
              <button className="library__block-button">
                Dowiedz się więcej
              </button>
            </div>
          </div>
        </Parallax>
      </Container>
      <img src={planet} className="library__block-img" />
    </section>
  )
}
export default Library
