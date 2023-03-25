import styled from "styled-components";
import { BsFillHouseDoorFill } from "react-icons/bs";

export const HeaderHouseStyled = styled(BsFillHouseDoorFill)`
  color: var(--color-white);
  font-size: 2.5rem;
  border: 3px solid var(--color-white);
  border-radius: 20px;
  width: 70px;
  padding: 5px;
  height: 50px;
`;

export const HeaderStyled = styled.header`
  background-color: var(--color-primary);
  width: 100vw;
  min-height: 80px;

  .mainContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-height: 100%;

    div {
      border: 2px solid var(--color-white);
      border-radius: 8px;
      background-color: var(--color-white);
      width: 360px;
    }

    div input {
      width: 67%;
      height: 60px;
      padding: 0px 10px 0px 15px;
      background-color: var(--color-white);
      border: none;

      ::placeholder {
        color: var(--color-grey-20);
      }
    }

    div button {
      background-color: var(--color-primary);
      border: 2px solid var(--color-primary);
      border-radius: 8px;
      padding: 0px 20px;
      height: 40px;

      color: var(--color-white);
      font-weight: 500;
      font-size: 0.875rem;
      transition: 0.4s;

      &:hover {
        background-color: var(--color-primary-2);
        border: 2px solid var(--color-primary-2);
      }
    }
  }

  @media screen and (max-width: 560px) {
    .mainContainer {
      flex-direction: column;
    }

    div {
      max-width: 300px;
    }

    div button {
      max-width: 94px;
      padding: 0px;
      background-color: azure;
    }
  }
`;
