import React from "react"
import Container from "./Container"
import DescTitle from "./DescTitle"
import Parallax from "./Parallax"
const SocialServices = () => {
  return (
    <section className="socialservices">
      <Container>
        <Parallax position="left">
          <DescTitle> ZAKRES USŁUG </DescTitle>
          <h1 className="socialservices__head">
            Oferujemy możliwość realizacji badań społecznych następującego
            rodzaju
          </h1>
        </Parallax>
        <Parallax position="right">
          <ul className="socialservices__list">
            <li className="socialservices__list-item">
              <p className="socialservices__list-item-number">
                01. Ewaluacja i monitoring projektów
              </p>
              <h2 className="socialservices__list-item-head">
                Dlaczego warto powierzyć nam do realizacji badanie społeczne ?
              </h2>
              <p className="socialservices__list-item-text">
                Razem z ogólnopolskimi firmami badawczymi i doradczymi
                współrealizowaliśmy projekty badawcze dla wielu instytucji
                państwowych i samorządowych, w tym zarówno szczebla
                wojewódzkiego, jak i ministerialnego.Jako podwykonawcy
                uczestniczyliśmy w blisko 30 projektach badawczych dotyczących
                tematyki społecznej.Ponadto, jako główni wykonawcy,
                realizowaliśmy kilka badań dla Klientów końcowych.
              </p>
            </li>
            <li className="socialservices__list-item">
              <p className="socialservices__list-item-number">
                02. Badania opinii publicznej
              </p>
              <h2 className="socialservices__list-item-head">
                Jakie metody i techniki badawcze stosujemy w zakresie badań
                społecznych?
              </h2>
              <p className="socialservices__list-item-text">
                Do badań stosujemy szeroki zakres ilościowych i jakościowych
                metod badawczych, które idealnie sprawdzają się przy badaniach
                społecznych. Stosujemy zarówno ankiety papierowe (PAPI),
                wspomagane komputerowo (CAWI) i telefoniczne (CATI), jak również
                indywidualne wywiady pogłębione (IDI) oraz wywiady grupowe
                (FGI).
              </p>
            </li>
          </ul>
        </Parallax>
      </Container>
    </section>
  )
}
export default SocialServices
