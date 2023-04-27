import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  margin: 38px 2%;
  background-color: rgba(123, 74, 226, 0.05);
  border-radius: 16px;
`;

export const Image = styled.img`
  /* topo | direita | inferior | esquerda */
  /* margin: 12px 0 12px 24px; */
`;

export const Navigate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* margin: 12px 23px 12px 0; */
  width: 50%;

  p {
    font-weight: regular;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
  }

  p:hover {
    color: rgba(123, 74, 226, 0.5);
    font-weight: bold;
  }
`;
