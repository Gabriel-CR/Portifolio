import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 10vh;
  height: 83vh;

  & > * {
    border: 1px solid red;
  }
`;

export const Img = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  min-width: fit-content;
  min-height: fit-content;
  transition: 1s;

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
  height: 150px;
`;

export const Images = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
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
  }
`;
