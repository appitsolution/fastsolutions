import React from "react";
import Container from "./Container";
import DescTitle from './DescTitle';
import Button from "./Button";
import offer from '../images/icon/offer.svg'
import chart from '../images/icon/chart.svg'
import path5576 from '../images/icon/path5576.svg'

const Informations = () => {
    return (
        <>
        <section className="informations">
            <Container>
                <div className="informations__offer">
                <ul className="informations__offer-list">
                    <li className="informations__offer-list-item">
                        <DescTitle>OFERTA</DescTitle>
                <h1 className="informations__offer-head">
                    Szukają Państwo <span className="informations__offer-head-span">
                        skutecznych rozwiązań badawczych?
                    </span>
                </h1>
                <p className="informations__offer-text">
                    Zapraszamy do niezobowiązujących
                    konsultacji z naszymi ekspertami.
                </p>
                <ul className="informations__offer-buttons">
                    <li className="informations__offer-buttons-item">
                        <Button>Wypełnij brief</Button>
                    </li>
                    <li className="informations__offer-buttons-item">
                        <Button>Skontaktuj się</Button>
                    </li>
                </ul>
                    </li>
                    <li className="informations__offer-list-item">
                        <img src={offer} alt="offer" />
                    </li>
                </ul>
                </div>
                <div className="informations__team">
                    <ul className="informations__offer-list">
                    <li className="informations__offer-list-item">
                        <img src={chart} alt="chart" />
                    </li>
                    <li className="informations__offer-list-item">
                        <DescTitle>ZESPÓŁ</DescTitle>
                <h1 className="informations__offer-head">
                    Fast Solutions to<span className="informations__offer-head-span">
                        zdywersyfikowany zespół ambitnych ludzi
                    </span>
                </h1>
                <p className="informations__offer-text" styles="max-width: 500px">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis donec quisque aenean fermentum. Malesuada donec turpis vulputate aliquam amet elit amet. Massa suscipit pulvinar aliquet faucibus. 
                </p>
                    </li>
                </ul>
                </div>
            </Container>
            <div className="informations__reference">
                <Container>
                    <DescTitle>REFERENCJE</DescTitle>
                <h1 className="informations__reference-head">Marki, które nam zaufały</h1>
                </Container>
                <ul className="informations__reference-list">
                    <li className="informations__reference-list-item">
                        <img className="informations__reference-list-item-img" src={path5576} alt="path5576" />
                        <h2 className="informations__reference-list-item-head">
                            Uniwersytet Rzeszowski
                        </h2>
                        <p className="informations__reference-list-item-text">
                            Jesteśmy w pełni zadowoleni ze współpracy.W podjętych działaniach agencja Fast Solutions wykazała się niezwykłą starannością, dokładnościąi profesjonalizmem. Doświadczenie badawcze firmy pozwala na powierzenie jej złożonych zagadnień badawczych.
                        </p>
                    </li>
                    <li className="informations__reference-list-item">
                        <img className="informations__reference-list-item-img" src={path5576} alt="path5576" />
                        <h2 className="informations__reference-list-item-head">
                            Uniwersytet Rzeszowski
                        </h2>
                        <p className="informations__reference-list-item-text">
                            Jesteśmy w pełni zadowoleni ze współpracy.W podjętych działaniach agencja Fast Solutions wykazała się niezwykłą starannością, dokładnościąi profesjonalizmem. Doświadczenie badawcze firmy pozwala na powierzenie jej złożonych zagadnień badawczych.
                        </p>
                    </li>
                    <li className="informations__reference-list-item">
                        <img className="informations__reference-list-item-img" src={path5576} alt="path5576" />
                        <h2 className="informations__reference-list-item-head">
                            Uniwersytet Rzeszowski
                        </h2>
                        <p className="informations__reference-list-item-text">
                            Jesteśmy w pełni zadowoleni ze współpracy.W podjętych działaniach agencja Fast Solutions wykazała się niezwykłą starannością, dokładnościąi profesjonalizmem. Doświadczenie badawcze firmy pozwala na powierzenie jej złożonych zagadnień badawczych.
                        </p>
                    </li>
                    <li className="informations__reference-list-item">
                        <img className="informations__reference-list-item-img" src={path5576} alt="path5576" />
                        <h2 className="informations__reference-list-item-head">
                            Uniwersytet Rzeszowski
                        </h2>
                        <p className="informations__reference-list-item-text">
                            Jesteśmy w pełni zadowoleni ze współpracy.W podjętych działaniach agencja Fast Solutions wykazała się niezwykłą starannością, dokładnościąi profesjonalizmem. Doświadczenie badawcze firmy pozwala na powierzenie jej złożonych zagadnień badawczych.
                        </p>
                    </li>
                </ul>
                </div>
        </section>
        </>
    )
}
export default Informations