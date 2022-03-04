import React, { useEffect } from "react"
import slider from "../images/slider.jpg"
import slider2 from "../images/slider2.jpg"
import Swiper, { Pagination } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
const Slider = () => {
  useEffect(() => {
    new Swiper(".swiper", {
      modules: [Pagination],
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        bulletElement: "button",
        clickable: true,
        // dynamicBullets: true,
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
            <img
              className="aboutcompany__slider-list-item-img"
              src={slider2}
              alt="office"
            />
          </div>
          <div class="swiper-slide">
            <img
              className="aboutcompany__slider-list-item-img"
              src={slider}
              alt="team"
            />
          </div>
          <div class="swiper-slide">
            <img
              className="aboutcompany__slider-list-item-img"
              src={slider2}
              alt="office"
            />
          </div>
          <div class="swiper-slide">
            <img
              className="aboutcompany__slider-list-item-img"
              src={slider}
              alt="team"
            />
          </div>
        </div>
        <div class="swiper-pagination"></div>

        <div class="swiper-scrollbar"></div>
      </div>
    </div>
  )
}
export default Slider
