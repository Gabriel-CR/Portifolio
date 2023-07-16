import styled from "styled-components";

export const Projects = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2vw;
  justify-items: center;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  max-width: 23vw;
  min-height: fit-content;
  border: 1px solid #7b4ae2;
  border-radius: 16px;

  & > h3 {
    margin-bottom: 1rem;
  }

  & > p {
    color: #ffffff9e;
    min-height: 10vh;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;

    margin-bottom: 2rem;
  }

  & > img {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
    margin-bottom: 2rem;
  }
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  & > h2 {
    font-weight: 700;
    font-size: 20px;
    color: #7b4ae2;

    background: rgba(123, 74, 226, 0.1);
    border-radius: 16px;
    padding: 5px 10px;
    width: fit-content;
    margin-bottom: 10px;
  }

  & > h1 {
    font-weight: 800;
    font-size: 30px;
    line-height: 56px;
    margin-bottom: 3rem;
  }
`;

export const Tecnology = styled.div`
  font-weight: 700;
  color: #7b4ae2;

  background: rgba(123, 74, 226, 0.1);
  border-radius: 16px;
  padding: 5px 10px;
  width: fit-content;
  margin-bottom: 10px;
`;

export const TecnologyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 1rem;
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 0;

  & > a {
    display: flex;
    align-items: center;
    gap: 10px;

    border: 1px solid #7b4ae2;
    border-radius: 16px;
    padding: 5px 10px;
    text-decoration: none;
    transition: 0.2s;

    & > p {
      font-weight: 700;
      color: #7b4ae2;
      font-size: 20px;
    }

    &:hover {
      transform: scale(1.05);
    }
  }
`;
