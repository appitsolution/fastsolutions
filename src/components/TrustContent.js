import React from "react"
import Container from "./Container"
import DescTitle from "./DescTitle"
import Parallax from "./Parallax"
const TrustContent = () => {
  return (
    <section className="trustcontent">
      <Container>
        <Parallax>
          <DescTitle>KORZYŚCI</DescTitle>
          <h1 className="trustcontent__head">
            Dlaczego warto nam powierzyć koordynację badań ankietowych?
          </h1>
          <p className="trustcontent__text">
            Mieliśmy już przyjemność współpracować z kilkoma firmami badawczymi
            i jako podwykonawcy zrealizowaliśmy przeszło kilkadziesiąt badań
            terenowych, dzięki czemu posiadamy odpowiednie doświadczenie w
            usłudze koordynacja badań terenowych prowadzonych w różnych branżach
            i grupach respondentów. Współpracę opieramy na przejrzystych
            zasadach.
          </p>
          <h2 className="trustcontent__head">Zasoby sprzętowe i lokalowe</h2>
          <p className="trustcontent__text">
            Posiadamy również własne studio do badań CATI dedykowane do
            realizacji wywiadów telefonicznych, z możliwością rozszerzenia
            funkcjonalności o dowolną liczbę ankieterów pracujących w sieci
            rozproszonej. Ankieterzy telefoniczni realizują wywiady poprzez nasz
            system VOIP, który umożliwia generowanie bilingów i nagrywanie
            rozmów. Ankiety są realizowane w systemie prezentującym odpowiedzi w
            czasie rzeczywistym. W zakresie prac analitycznych pracujemy w
            środowisku STATISTICA, cenionym oprogramowaniu firmy StatSoft,
            dedykowanym do analiz statystycznych. W Rzeszowie posiadamy dostęp
            do profesjonalnej sali do badań FGI, tzw. studio fokusowe.
            Fokusownia wyposażona jest w lustro weneckie, sprzęt do rejestracji
            dźwięku i obrazu. Ponadto mamy możliwość realizacji badania w sali z
            systemem umożliwiającym streaming online oraz w sali konferencyjnej
            zdolnej pomieścić w komfortowych i profesjonalnych warunkach (m.in.
            klimatyzacja, projektor, rzutnik, flipchart, zaplecze kuchenne) do
            40 osób. Współpracujemy także aktywnie z profesjonalnymi
            fokusowniami na terenie wszystkich województw w Polsce. Zapraszamy
            do współpracy w przypadku potrzeby koordynacji badań terenowych na
            terenie województwa podkarpackiego, świętokrzyskiego, lubelskiego i
            małopolskiego.
          </p>
        </Parallax>
      </Container>
    </section>
  )
}
export default TrustContent
