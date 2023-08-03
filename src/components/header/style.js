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

  @media (max-width: 690px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
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

  @media (max-width: 690px) {
    display: none;
  }
`;

export const Menu = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media (max-width: 690px) {
    display: block;
  }
`;

export const MenuDrop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  background-color: rgba(123, 74, 226);
  border-radius: 16px;
  width: 40%;
  position: absolute;
  top: 0;
  right: 0;
  padding: 20px 24px;
  z-index: 1;

  a {
    font-size: 18px;
    font-weight: bold;
    text-align: end;
    min-width: 16.66%;
    color: rgba(255, 255, 255, 0.8);
    cursor: pointer;
    text-decoration: none;
  }

  a:hover {
    transform: scale(1.1);
    font-weight: bold;
  }
`;
