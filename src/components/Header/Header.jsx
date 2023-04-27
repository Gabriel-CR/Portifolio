import React from "react";
import Logo from "../../assets/img/logo.svg";
import { Container, Navigate, Image } from "./style";

const Header = () => {
  return (
    <Container>
      <Image src={Logo} alt="logo" />
      <Navigate>
        <p>Home</p>
        <p>Sobre mim</p>
        <p>Portifólio</p>
        <p>Skills</p>
        <p>Carreira</p>
        <p>Recomendações</p>
        <p>Contato</p>
      </Navigate>
    </Container>
  );
};

export default Header;
