import React, { useEffect } from "react"
import path5576 from "../images/icon/path5576.svg"
import Rectangle2 from "../images/icon/Rectangle2.svg"
import Swiper, { Navigation, Pagination, Scrollbar } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
const Slider = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      modules: [Navigation, Pagination, Scrollbar],
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        bulletElement: "button",
        clickable: true,
      },
      speed: 500,
      slidesPerView: 2,
      spaceBetween: 32,
    })
  })
  return (
    <div className="aboutcompany__slider">
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <li className="informations__reference-list-item">
              <img
                className="informations__reference-list-item-img"
                src={path5576}
                alt="path5576"
              />
              <h2 className="informations__reference-list-item-head">
                Uniwersytet Rzeszowski
              </h2>
              <p className="informations__reference-list-item-text">
                Jesteśmy w pełni zadowoleni ze współpracy.W podjętych
                działaniach agencja Fast Solutions wykazała się niezwykłą
                starannością, dokładnościąi profesjonalizmem. Doświadczenie
                badawcze firmy pozwala na powierzenie jej złożonych zagadnień
                badawczych.
              </p>
              <img
                src={Rectangle2}
                className="informations__reference-list-item-icon"
              />
            </li>
          </div>
          <div class="swiper-slide">
            <li className="informations__reference-list-item">
              <img
                className="informations__reference-list-item-img"
                src={path5576}
                alt="path5576"
              />
              <h2 className="informations__reference-list-item-head">
                Uniwersytet Rzeszowski
              </h2>
              <p className="informations__reference-list-item-text">
                Jesteśmy w pełni zadowoleni ze współpracy.W podjętych
                działaniach agencja Fast Solutions wykazała się niezwykłą
                starannością, dokładnościąi profesjonalizmem. Doświadczenie
                badawcze firmy pozwala na powierzenie jej złożonych zagadnień
                badawczych.
              </p>
              <img
                src={Rectangle2}
                className="informations__reference-list-item-icon"
              />
            </li>
          </div>
          <div class="swiper-slide">
            <li className="informations__reference-list-item">
              <img
                className="informations__reference-list-item-img"
                src={path5576}
                alt="path5576"
              />
              <h2 className="informations__reference-list-item-head">
                Uniwersytet Rzeszowski
              </h2>
              <p className="informations__reference-list-item-text">
                Jesteśmy w pełni zadowoleni ze współpracy.W podjętych
                działaniach agencja Fast Solutions wykazała się niezwykłą
                starannością, dokładnościąi profesjonalizmem. Doświadczenie
                badawcze firmy pozwala na powierzenie jej złożonych zagadnień
                badawczych.
              </p>
              <img
                src={Rectangle2}
                className="informations__reference-list-item-icon"
              />
            </li>
          </div>
          <div class="swiper-slide">
            <li className="informations__reference-list-item">
              <img
                className="informations__reference-list-item-img"
                src={path5576}
                alt="path5576"
              />
              <h2 className="informations__reference-list-item-head">
                Uniwersytet Rzeszowski
              </h2>
              <p className="informations__reference-list-item-text">
                Jesteśmy w pełni zadowoleni ze współpracy.W podjętych
                działaniach agencja Fast Solutions wykazała się niezwykłą
                starannością, dokładnościąi profesjonalizmem. Doświadczenie
                badawcze firmy pozwala na powierzenie jej złożonych zagadnień
                badawczych.
              </p>
              <img
                src={Rectangle2}
                className="informations__reference-list-item-icon"
              />
            </li>
          </div>
        </div>
        <div class="swiper-pagination"></div>

        <div class="swiper-scrollbar"></div>
      </div>
    </div>
  )
}
export default Slider
