import { Container, Wpp, Email, Phone, Info, Title } from "./style";
import { useState } from "react";

import wpp from "../../assets/img/wpp.svg";
import send from "../../assets/img/send.svg";
import copy from "../../assets/img/copy.svg";
import phone from "../../assets/img/phone.svg";

const Contato = () => {
  const [copiado, setCopiado] = useState(false);

  const copyMail = () => {
    navigator.clipboard.writeText("cg.castrorodrigues@gmail.com");
    setCopiado(true);
    setTimeout(() => {
      setCopiado(false);
    }, 2000);
  };

  return (
    <Container>
      <Title>
        <h2>📬 Contatos</h2>
        <h1>Vamos Conversar!</h1>
      </Title>
      <Info>
        <Wpp
          href="https://wa.me/5588992472769?text=Olá,%20entro%20em%20contato%20através%20do%20seu%20site."
          target="_blank"
        >
          <img src={wpp} alt="whats app" />
          <p>Vamos Conversar</p>
        </Wpp>
        <Email>
          <img src={send} alt="imagem com uma ceta de envio" />
          <p>E-mail</p>
          <p className="email">cg.castrorodrigues@gmail.com</p>
          <button onClick={copyMail} on>
            <img src={copy} alt="botão para copiar o e-mail" />
            {copiado && <p>Copiado</p>}
          </button>
        </Email>
        <Phone>
          <img src={phone} alt="telefone para contato" />
          <p>(88) 9 92472769</p>
        </Phone>
      </Info>
    </Container>
  );
};

export default Contato;
