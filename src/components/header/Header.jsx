import { useState } from "react";
import Logo from "../../assets/img/logo.svg";
import MenuImg from "../../assets/img/menu.svg";
import { Container, Navigate, Menu, MenuDrop } from "./style";
import { Link } from "react-router-dom";

const Header = () => {
  const [dropMenu, setDropMenu] = useState(false);

  const handleDropMenu = () => {
    setDropMenu(!dropMenu);
  };

  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <Navigate>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/portfolio">Portfólio</Link>
        <Link to="/skills">Skills</Link>
        {/* <Link to="/carreira">Carreira</Link> */}
        <Link to="/contato">Contato</Link>
      </Navigate>
      {!dropMenu && (
        <Menu onClick={handleDropMenu}>
          <img src={MenuImg} alt="menu" />
        </Menu>
      )}
      {dropMenu && (
        <MenuDrop>
          <Menu onClick={handleDropMenu}>
            <img src={MenuImg} alt="menu" />
          </Menu>

          <Link onClick={handleDropMenu} to="/">
            Home
          </Link>
          <Link onClick={handleDropMenu} to="/sobre">
            Sobre
          </Link>
          <Link onClick={handleDropMenu} to="/portfolio">
            Portfólio
          </Link>
          <Link onClick={handleDropMenu} to="/skills">
            Skills
          </Link>
          {/* <Link to="/carreira">Carreira</Link> */}
          <Link onClick={handleDropMenu} to="/contato">
            Contato
          </Link>
        </MenuDrop>
      )}
    </Container>
  );
};

export default Header;
