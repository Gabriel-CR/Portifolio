import { Link } from "react-router-dom";
import { Container } from "./style";

const NotFound = () => {
  return (
    <Container>
      <div>
        <p>⚠️</p>
        <h1>Página não encontrada</h1>
        <p>
          Está página não está disponível em nosso site, volte para a página
          home clicando no botão abaixo
        </p>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    </Container>
  );
};

export default NotFound;
