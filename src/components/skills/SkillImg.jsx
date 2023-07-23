import { Suspense } from "react";
import { Img } from "./styles";

const SkillImg = ({ img, alt, description }) => {
  return (
    <Img>
      <Suspense fallback={<div>Carregando...</div>}>
        <img src={img} alt={alt} />
      </Suspense>
      <p>{description}</p>
    </Img>
  );
};

export default SkillImg;
