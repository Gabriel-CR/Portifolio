import { Tecnology, TecnologyContainer, Container, Links } from "./styles";
import embebed from "../../assets/embebed.svg";
import ghimg from "../../assets/github.svg";

const Card = ({ title, description, tecnologies, img, code }) => {
  return (
    <Container>
      <h3>{title}</h3>
      <p>{description}</p>
      <TecnologyContainer>
        {tecnologies.map((tecnology, key) => (
          <Tecnology key={key}>
            <p>{tecnology}</p>
          </Tecnology>
        ))}
      </TecnologyContainer>
      <img src={img} alt={title} />
      {code.map(({ deploy, github }, key) => (
        <Links key={key}>
          <a href={github} target="_blank">
            <img src={ghimg} alt="github link" />
            <p>Github</p>
          </a>
          <a href={deploy} target="_blank">
            <img src={embebed} alt="deploy link" />
            <p>Deploy</p>
          </a>
        </Links>
      ))}
    </Container>
  );
};

export default Card;
