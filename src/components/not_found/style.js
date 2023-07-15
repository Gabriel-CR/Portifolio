import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 82vh;

  & > div {
    height: 50%;
    width: 50%;
    padding: 3%;
    background-color: rgba(123, 74, 226, 0.1);
    border-radius: 16px;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    button {
      padding: 10px 35px;
      border: 1px solid rgba(123, 74, 226, 0.5);
      border-radius: 16px;
      background-color: rgba(123, 74, 226, 0);
      color: rgba(255, 255, 255);
      cursor: pointer;
      font-size: 1.2rem;

      &:hover {
        transform: scale(1.05);
      }
    }
  }
`;
