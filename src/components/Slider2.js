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
      slidesPerView: 4,
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
                src={"https://fastsolutions.pl/wp-content/uploads/2017/03/solo.png"}
                alt="path5576"
              />
              <h2 className="informations__reference-list-item-head">
                PPHU SOLO
              </h2>
              <p className="informations__reference-list-item-text">
                Firma dała się poznać jako solidna i godna zaufania. Warto odnotować również takie cechy jak bardzo dobry kontakt z klientem oraz elastyczność działania. 
              </p>
              <img
                src={"https://fastsolutions.pl/wp-content/uploads/2017/03/solo.png"}
                className="informations__reference-list-item-icon"
              />
            </li>
          </div>
          <div class="swiper-slide">
            <li className="informations__reference-list-item">
              <img
                className="informations__reference-list-item-img"
                src={"https://fastsolutions.pl/wp-content/uploads/2021/04/followup.png"}
                alt="path5576"
              />
              <h2 className="informations__reference-list-item-head">
              Followup Sp. Z o.o.
              </h2>
              <p className="informations__reference-list-item-text">
              Z uwagi na fakt, iż wszystkie powierzone zadania wykonane były z zaangażowaniem i należytą starannością, bez obaw mogę zarekomendować usługi badawcze i doradcze Agencji Fast Solutions innym podmiotom.
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
                src={"https://fastsolutions.pl/wp-content/uploads/2016/01/arriva.jpg"}
                alt="path5576"
              />
              <h2 className="informations__reference-list-item-head">
              Arriva
              </h2>
              <p className="informations__reference-list-item-text">
              Z uwagi na wysoką jakość wykonanego zlecenia z pełnym przekonaniem rekomendujemy usługi Agencji Badawczo-Marketingowej Fast Solutions, jako profesjonalnej i rzetelnej firmy badawczej o zasięgu ogólnopolskim, jednocześnie licząc na równie owocną współpracę w przyszłości.
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
                src={"https://fastsolutions.pl/wp-content/uploads/2017/03/podkarpackie.png"}
                alt="path5576"
              />
              <h2 className="informations__reference-list-item-head">
              Podkarpacki Urząd Wojewódzki
              </h2>
              <p className="informations__reference-list-item-text">
              Podkarpacki Urząd Wojewódzki w Rzeszowie zlecił agencji badawczo-marketingowej Fast Solutions przeprowadzenie badań opinii klientów nt. jakości obsługi i sprawności funkcjonowania Urzędu.
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
                src={"https://fastsolutions.pl/wp-content/uploads/2021/04/TLConsulting.png"}
                alt="path5576"
              />
              <h2 className="informations__reference-list-item-head">
              TL CONSULTING
              </h2>
              <p className="informations__reference-list-item-text">
              Zgodnie z naszymi oczekiwaniami analizie poddano wszelkie dane zgromadzone podczas przebiegu spotkania w każdej z grup fokusowych, w tym m.in. zapis audio i wideo. Rekomendujemy współpracę z Agencją Fast Solutions jako godnym zaufania, sprawdzonym partnerem do realizacji szeroko rozumianych badań marketingowych.
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
                src={"https://fastsolutions.pl/wp-content/uploads/2021/04/logo-partner-pup-1.jpg"}
                alt="path5576"
              />
              <h2 className="informations__reference-list-item-head">
              Powiatowy Urząd Pracy w Rzeszowie
              </h2>
              <p className="informations__reference-list-item-text">
              Polecam agencję, jako solidną i wiarygodną firmę badawczą. Wysoko oceniam wiedzę merytoryczną i sprawność organizacyjną osób odpowiedzialnych za realizację badań dla PUP w Rzeszowie.
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
