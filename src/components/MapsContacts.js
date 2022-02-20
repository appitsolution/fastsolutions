import React from "react"
import DescTitle from "../components/DescTitle"
import Container from "../components/Container"
import facebook2 from "../images/icon/facebook2.svg"
import twiter2 from "../images/icon/twiter2.svg"
import linkedIn2 from "../images/icon/linkedIn2.svg"
import Rectangle2 from "../images/icon/Rectangle2.svg"
const MapsContacts = () => {
  return (
    <>
      <section className="mapscontacts"></section>
      <section className="contactslink">
        <Container>
          <DescTitle>KONTAKT</DescTitle>
          <h1 className="contactslink__head">Pozostań z nami w kontakcie</h1>
          <ul className="contactslink__list">
            <li className="contactslink__list-item">
              <img src={facebook2} className="contactslink__list-item-img" />
            </li>
            <li className="contactslink__list-item">
              <img src={twiter2} className="contactslink__list-item-img" />
            </li>
            <li className="contactslink__list-item">
              <img src={linkedIn2} className="contactslink__list-item-img" />
            </li>
          </ul>
          <ul className="contactslink__notification">
            <li className="contactslink__notification-item">
              <h2 className="contactslink__notification-item-head">
                Zadzwoń do nas
              </h2>
              <p className="contactslink__notification-item-text">
                Tel. (+48) 17 785 22 61
              </p>
              <p className="contactslink__notification-item-text">
                Tel. kom.: (+48) 794 708 666
              </p>
              <h2 className="contactslink__notification-item-head-second">
                Napisz do nas
              </h2>
              <p className="contactslink__notification-item-text-mail">
                kontakt@fastsolutions.pl
              </p>
              <img
                src={Rectangle2}
                className={"contactslink__notification-item-img"}
              />
            </li>
            <li className="contactslink__notification-item">
              <h2 className="contactslink__notification-item-head">
                Dane rejestrowe spółki
              </h2>
              <p className="contactslink__notification-item-text">
                Grupa WW sp. z o.o.
                <br />
                Plac Jana Kilińskiego 2, 35-005 Rzeszów
                <br />
                Sąd Rejonowy dla m. Rzeszowa XII Wydział Gospodarczy KRS
                <br />
                KRS 0000413554, NIP: 813-367-16-25, REGON: 180 821 757
              </p>
              <img
                src={Rectangle2}
                className={"contactslink__notification-item-img"}
              />
            </li>
          </ul>
        </Container>
      </section>
    </>
  )
}
export default MapsContacts
