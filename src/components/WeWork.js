import React from "react";
import RectanglTest from '../images/icon/RectanglTest.svg' 
import Container from "./Container";
import DescTitle from "./DescTitle";
const WeWork = () => {
    return(
        <section className="wework">
            <Container>
                <div className="wework__block">
                    <p className="wework__block-text">
                        Nasza firma badawcza oferuje <span className="wework__block-text-span">
                            kompleksowe usługi badawcze dla przedsiębiorstw, sektora nauki oraz instytucji
                        </span>
                        <img src={RectanglTest} className="wework__block-text-img" alt="rectangle"/>
                    </p>
                <div className="wework__block-notification">
                    <DescTitle>GDZIE DZIAŁAMY</DescTitle>
                    <p className="wework__block-notification-text">Koordynatorzy i ankieterzy stale współpracujący z naszą firmą badawczą w terenie realizują badania rynkowe, marketingowe i społeczne w takich miastach jak; Rzeszów, Kraków, Tarnów, Dębica, Krosno, Przemyśl, Stalowa Wola, Tarnobrzeg, Kielce, Zamość, Lublin, Katowice, Częstochowa, Radom, Warszawa, Wrocław, Łódź, Poznań, Bydgoszcz, Warszawa, Białystok, Szczecin, Olsztyn, Gdańsk, Gdynia i wielu innych miastach we wszystkich województwach w kraju.</p>
                    <span className="wework__block-notification-text-span">Zachęcamy gorąco do zapoznania się z naszą ofertą badań, a w razie dodatkowych pytań zapraszamy do kontaktu.</span>
                    <p className="wework__block-notification-desc">Nasi konsultanci i eksperci merytoryczni doradzą Państwu najbardziej trafne rozwiązania badawcze. Proponujemy wyłącznie metody najbardziej adekwatne do Państwa realnych potrzeb i możliwości budżetowych.</p>
                </div>
                </div>
            </Container>
        </section>
    )
}
export default WeWork