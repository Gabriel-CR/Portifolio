import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 5vh;
  height: 82vh;
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

  & > p {
    display: none;
  }

  &:hover {
    & > p {
      display: block;
    }
  }
`;

export const ContainerImg = styled.div`
  height: 100%;
  width: 90%;
  text-align: center;

  & > h3 {
    color: rgba(255 255 255 / 0.5);
    font-weight: 400;
    margin-bottom: 2rem;
  }
`;

export const Images = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
  gap: 3rem;
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5vh;

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
    margin-bottom: 3rem;
  }
`;
