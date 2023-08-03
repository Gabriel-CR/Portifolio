import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 82vh;

  @media (max-width: 750px) {
    flex-direction: column;
    height: 100%;
  }
`;

export const Image = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    width: 95%;
    height: 95%;
  }

  @media (max-width: 750px) {
    width: 50%;
    height: 50%;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  height: 100%;

  & > h1 {
    font-weight: 800;
    font-size: 52px;
    line-height: 61px;
    margin-bottom: 16px;
  }

  & > h2 {
    font-weight: 700;
    font-size: 20px;
    color: #7b4ae2;

    background: rgba(123, 74, 226, 0.1);
    border-radius: 16px;
    padding: 5px 10px;
    width: fit-content;
    margin-bottom: 24px;
  }

  & > h3 {
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 24px;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 16px;

    & > img {
      cursor: pointer;

      &:hover {
        transform: scale(1.1);
        transition: 0.2s;
      }
    }
  }

  @media (max-width: 750px) {
    width: 100%;
    height: 50%;
    align-items: center;
    justify-content: center;
    text-align: center;

    & > h1 {
      font-size: 32px;
      line-height: 37px;
    }

    & > h2 {
      font-size: 16px;
    }

    & > h3 {
      font-size: 16px;
      line-height: 19px;
    }

    & > div {
      gap: 8px;
    }
  }
`;

export const Contato = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  gap: 8px;
  width: 15%;
  height: 44px;
  padding: 14px;

  border: 1px solid rgba(123, 74, 226, 0.5);
  border-radius: 16px;
  color: rgba(123, 74, 226, 0.5);
  background-color: #090e16;

  cursor: pointer;
  text-decoration: none;

  &:hover {
    border: 1px solid rgba(123, 74, 226, 1);
  }

  @media (max-width: 750px) {
    width: 50%;
    height: 44px;
    padding: 14px;
  }
`;
