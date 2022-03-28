import React from "react"
import DescTitle from "./DescTitle"
import imgProcess from "../images/icon/process.svg"
import Container from "./Container"
import Notification from "./Notification"
import Parallax from "./Parallax"

const WorkProcess = () => {
  return (
    <section className="workprocess">
      <Container>
        <DescTitle>NASZ PROCES</DescTitle>
        <div className="workprocess__block">
          <div className="workprocess__block-content">
            <p className="workprocess__block-content-text">
              ABM Fast Solutions z siedzibą w Rzeszowie już od 2011 roku
              świadczy usługi w zakresie koordynacji badań oraz ich kompleksowej
              realizacji. Fieldwork prowadzimy zarówno w zakresie badań
              rynkowych i społecznych. Od 2014 roku obsługujemy realizację badań
              ogólnopolskich. Zasięg naszej siatki ankieterskiej do celów
              ankietyzacji obejmuje zarówno Rzeszów, jak i całe województwo
              podkarpackie, a także wybrane miasta i powiaty na terenie całej
              Polski. Dokładamy starań, aby zapewnić najwyższe standardy
              jakościowe pracy terenowej. Wszyscy współpracujący z nami
              ankieterzy i audytorzy przechodzą dedykowane szkolenia
              merytoryczne i realizacyjne dotyczące realizowanego projektu. Nasz
              stały zespół to także doświadczeni moderatorzy badań fokusowych i
              paneli eksperckich. Profesjonalnie realizujemy badania jakościowe
              na terenie dowolnego miasta Polski południowo- wschodniej. Przy
              ogólnopolskich projektach współpracujemy ze sprawdzonymi
              moderatorami.
            </p>
          </div>
          <div className="workprocess__block-images">
            {/* <img src={imgProcess}  /> */}
            <div className="workprocess__block-text">
              <Parallax position="right">
                <p>Profesjonalne koordynowanie projektów</p>
              </Parallax>
              <Parallax position="left">
                <p>
                  Najwyższa jakość zebranych <br></br> danych
                </p>
              </Parallax>
              <Parallax position="right">
                <p>Doświadczony partner biznesowy</p>
              </Parallax>
              <Parallax position="left">
                <p>
                  Bieżący <br></br> raport postepu realizacyjnego prac
                </p>
              </Parallax>
            </div>
            <svg
              className="workprocess__block-images-img"
              width="569"
              height="530"
              viewBox="0 0 569 530"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.5">
                <path
                  d="M264.001 24L309.715 58.2857L264.001 92.5714L264.001 24Z"
                  fill="#DBD8E9"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M176.53 52.8275C204.262 41.3408 233.985 35.4286 264.001 35.4286L264.001 81.1429C239.988 81.1429 216.21 85.8726 194.025 95.062C171.839 104.251 151.681 117.721 134.701 134.7C117.722 151.68 104.252 171.838 95.063 194.024C87.7249 211.739 83.2305 230.471 81.7175 249.527L58.2868 218.286L35.9891 248.016C37.7098 223.47 43.3855 199.327 52.8285 176.529C64.3153 148.798 81.1518 123.6 102.377 102.376C123.601 81.1508 148.799 64.3143 176.53 52.8275Z"
                  fill="#DBD8E9"
                />
              </g>
              <g opacity="0.5">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M52.8267 351.47C41.3399 323.739 35.4277 294.016 35.4277 264L81.142 264C81.142 288.013 85.8717 311.791 95.0612 333.976C104.251 356.162 117.72 376.32 134.7 393.3C151.679 410.279 171.837 423.749 194.023 432.938C211.739 440.276 230.47 444.77 249.526 446.283L218.285 469.714L248.015 492.012C223.469 490.291 199.326 484.616 176.529 475.172C148.797 463.686 123.6 446.849 102.375 425.624C81.1499 404.4 64.3135 379.202 52.8267 351.47Z"
                  fill="#B7B1D3"
                />
                <path
                  d="M24 264L58.2857 218.286L92.5714 264H24Z"
                  fill="#B7B1D3"
                />
              </g>
              <g opacity="0.5">
                <path
                  d="M263.999 492.571C294.015 492.571 323.738 486.659 351.47 475.172C379.201 463.686 404.399 446.849 425.623 425.624C446.848 404.4 463.685 379.202 475.171 351.47C486.658 323.739 492.57 294.016 492.57 264L446.856 264C446.856 288.013 442.126 311.791 432.937 333.976C423.748 356.162 410.278 376.32 393.299 393.3C376.319 410.279 356.161 423.749 333.975 432.938C311.79 442.127 288.012 446.857 263.999 446.857L263.999 492.571Z"
                  fill="#948ABC"
                />
                <path
                  d="M263.999 492.571C294.015 492.571 323.738 486.659 351.47 475.172C379.201 463.686 404.399 446.849 425.623 425.624C446.848 404.4 463.685 379.202 475.171 351.47C486.658 323.739 492.57 294.016 492.57 264L446.856 264C446.856 288.013 442.126 311.791 432.937 333.976C423.748 356.162 410.278 376.32 393.299 393.3C376.319 410.279 356.161 423.749 333.975 432.938C311.79 442.127 288.012 446.857 263.999 446.857L263.999 492.571Z"
                  stroke="white"
                />
                <path
                  d="M263.999 504L218.285 469.714L263.999 435.429L263.999 504Z"
                  fill="#948ABC"
                />
              </g>
              <g filter="url(#filter0_dddddd_209_9540)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M474.7 176.541C486.186 204.273 492.099 233.995 492.099 264.012L446.384 264.012C446.384 239.999 441.655 216.221 432.465 194.035C423.276 171.85 409.807 151.692 392.827 134.712C375.847 117.732 355.689 104.263 333.504 95.0739C315.788 87.7357 297.056 83.2414 278 81.7283L309.241 58.2975L279.511 36C304.057 37.7207 328.2 43.3963 350.998 52.8394C378.729 64.3262 403.927 81.1626 425.152 102.387C446.376 123.612 463.213 148.81 474.7 176.541Z"
                  fill="#7063A6"
                />
                <path
                  d="M503.526 264.012L469.241 309.726L434.955 264.012L503.526 264.012Z"
                  fill="#7063A6"
                />
              </g>

              <defs>
                <filter
                  id="filter0_dddddd_209_9540"
                  x="213"
                  y="8.99994"
                  width="355.526"
                  height="403.726"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="0.703704" />
                  <feGaussianBlur stdDeviation="1.27894" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.298039 0 0 0 0 0.235294 0 0 0 0 0.564706 0 0 0 0.0914815 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_209_9540"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="3.0963" />
                  <feGaussianBlur stdDeviation="2.64815" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.298039 0 0 0 0 0.235294 0 0 0 0 0.564706 0 0 0 0.149185 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_dropShadow_209_9540"
                    result="effect2_dropShadow_209_9540"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="7.6" />
                  <feGaussianBlur stdDeviation="5.28125" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.298039 0 0 0 0 0.235294 0 0 0 0 0.564706 0 0 0 0.19 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect2_dropShadow_209_9540"
                    result="effect3_dropShadow_209_9540"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="14.637" />
                  <feGaussianBlur stdDeviation="10.3519" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.298039 0 0 0 0 0.235294 0 0 0 0 0.564706 0 0 0 0.230815 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect3_dropShadow_209_9540"
                    result="effect4_dropShadow_209_9540"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="24.6296" />
                  <feGaussianBlur stdDeviation="19.0336" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.298039 0 0 0 0 0.235294 0 0 0 0 0.564706 0 0 0 0.288519 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect4_dropShadow_209_9540"
                    result="effect5_dropShadow_209_9540"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="38" />
                  <feGaussianBlur stdDeviation="32.5" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.298039 0 0 0 0 0.235294 0 0 0 0 0.564706 0 0 0 0.38 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect5_dropShadow_209_9540"
                    result="effect6_dropShadow_209_9540"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect6_dropShadow_209_9540"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <Parallax position="right">
          <Notification position={"right-top"}>
            Przyjmujemy zlecenia koordynacji i realizacji badań marketingowych i
            społecznych od agencji badawczych, ośrodków badania opinii
            społecznej, instytucji publicznych, a także organizacji non-profit,
            w tym fundacji i stowarzyszeń.
          </Notification>
        </Parallax>
      </Container>
    </section>
  )
}
export default WorkProcess
