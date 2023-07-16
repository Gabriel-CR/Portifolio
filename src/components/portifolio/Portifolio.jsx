import { Title, Projects } from "./styles";
import Card from "./Card";

const projetos = [
  {
    title: "Projeto 1",
    description:
      "lore ipsum lore ipsum lore ipsum lore ipsum lore ipsum lore ipsum lore ipsum lore ipsum ",
    tecnologies: ["React", "Node", "MongoDB"],
    img: "https://picsum.photos/200/300",
    code: [
      {
        github: "github.com",
        deploy: "deploy.com",
      },
    ],
  },
  {
    title: "Projeto 1",
    description:
      "lore ipsum lore ipsum lore ipsum lore ipsum lore ipsum lore ipsum lore ipsum lore ipsum ",
    tecnologies: ["React", "Node", "MongoDB"],
    img: "https://picsum.photos/200/300",
    code: [
      {
        github: "github.com",
        deploy: "deploy.com",
      },
    ],
  },
  {
    title: "Projeto 1",
    description:
      "lore ipsum lore ipsum lore ipsum lore ipsum lore ipsum lore ipsum lore ipsum lore ipsumlore ipsum lore ipsum lore ipsum lore ipsum lore ipsum lore ipsum lore ipsum lore ipsumlore ipsum lore ipsum lore ipsum lore ipsum lore ipsum lore ipsum lore ipsum lore ipsumlore ipsum lore ipsum lore ipsum lore ipsum lore ipsum lore ipsum lore ipsum lore ipsumlore ipsum lore ipsum lore ipsum lore ipsum lore ipsum lore ipsum lore ipsum lore ipsum ",
    tecnologies: ["React", "Node", "MongoDB"],
    img: "https://picsum.photos/200/300",
    code: [
      {
        github: "github.com",
        deploy: "deploy.com",
      },
    ],
  },
  {
    title: "Projeto 1",
    description:
      "lore ipsum lore ipsum lore ipsum lore ipsum lore ipsum lore ipsum lore ipsum lore ipsum ",
    tecnologies: ["React", "Node", "MongoDB"],
    img: "https://picsum.photos/200/300",
    code: [
      {
        github: "github.com",
        deploy: "deploy.com",
      },
    ],
  },
  {
    title: "Projeto 1",
    description:
      "lore ipsum lore ipsum lore ipsum lore ipsum lore ipsum lore ipsum lore ipsum lore ipsum ",
    tecnologies: ["React", "Node", "MongoDB"],
    img: "https://picsum.photos/200/300",
    code: [
      {
        github: "github.com",
        deploy: "deploy.com",
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
