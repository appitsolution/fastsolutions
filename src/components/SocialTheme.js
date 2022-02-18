import React from "react";
import Container from "./Container";
import DescTitle from "./DescTitle";
const SocialTheme = ({title,widthTitle,head,text}) => {
    return(
        <section className="socialtheme">
            <Container>
                <DescTitle width={widthTitle}>{title}</DescTitle>
                <h1 className="socialtheme__head">
                    {head}
                </h1>
                <p className="socialtheme__text">
                    {text}
                </p>
            </Container>
        </section>
    )
}
export default SocialTheme