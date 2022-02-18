import React from "react";
import Container from "./Container";
import DescTitle from "./DescTitle";
import Notification from "./Notification";
const ClientContent = ({title,text1,notific,text2}) => {
    return(
        <section className="clientcontent">
            <Container>
                <DescTitle>{title}</DescTitle>
                <p className="clientcontent-text">
                    {text1}
                </p>
                <Notification position={"left-top"}>
                    {notific}
                </Notification>
                <p className="clientcontent-description">
                    {text2}
                </p>
            </Container>
        </section>
    )
}
export default ClientContent