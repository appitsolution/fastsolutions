import React from "react"
import Container from "./Container"
import DescTitle from "./DescTitle"
import Slider from "../components/Slider"
import Parallax from "./Parallax"
const ContentCasestudy = () => {
  return (
    <section className="contentcasestudy">
      <Container>
        <Parallax position="right">
          <h1 className="contentcasestudy__head">
            Hurtowy dostawca wyrobów medycznych, środków opatrunkowych, sprzętu
            rehabilitacyjnego i medycznego. Jeden z największych dystrybutorów
            na rynku farmaceutycznym w Polsce.
          </h1>
          <DescTitle>CEL</DescTitle>
          <p className="contentcasestudy__text">
            Opracowanie rekomendacji dla optymalizacji strategii marketingowej w
            zakresie pozycji konkurencyjnej na lokalnym rynku medycznym
          </p>
          <DescTitle>REALIZACJA</DescTitle>
          <p className="contentcasestudy__text">
            Kampania doradczo-marketingowa była skierowana do dwóch zasadniczych
            grup docelowych – aptek i sklepów medycznych działających na
            lokalnym rynku. W ramach projektu przeprowadziliśmy diagnozę poziomu
            satysfakcji i lojalności aktualnych usługobiorców firmy w toku
            tradycyjnych wywiadów kwestionariuszowych (PAPI) oraz ankiet
            telefonicznych (CATI). Kwestionariusz badania koncentrował się na
            poznaniu opinii respondentów na temat jakości świadczonych usług
            oraz powodzenia i możliwości dalszej współpracy. Biorąc pod uwagę,
            iż klientowi zależało także na rozpoznaniu, jak oceniana jest firma
            w zakresie potencjału konkurencyjności – w narzędziu badawczym
            zawarliśmy dodatkowe pytania odnośnie sposobu postrzegania marki na
            tle marek konkurencyjnych.
          </p>
          <DescTitle width={"157"}>Korzyść dla klienta</DescTitle>
          <ul className="contentcasestudy__list">
            <li className="contentcasestudy__list-item">
              rozpoznanie potrzeb i oczekiwań usługobiorców, co doprowadziło do
              optymalizacji zasad standardu obsługi w firmie,
            </li>
            <li className="contentcasestudy__list-item">
              usprawnienie procesu dystrybucji,
            </li>
            <li className="contentcasestudy__list-item">
              uzyskanie informacji na temat lokalnego rynku medycznego,
            </li>
            <li className="contentcasestudy__list-item">
              studium wizerunku firmy na tle konkurencji.
            </li>
          </ul>
        </Parallax>
      </Container>
      <Parallax position="left">
        <Slider />
      </Parallax>
    </section>
  )
}
export default ContentCasestudy
