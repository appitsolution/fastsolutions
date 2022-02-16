import React from "react";
import Container from "./Container";
import DescTitle from "./DescTitle";
import RectanglTest from '../images/icon/RectanglTest.svg'
const WhyNot = () => {
    return(
        <section className="whynot">
            <Container>
                <div className="whynot__block">
                    <div className="whynot__block-content">
                        <DescTitle>DLACZEGO MY?</DescTitle>
                        <p className="whynot__block-content-text">
                            Wiemy, że sukcesy nie są dziełem przypadku i dlatego nasza firma badawcza w nawet najprostsze z powierzonych projektów angażuje się z całą energią. Nie zapominamyo dążeniu do ciągłego rozwoju i szkoleniach naszych wszystkich współpracowników:
                        </p>
                        <ul className="whynot__block-content-list">
                            <li className="whynot__block-content-list-item">
                                pracowników centrali naszej firmy badawczej
                            </li>
                            <li className="whynot__block-content-list-item">
                                koordynatorów projektów,
                            </li>
                            <li className="whynot__block-content-list-item">
                                analityków  i statystyków,
                            </li>
                            <li className="whynot__block-content-list-item">
                                audytorów badań tajemniczych klientów,
                            </li>
                            <li className="whynot__block-content-list-item">
                                ankieterów terenowych,
                            </li>
                            <li className="whynot__block-content-list-item">
                                ankieterów telefonicznych.
                            </li>
                        </ul>
                    </div>
                    <div className="whynot__block-notification">
                        <p className="whynot__block-notification-text">
                            Przewagą naszej agencji badawczej <span className="whynot__block-notification-text-span">
                                jest kompleksowość usług i wieloletnie doświadczenie realizacyjne
                            </span>
                            <img src={RectanglTest} className="whynot__block-notification-text-img" alt="Rectangl"/>
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    )
}
export default WhyNot