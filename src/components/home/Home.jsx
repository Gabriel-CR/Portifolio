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
          <img src={linkedin} alt="linkedin contato" />
          <img src={github} alt="github contato" />
          <img src={email} alt="email contato" />
        </div>
      </Info>
      <Image>
        <img src={avatar} alt="avatar imagem" />
      </Image>
      <Contato>
        <img src={wpp} alt="whats app" />
        <p>Vamos Conversar</p>
      </Contato>
    </Container>
  );
};

export default Home;
