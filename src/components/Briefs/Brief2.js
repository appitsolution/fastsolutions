import React from "react"
import Container from "../Container"
const Brief2 = ({ next, back }) => {
  return (
    <section className="brief2">
      <Container>
        <div className="brief2-block1">
          <ul className="brief-list">
            <li className="brief-list-item">
              <p className="brief-list-item-head">CEL BADANIA</p>
            </li>
            <li className="brief-list-item">
              <p className="brief-list-item-toomb">|</p>
            </li>
            <li className="brief-list-item">
              <p className="brief-list-item-text">
                Prosimy dokładnie określić co jest głównym celem badania oraz
                jakich informacji Państwo potrzebują. Zachęcamy do wskazania
                celu głównego oraz celów fakultatywnych badania.
              </p>
            </li>
          </ul>
          <input
            className="brief-input"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing ealit. Enim interdum elit viverra molestie id quam. Enim risus, lacus sed tempus ac diam etiam. Lorem ipsum dolor sit amet, consectetur adipiscing ealit. Enim interdum elit viverra molestie id quam. Enim risus, lacus sed tempus ac diam etiam. "
          />
        </div>
        <div className="brief2-block2">
          <ul className="brief-list">
            <li className="brief-list-item">
              <p className="brief-list-item-head">CEL BIZNESOWY</p>
            </li>
            <li className="brief-list-item">
              <p className="brief-list-item-toomb">|</p>
            </li>
            <li className="brief-list-item">
              <p className="brief-list-item-text">
                Prosimy napisać, czemu ma służyć przeprowadzenie badań. Celem
                może być wdrożenie nowej aplikacji, ulepszenie standardów
                obsługi klienta, itp.
              </p>
            </li>
          </ul>
          <input className="brief-input" placeholder="Twoja odpowiedź..." />
        </div>
        <div className="brief2-button">
          <button className="brief-button-back" onClick={back}>
            Wróć
          </button>
          <button className="button" onClick={next}>
            Dalej
          </button>
        </div>
      </Container>
    </section>
  )
}
export default Brief2
