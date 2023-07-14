import { Img } from "./styles";

const SkillImg = ({ img, alt, description }) => {
  return (
    <Img>
      <img src={img} alt={alt} />
      <p>{description}</p>
    </Img>
  );
};

export default SkillImg;
