import React, { useEffect } from "react"
import slider1 from "../images/slider1.jpg"
import slider2 from "../images/slider2.jpg"
import slider3 from "../images/slider3.jpg"
import slider4 from "../images/slider4.jpg"
import slider5 from "../images/slider5.jpg"
import slider6 from "../images/slider6.jpg"
import slider7 from "../images/slider7.jpg"
import slider8 from "../images/slider8.jpg"
import Swiper, { Pagination, Navigation } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import ParallaxY from "./ParallaxY"
const Slider = () => {
  useEffect(() => {
    const swiper2 = new Swiper(".swiper-logos", {
      modules: [Pagination, Navigation],
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
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 10
        },
      }
    })
  }, [])
  return (
    <div>
      <div class="swiper-logos">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img
              className="aboutcompany__slider-list-item-img"
              src={slider1}
              alt="office"
            />
          </div>
          <div class="swiper-slide">
            <img
              className="aboutcompany__slider-list-item-img"
              src={slider2}
              alt="team"
            />
          </div>
          <div class="swiper-slide">
            <img
              className="aboutcompany__slider-list-item-img"
              src={slider3}
              alt="office"
            />
          </div>
          <div class="swiper-slide">
            <img
              className="aboutcompany__slider-list-item-img"
              src={slider4}
              alt="team"
            />
          </div>
          <div class="swiper-slide">
            <img
              className="aboutcompany__slider-list-item-img"
              src={slider5}
              alt="team"
            />
          </div>
          <div class="swiper-slide">
            <img
              className="aboutcompany__slider-list-item-img"
              src={slider6}
              alt="team"
            />
          </div>
          <div class="swiper-slide">
            <img
              className="aboutcompany__slider-list-item-img"
              src={slider7}
              alt="team"
            />
          </div>
          <div class="swiper-slide">
            <img
              className="aboutcompany__slider-list-item-img"
              src={slider8}
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
