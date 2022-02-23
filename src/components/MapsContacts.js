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
      <section className="mapscontacts">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5125.608489078993!2d21.9744056!3d50.0337638!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4cf4948b69992a6!2sFast%20Solutions!5e0!3m2!1spl!2sua!4v1645641261613!5m2!1spl!2sua"
          width="600%"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </section>
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
