import React from "react"
import Button from "./Button"
import DescTitle from "./DescTitle"
import Container from "./Container"
import postImg1 from "../images/macbook.jpg"
import postImg2 from "../images/meet.png"
import postImg3 from "../images/graf.png"
import ParallaxY from "./ParallaxY"

const Blog = () => {
  return (
    <>
      <section className="blog">
        <Container>
          <ul className="blog__list">
            <li className="blog__list-item">
              <div className="blog__share">
                <div className="blog__share-block">
                  <DescTitle>BLOG</DescTitle>
                  <h1 className="blog__share-head">
                    <span className="blog__share-span">Dzielimy się</span> z
                    Wami wiedzą
                  </h1>
                  <p className="blog__share-text">
                    Dowiedz się czegoś{" "}
                    <span className="blog__share-span">
                      nowego, powiedz nam co myślisz i podziel na swoich mediach
                      społecznościowych
                    </span>
                  </p>
                </div>
                <Button>Czytaj więcej</Button>
              </div>
            </li>

            <li className="blog__list-item">
              <div className="blog__posts">
                <ul className="blog__posts-list">
                  <li className="blog__posts-list-item">
                    <div className="blog__posts-list-item-content">
                      <a
                        href="/entry/"
                        className="blog__posts-list-item-content-head"
                      >
                        Opracowanie statystyczne wyników badań „od kuchni”
                      </a>
                      <p className="blog__posts-list-item-content-text">
                        Dlaczego opracowanie statystyczne wyników badań do prac
                        naukowych warto zlecić profesjonalistom? Opracowanie
                        statystyczne wyników badań
                      </p>
                      <p className="blog__posts-list-item-content-date">
                        31 Sty 22
                        <span className="blog__posts-list-item-content-date-min">
                          8 min
                        </span>
                      </p>
                    </div>
                    <img src={postImg1} className="blog__posts-list-item-img" />
                  </li>
                  <li className="blog__posts-list-item">
                    <div className="blog__posts-list-item-content">
                      <a
                        href="/entry/"
                        className="blog__posts-list-item-content-head"
                      >
                        Opracowanie statystyczne wyników badań „od kuchni”
                      </a>
                      <p className="blog__posts-list-item-content-text">
                        Dlaczego opracowanie statystyczne wyników badań do prac
                        naukowych warto zlecić profesjonalistom? Opracowanie
                        statystyczne wyników badań
                      </p>
                      <p className="blog__posts-list-item-content-date">
                        31 Sty 22
                        <span className="blog__posts-list-item-content-date-min">
                          8 min
                        </span>
                      </p>
                    </div>
                    <img src={postImg2} className="blog__posts-list-item-img" />
                  </li>
                  <li className="blog__posts-list-item">
                    <div className="blog__posts-list-item-content">
                      <a
                        href="/entry/"
                        className="blog__posts-list-item-content-head"
                      >
                        Opracowanie statystyczne wyników badań „od kuchni”
                      </a>
                      <p className="blog__posts-list-item-content-text">
                        Dlaczego opracowanie statystyczne wyników badań do prac
                        naukowych warto zlecić profesjonalistom? Opracowanie
                        statystyczne wyników badań
                      </p>
                      <p className="blog__posts-list-item-content-date">
                        31 Sty 22{" "}
                        <span className="blog__posts-list-item-content-date-min">
                          8 min
                        </span>
                      </p>
                    </div>
                    <img src={postImg3} className="blog__posts-list-item-img" />
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </Container>
      </section>
    </>
  )
}
export default Blog
