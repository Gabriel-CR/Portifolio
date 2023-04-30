import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 82vh;

  & > div {
    height: 30%;
    width: 30%;
    background-color: rgba(123, 74, 226, 0.1);
    border-radius: 16px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }
`;
