import React from "react"
import Container from "./Container"
import DescTitle from "./DescTitle"
import notebook from "../images/notebook.jpg"
import avatar from "../images/avatar.png"
import meetjob from "../images/meetjob.png"
import tradegraph from "../images/tradegraph.png"
import Parallax from "./Parallax"
const BlogComponent = () => {
  return (
    <section className="blogcomponent">
      <Container>
        <Parallax position="left">
          <div className="blogcomponent__info">
            <ul className="blogcomponent__info-list">
              <li className="blogcomponent__info-list-item">
                <img
                  src={notebook}
                  className="blogcomponent__info-list-item-img"
                />
              </li>
              <li className="blogcomponent__info-list-item">
                <DescTitle>BLOG</DescTitle>
                <a href="#" className="blogcomponent__info-list-item-head">
                  Opracowanie statystyczne wyników badań „od kuchni”
                </a>
                <p className="blogcomponent__info-list-item-description">
                  Dlaczego opracowanie statystyczne wyników badań do prac
                  naukowych warto zlecić profesjonalistom? Opracowanie
                  statystyczne wyników badań.
                </p>
                <p className="blogcomponent__info-list-item-date">
                  <span className="blogcomponent__info-list-item-date-day">
                    31 Sty 22
                  </span>
                  <span className="blogcomponent__info-list-item-date-time">
                    8 min
                  </span>
                </p>
                <div className="blogcomponent__info-list-item-avatar">
                  <img
                    src={avatar}
                    className="blogcomponent__info-list-item-avatar-img"
                  />
                  <div className="blogcomponent__info-list-item-avatar-block">
                    <h2 className="blogcomponent__info-list-item-avatar-block-head">
                      Krzysztof Krudysz
                    </h2>
                    <p className="blogcomponent__info-list-item-avatar-block-text">
                      Market Research & Fieldwork
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </Parallax>
        <Parallax position="right">
          <ul className="blogcomponent__list">
            <li className="blogcomponent__list-item">
              <img src={meetjob} className="blogcomponent__list-item-img" />
              <h1 className="blogcomponent__list-item-head">
                Opracowanie statystyczne wyników badań „od kuchni”
              </h1>
              <p className="blogcomponent__list-item-text">
                Dlaczego opracowanie statystyczne wyników badań do prac
                naukowych warto zlecić profesjonalistom? Opracowanie
                statystyczne wyników badań
              </p>
              <p className="blogcomponent__info-list-item-date">
                <span className="blogcomponent__info-list-item-date-day">
                  31 Sty 22
                </span>
                <span className="blogcomponent__info-list-item-date-time">
                  8 min
                </span>
              </p>
            </li>
            <li className="blogcomponent__list-item">
              <img src={tradegraph} className="blogcomponent__list-item-img" />
              <h1 className="blogcomponent__list-item-head">
                Opracowanie statystyczne wyników badań „od kuchni”
              </h1>
              <p className="blogcomponent__list-item-text">
                Dlaczego opracowanie statystyczne wyników badań do prac
                naukowych warto zlecić profesjonalistom? Opracowanie
                statystyczne wyników badań
              </p>
              <p className="blogcomponent__info-list-item-date">
                <span className="blogcomponent__info-list-item-date-day">
                  31 Sty 22
                </span>
                <span className="blogcomponent__info-list-item-date-time">
                  8 min
                </span>
              </p>
            </li>
            <li className="blogcomponent__list-item">
              <img src={meetjob} className="blogcomponent__list-item-img" />
              <h1 className="blogcomponent__list-item-head">
                Opracowanie statystyczne wyników badań „od kuchni”
              </h1>
              <p className="blogcomponent__list-item-text">
                Dlaczego opracowanie statystyczne wyników badań do prac
                naukowych warto zlecić profesjonalistom? Opracowanie
                statystyczne wyników badań
              </p>
              <p className="blogcomponent__info-list-item-date">
                <span className="blogcomponent__info-list-item-date-day">
                  31 Sty 22
                </span>
                <span className="blogcomponent__info-list-item-date-time">
                  8 min
                </span>
              </p>
            </li>
            <li className="blogcomponent__list-item">
              <img src={tradegraph} className="blogcomponent__list-item-img" />
              <h1 className="blogcomponent__list-item-head">
                Opracowanie statystyczne wyników badań „od kuchni”
              </h1>
              <p className="blogcomponent__list-item-text">
                Dlaczego opracowanie statystyczne wyników badań do prac
                naukowych warto zlecić profesjonalistom? Opracowanie
                statystyczne wyników badań
              </p>
              <p className="blogcomponent__info-list-item-date">
                <span className="blogcomponent__info-list-item-date-day">
                  31 Sty 22
                </span>
                <span className="blogcomponent__info-list-item-date-time">
                  8 min
                </span>
              </p>
            </li>
            <li className="blogcomponent__list-item">
              <img src={meetjob} className="blogcomponent__list-item-img" />
              <h1 className="blogcomponent__list-item-head">
                Opracowanie statystyczne wyników badań „od kuchni”
              </h1>
              <p className="blogcomponent__list-item-text">
                Dlaczego opracowanie statystyczne wyników badań do prac
                naukowych warto zlecić profesjonalistom? Opracowanie
                statystyczne wyników badań
              </p>
              <p className="blogcomponent__info-list-item-date">
                <span className="blogcomponent__info-list-item-date-day">
                  31 Sty 22
                </span>
                <span className="blogcomponent__info-list-item-date-time">
                  8 min
                </span>
              </p>
            </li>
            <li className="blogcomponent__list-item">
              <img src={tradegraph} className="blogcomponent__list-item-img" />
              <h1 className="blogcomponent__list-item-head">
                Opracowanie statystyczne wyników badań „od kuchni”
              </h1>
              <p className="blogcomponent__list-item-text">
                Dlaczego opracowanie statystyczne wyników badań do prac
                naukowych warto zlecić profesjonalistom? Opracowanie
                statystyczne wyników badań
              </p>
              <p className="blogcomponent__info-list-item-date">
                <span className="blogcomponent__info-list-item-date-day">
                  31 Sty 22
                </span>
                <span className="blogcomponent__info-list-item-date-time">
                  8 min
                </span>
              </p>
            </li>
          </ul>
        </Parallax>
      </Container>
    </section>
  )
}
export default BlogComponent
