import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 10vh;
  height: 100%;

  @media (max-width: 768px) {
    padding-bottom: 5vh;
  }
`;

export const Img = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 20%;
  min-height: fit-content;

  & > img {
    height: 4rem;
  }

  /* & > p {
    display: none;
  } */

  /* &:hover {
    & > p {
      display: block;
    }
  } */

  @media (max-width: 1024px) {
    & > p {
      display: block;
    }
  }
`;

export const ContainerImg = styled.div`
  height: 100%;
  width: 90%;
  text-align: center;
  /* margin-bottom: 2rem; */

  & > h3 {
    color: rgba(255 255 255 / 0.5);
    font-weight: 400;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    & > h3 {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export const Images = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
  gap: 3rem;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5vh;
  margin-top: 3vh;

  & > h2 {
    font-weight: 700;
    font-size: 20px;
    color: #7b4ae2;

    background: rgba(123, 74, 226, 0.1);
    border-radius: 16px;
    padding: 5px 10px;
    width: fit-content;
    margin-bottom: 20px;
  }

  & > h1 {
    font-weight: 800;
    font-size: 48px;
    line-height: 56px;
    /* margin-bottom: 3rem; */
  }

  /* @media (max-width: 1024px) {
    & > h1 {
      font-size: 22px;
      line-height: 40px;
    }
  } */

  @media (max-width: 768px) {
    & > h1 {
      font-size: 4vh;
      line-height: 40px;
      text-align: center;
    }
  }
`;
