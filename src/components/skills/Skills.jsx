import SkillImg from "./SkillImg";

import { Images, Title, Container, ContainerImg } from "./styles";

import css3 from "../../assets/img/img_skill/css3.svg";
import git from "../../assets/img/img_skill/git.svg";
import github from "../../assets/img/img_skill/github.svg";
import html5 from "../../assets/img/img_skill/html5.svg";
import javascript from "../../assets/img/img_skill/js.svg";
import postman from "../../assets/img/img_skill/postman.svg";
import reactjs from "../../assets/img/img_skill/reactjs.svg";
import pytohn from "../../assets/img/img_skill/python.svg";
import postgresql from "../../assets/img/img_skill/postgresql.svg";
import mongodb from "../../assets/img/img_skill/mongodb.svg";
import vuejs from "../../assets/img/img_skill/vue_js.svg";
import spring_boot from "../../assets/img/img_skill/spring_boot.svg";

const images = [
  {
    img: pytohn,
    alt: "Python",
    description: "Python",
  },
  {
    img: reactjs,
    alt: "ReactJS",
    description: "ReactJS",
  },
  {
    img: javascript,
    alt: "JavaScript",
    description: "JavaScript",
  },
  {
    img: css3,
    alt: "CSS3",
    description: "CSS3",
  },
  {
    img: html5,
    alt: "HTML5",
    description: "HTML5",
  },
  {
    img: git,
    alt: "Git",
    description: "Git",
  },
  {
    img: github,
    alt: "GitHub",
    description: "GitHub",
  },
  {
    img: postman,
    alt: "Postman",
    description: "Postman",
  },
  {
    img: postgresql,
    alt: "PostgreSQL",
    description: "PostgreSQL",
  },
];

const images_outras = [
  {
    img: mongodb,
    alt: "MongoDB",
    description: "MongoDB",
  },
  {
    img: vuejs,
    alt: "VueJS",
    description: "VueJS",
  },
  {
    img: spring_boot,
    alt: "Spring Boot",
    description: "Spring Boot",
  },
];

const Skills = () => {
  return (
    <Container>
      <Title>
        <h2>👨‍💻 Skills &#8226; Experiências</h2>
        <h1>Tecnologias e habilidades</h1>
      </Title>
      <ContainerImg>
        <h3>Techs que uso no dia a dia</h3>
        <Images>
          {images.map(({ img, alt, description }) => (
            <SkillImg img={img} alt={alt} description={description} />
          ))}
        </Images>
      </ContainerImg>
      <ContainerImg>
        <h3>Techs com que já realizei projetos</h3>
        <Images>
          {images_outras.map(({ img, alt, description }) => (
            <SkillImg img={img} alt={alt} description={description} />
          ))}
        </Images>
      </ContainerImg>
    </Container>
  );
};

export default Skills;
