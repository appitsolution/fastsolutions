import React from "react"
import slider from "../images/slider.jpg"
import slider2 from "../images/slider2.jpg"
import Swiper, { Navigation, Pagination, Scrollbar } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
const Slider = () => {
  const swiper = new Swiper(".swiper", {
    modules: [Navigation, Pagination, Scrollbar],
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    speed: 500,
    slidesPerView: 2,
    spaceBetween: 32,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
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

        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <div class="swiper-scrollbar"></div>
      </div>
    </div>
  )
}
export default Slider
