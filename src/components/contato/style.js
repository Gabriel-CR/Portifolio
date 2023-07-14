import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  height: 82vh;

  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
`;

export const Wpp = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  grid-area: wpp;

  gap: 8px;
  /* width: 15%; */
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
`;

export const Email = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1vh;
  grid-area: email;

  & > p {
    color: #7b4ae2;
  }

  .email {
    color: rgba(255, 255, 255, 0.5);
  }

  & > button {
    display: flex;
    align-items: center;
    gap: 8px;

    background-color: #090e16;
    border: none;
    padding: 0;
    cursor: pointer;

    transition: 0.2s;

    & > p {
      color: #fff;
    }

    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const Phone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1vh;
  grid-area: phone;
`;

export const Info = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-areas:
    "wpp email"
    "phone phone";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2vw;
  width: 100%;
  margin-bottom: 24px;
`;
