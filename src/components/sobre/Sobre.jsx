import { Container, Abount } from "./style";
import me from "../../assets/img/me.svg";
import { Suspense } from "react";

const Sobre = () => {
  return (
    <Container>
      <Suspense fallback={<div>Carregando...</div>}>
        <img src={me} alt="foto" />
      </Suspense>
      <div>
        <h2>👋 Saudações!</h2>
        <h1>Carlos Gabriel de Castro Rodrigues</h1>
        <Abount>
          <p>
            👋 Olá, me chamo Gabriel, tenho 20 anos, sou apaixonado por
            tecnologia e gosto de impactar o mundo através dela.
          </p>
          <p>
            👨‍💻 Comecei a estudar programação em 2018, quando me deparei com um
            tutorial de Python, e desde então venho dando continuidade no meu
            aprendizado em outras linguagens, como C/C++, JavaScript, Java e
            Python, além de bibliotecas como ReactJS e Vue.Js. Também tenho
            experiência com PostgreSQL e otimização de banco de dados.
          </p>
          <p>
            🎓 Sou estudante do 5º período de Ciência da Computação na
            Universidade Federal do Ceará.
          </p>
          <p>💡Tenho interesse em desenvolvimento Front-end e Back-end.</p>
          <p>
            🚀 Estou em busca da minha primeira oportunidade como desenvolvedor.
            Gosto de aprender e sou movido a desafios.
          </p>
        </Abount>
      </div>
    </Container>
  );
};

export default Sobre;
