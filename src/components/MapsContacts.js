import React, { useState } from "react"
import DescTitle from "../components/DescTitle"
import Container from "../components/Container"
import facebook2 from "../images/icon/facebook2.svg"
import twiter2 from "../images/icon/twiter2.svg"
import linkedIn2 from "../images/icon/linkedIn2.svg"

import Rectangle2 from "../images/icon/Rectangle2.svg"
import GoogleMapReact from "google-map-react"
import iconMap from "../images/icon/map-icon.svg"
import logoMap from "../images/icon/logo-map.svg"
const MapsContacts = () => {
  const AnyReactComponent = () => (
    <div className="map__point">
      <div className="map__point-logo">
        <img className="map__point-logo-img" src={logoMap} />
        <img className="map__point-logo-icon" src={iconMap} />
      </div>
      <div className="map__point-text">
        <h2 className="map__point-text-head">Centrala w Rzeszowie</h2>
        <p className="map__point-text-description">
          ABM Fast Solutions ul. Witosa 9B, I piętro 35-115 Rzeszów
        </p>
      </div>
    </div>
  )
  const [center] = useState({
    lat: 50.033097,
    lng: 21.975638,
  })
  const [zoom] = useState(16)
  return (
    <>
      <section className="mapscontacts">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyCiO0C-OZCSjjN0HlorvWkBpZXXZfc2Kr4",
            libraries: ["places"],
          }}
          defaultCenter={center}
          defaultZoom={zoom}
          yesIWantToUseGoogleMapApiInternals
          options={{
            styles: [
              {
                elementType: "geometry",
                stylers: [
                  {
                    color: "#f5f5f5",
                  },
                ],
              },
              {
                elementType: "labels.icon",
                stylers: [
                  {
                    visibility: "off",
                  },
                ],
              },
              {
                elementType: "labels.text.fill",
                stylers: [
                  {
                    color: "#616161",
                  },
                ],
              },
              {
                elementType: "labels.text.stroke",
                stylers: [
                  {
                    color: "#f5f5f5",
                  },
                ],
              },
              {
                featureType: "administrative.country",
                elementType: "geometry.fill",
                stylers: [
                  {
                    visibility: "off",
                  },
                ],
              },
              {
                featureType: "administrative.land_parcel",
                elementType: "labels.text.fill",
                stylers: [
                  {
                    color: "#bdbdbd",
                  },
                ],
              },
              {
                featureType: "administrative.locality",
                elementType: "labels",
                stylers: [
                  {
                    visibility: "on",
                  },
                ],
              },
              {
                featureType: "administrative.neighborhood",
                elementType: "labels",
                stylers: [
                  {
                    visibility: "on",
                  },
                ],
              },
              {
                featureType: "landscape",
                elementType: "labels",
                stylers: [
                  {
                    visibility: "on",
                  },
                ],
              },
              {
                featureType: "landscape.man_made",
                elementType: "labels.icon",
                stylers: [
                  {
                    visibility: "on",
                  },
                ],
              },
              {
                featureType: "landscape.natural",
                elementType: "labels",
                stylers: [
                  {
                    visibility: "on",
                  },
                ],
              },
              {
                featureType: "landscape.natural.landcover",
                elementType: "labels",
                stylers: [
                  {
                    visibility: "on",
                  },
                ],
              },
              {
                featureType: "landscape.natural.terrain",
                elementType: "labels",
                stylers: [
                  {
                    visibility: "on",
                  },
                ],
              },
              {
                featureType: "poi",
                elementType: "geometry",
                stylers: [
                  {
                    color: "#eeeeee",
                  },
                ],
              },
              {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [
                  {
                    color: "#757575",
                  },
                ],
              },
              {
                featureType: "poi.attraction",
                elementType: "labels",
                stylers: [
                  {
                    visibility: "on",
                  },
                ],
              },
              {
                featureType: "poi.business",
                elementType: "labels",
                stylers: [
                  {
                    visibility: "on",
                  },
                ],
              },
              {
                featureType: "poi.government",
                elementType: "labels",
                stylers: [
                  {
                    visibility: "on",
                  },
                ],
              },
              {
                featureType: "poi.medical",
                elementType: "labels",
                stylers: [
                  {
                    visibility: "on",
                  },
                ],
              },
              {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [
                  {
                    color: "#e5e5e5",
                  },
                ],
              },
              {
                featureType: "poi.park",
                elementType: "labels",
                stylers: [
                  {
                    visibility: "on",
                  },
                ],
              },
              {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [
                  {
                    color: "#9e9e9e",
                  },
                ],
              },
              {
                featureType: "poi.place_of_worship",
                elementType: "labels",
                stylers: [
                  {
                    visibility: "on",
                  },
                ],
              },
              {
                featureType: "poi.school",
                elementType: "labels",
                stylers: [
                  {
                    visibility: "on",
                  },
                ],
              },
              {
                featureType: "poi.sports_complex",
                elementType: "labels",
                stylers: [
                  {
                    visibility: "on",
                  },
                ],
              },
              {
                featureType: "road",
                elementType: "geometry",
                stylers: [
                  {
                    color: "#ffffff",
                  },
                ],
              },
              {
                featureType: "road.arterial",
                elementType: "labels",
                stylers: [
                  {
                    visibility: "on",
                  },
                ],
              },
              {
                featureType: "road.arterial",
                elementType: "labels.text.fill",
                stylers: [
                  {
                    color: "#757575",
                  },
                ],
              },
              {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [
                  {
                    color: "#dadada",
                  },
                ],
              },
              {
                featureType: "road.highway",
                elementType: "labels",
                stylers: [
                  {
                    visibility: "on",
                  },
                ],
              },
              {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [
                  {
                    color: "#616161",
                  },
                ],
              },
              {
                featureType: "road.highway.controlled_access",
                elementType: "labels",
                stylers: [
                  {
                    visibility: "on",
                  },
                ],
              },
              {
                featureType: "road.local",
                elementType: "labels",
                stylers: [
                  {
                    visibility: "on",
                  },
                ],
              },
              {
                featureType: "road.local",
                elementType: "labels.text.fill",
                stylers: [
                  {
                    color: "#9e9e9e",
                  },
                ],
              },
              {
                featureType: "transit.line",
                elementType: "geometry",
                stylers: [
                  {
                    color: "#e5e5e5",
                  },
                ],
              },
              {
                featureType: "transit.line",
                elementType: "labels",
                stylers: [
                  {
                    visibility: "on",
                  },
                ],
              },
              {
                featureType: "transit.station",
                elementType: "geometry",
                stylers: [
                  {
                    color: "#eeeeee",
                  },
                ],
              },
              {
                featureType: "transit.station.airport",
                elementType: "labels",
                stylers: [
                  {
                    visibility: "on",
                  },
                ],
              },
              {
                featureType: "transit.station.bus",
                elementType: "labels",
                stylers: [
                  {
                    visibility: "on",
                  },
                ],
              },
              {
                featureType: "transit.station.rail",
                elementType: "labels",
                stylers: [
                  {
                    visibility: "on",
                  },
                ],
              },
              {
                featureType: "water",
                elementType: "geometry",
                stylers: [
                  {
                    color: "#c9c9c9",
                  },
                ],
              },
              {
                featureType: "water",
                elementType: "labels",
                stylers: [
                  {
                    visibility: "on",
                  },
                ],
              },
              {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [
                  {
                    color: "#9e9e9e",
                  },
                ],
              },
            ],
          }}
        >
          <AnyReactComponent lat={50.033097} lng={21.975638} />
        </GoogleMapReact>
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
              <a
                href="tel:+48177852261"
                className="contactslink__notification-item-text"
              >
                Tel. (+48) 17 785 22 61
              </a>
              <a
                href="tel:+48794708666"
                className="contactslink__notification-item-text"
              >
                Tel. kom.: (+48) 794 708 666
              </a>
              <h2 className="contactslink__notification-item-head-second">
                Napisz do nas
              </h2>
              <a
                href="mail:kontakt@fastsolutions.pl"
                className="contactslink__notification-item-text-mail"
              >
                kontakt@fastsolutions.pl
              </a>
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
