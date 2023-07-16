import { Title, Projects } from "./styles";
import Card from "./Card";

import desafio_transportadora from "../../assets/img_projects/desafio_transportadora.png";
import ia_utilizando_buscas from "../../assets/img_projects/ia_utilizando_buscas.png";
import controle_financeiro from "../../assets/img_projects/controle_financeiro.png";
import login_form from "../../assets/img_projects/login_form.png";
import progresso_formulario from "../../assets/img_projects/progresso_formulario.png";

const projetos = [
  {
    title: "Controle Financeiro",
    description:
      "Site para controle financeiro pessoal. Possui uma interface simples e intuitiva, separada por datas e categorias.",
    tecnologies: ["ReactJS", "TypeScript"],
    img: controle_financeiro,
    code: [
      {
        github: "https://github.com/Gabriel-CR/financial_control",
        deploy: "https://financial-control-psi.vercel.app/",
      },
    ],
  },
  {
    title: "Login Form",
    description:
      "Formulário de login com validação de email e senha. Simula uma requisição para uma API para validação dos dados.",
    tecnologies: ["ReactJS", "API"],
    img: login_form,
    code: [
      {
        github: "https://github.com/Gabriel-CR/login_form",
        deploy: "https://login-form-ebon-one.vercel.app/",
      },
    ],
  },
  {
    title: "Desafio Transportadora",
    description:
      "Interface para seleção de frete. Realização de cálculo de preço de forma dinâmica.",
    tecnologies: ["Vue.JS", "styled-components", "API"],
    img: desafio_transportadora,
    code: [
      {
        github: "https://github.com/Gabriel-CR/desafio_transportadora",
        deploy: false,
      },
    ],
  },
  {
    title: "IA Utilizando Buscas",
    description:
      "Projeto de Inteligência Artificial utilizando algoritmos de busca. Foram implementadas as buscas em largura, profundidade, gulosa e A*.",
    tecnologies: ["Java", "AI", "Estrutura de Dados"],
    img: ia_utilizando_buscas,
    code: [
      {
        github: "https://github.com/Gabriel-CR/IABuscas",
        deploy: false,
      },
    ],
  },
  {
    title: "Formulário com Marcador de Progresso",
    description:
      "Formulário com validação de dados e marcador de progresso. O formulário valida a tamanho do nome, usa regex para validar o email e habilita o botão de submit quando todos os campos estiverem preenchidos.",
    tecnologies: ["ReactJS", "Form", "Validação", "Regex"],
    img: progresso_formulario,
    code: [
      {
        github: "https://github.com/Gabriel-CR/progress_form",
        deploy: "https://progress-form.vercel.app/",
      },
    ],
  },
];

const Portifolio = () => {
  return (
    <div>
      <Title>
        <h2>🔗 Portifólio!</h2>
        <h1>Trabalhos e Projetos</h1>
      </Title>
      <Projects>
        {projetos.map(({ title, description, tecnologies, img, code }, key) => (
          <Card
            key={key}
            title={title}
            description={description}
            tecnologies={tecnologies}
            img={img}
            code={code}
          />
        ))}
      </Projects>
    </div>
  );
};

export default Portifolio;
