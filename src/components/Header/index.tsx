import React from "react";
import { Container, LogoContainer, TitleContainer } from "./styles";

const Header = () => {
    return (
        <Container>
            <LogoContainer>
                <img src="https://dog.ceo/img/dog-api-logo.svg" alt="Dog App" />
            </LogoContainer>
            <TitleContainer>
                <h1>DogFinder</h1>
            </TitleContainer>
        </Container>
    )
};

export default Header;