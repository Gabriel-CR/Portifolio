import { Container } from "./style";
import me from "../../assets/img/me.svg";

const Sobre = () => {
  return (
    // <div style={{ border: "1px solid red" }}>
    <Container>
      <img src={me} alt="foto" />
      <div>
        <h2>👋 Saudações!</h2>
        <h1>Carlos Gabriel de Castro Rodrigues</h1>
        <p>
          👋 Olá, me chamo Gabriel, tenho 20 anos, sou apaixonado por tecnologia
          e gosto de impactar o mundo através dela.
        </p>
        <div>
          <p>
            👨‍💻 Comecei a estudar programação em 2018, quando me deparei com um
            tutorial de Python, e desde então venho dando continuidade no meu
            aprendizado em outras linguagens, como C/C++, JavaScript e Java,
            além de bibliotecas como e ferramentas como ReactJS e PostgreSQL.
          </p>
          <p>
            🎓 Sou estudante do 5º período de Ciência da Computação na
            Universidade Federal do Ceará.
          </p>
          <p>💡Tenho interesse em desenvolvimento Back-end.</p>
        </div>
        <p>
          🚀 Estou em busca da minha primeira oportunidade como desenvolvedor.
          Gosto de aprender e sou movido a desafios.
        </p>
      </div>
    </Container>
    // </div>
  );
};

export default Sobre;
