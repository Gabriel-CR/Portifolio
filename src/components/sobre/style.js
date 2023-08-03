import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  height: 82vh;

  & > img {
    width: 30%;
  }

  & > div {
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  & > div > h2 {
    font-weight: 700;
    font-size: 20px;
    color: #7b4ae2;

    background: rgba(123, 74, 226, 0.1);
    border-radius: 16px;
    padding: 5px 10px;
    width: fit-content;
    margin-bottom: 24px;
  }

  & > div > h1 {
    font-weight: 800;
    font-size: 48px;
    line-height: 56px;
    margin-bottom: 24px;
  }

  & > div > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  @media (max-width: 750px) {
    flex-direction: column;
    height: 90%;
    gap: 0;
    padding: 0 20px;

    & > img {
      width: 35%;
    }

    & > div {
      width: 100%;
      gap: 5px;
    }

    & > div > h1 {
      font-size: 32px;
      line-height: 37px;
      margin-bottom: 16px;
    }

    & > div > h2 {
      font-size: 16px;
      margin-bottom: 16px;
    }
  }
`;

export const Abount = styled.div`
  & > p {
    margin-bottom: 0.7vh;
  }
`;
