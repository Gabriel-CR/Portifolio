import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  height: 82vh;

  /* & {
    border: 1px solid red;
  } */

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
`;
