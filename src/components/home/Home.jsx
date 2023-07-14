import { Container, Image, Info, Contato } from "./style";

import linkedin from "../../assets//img/linkedin.svg";
import github from "../../assets/img/github.svg";
import email from "../../assets/img/email.svg";
import avatar from "../../assets/img/avatar.svg";
import wpp from "../../assets/img/wpp.svg";

const Home = () => {
  return (
    <Container>
      <Info>
        <h2>👋 Saudações!</h2>
        <h1>Gabriel Castro</h1>
        <h3>Desenvolvedor Junior</h3>
        <div>
          <a
            href="https://www.linkedin.com/in/gabriel-castro-657b87208/"
            target="_blank"
          >
            <img src={linkedin} alt="linkedin contato" />
          </a>
          <a href="https://github.com/Gabriel-CR" target="_blank">
            <img src={github} alt="github contato" />
          </a>
          <a
            href="mailto:cg.castrorodrigues@gmail.com?subject=teste%20email"
            target="_blank"
          >
            <img src={email} alt="email contato" />
          </a>
        </div>
      </Info>
      <Image>
        <img src={avatar} alt="avatar imagem" />
      </Image>
      <Contato
        href="https://wa.me/5588992472769?text=Olá,%20entro%20em%20contato%20através%20do%20seu%20site."
        target="_blank"
      >
        <img src={wpp} alt="whats app" />
        <p>Vamos Conversar</p>
      </Contato>
    </Container>
  );
};

export default Home;
