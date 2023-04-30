import React from "react";
import Logo from "../../assets/img/logo.svg";
import { Container, Navigate, Image } from "./style";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Link to="/">
        <Image src={Logo} alt="logo" />
      </Link>
      <Navigate>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/portifolio">Portifólio</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/carreira">Carreira</Link>
        <Link to="/contato">Contato</Link>
      </Navigate>
    </Container>
  );
};

export default Header;