import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  height: 10vh;
  margin-bottom: 30px;
  background-color: rgba(123, 74, 226, 0.05);
  border-radius: 16px;
`;

export const Navigate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;

  a {
    font-size: 18px;
    text-align: center;
    min-width: 16.66%;
    color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    text-decoration: none;
  }

  a:hover {
    color: rgba(123, 74, 226, 0.5);
    font-weight: bold;
  }
`;
