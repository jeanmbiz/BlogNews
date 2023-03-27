import styled from "styled-components";
import { BsFillHouseDoorFill } from "react-icons/bs";

export const HeaderHouseStyled = styled(BsFillHouseDoorFill)`
  color: var(--color-white);
  font-size: 2rem;
  border: 3px solid var(--color-white);
  border-radius: 20px;
  width: 70px;
  padding: 5px;
  height: 60px;

  :hover {
    color: var(--color-primary);
    background-color: white;
  }
`;

export const HeaderStyled = styled.header`
  background-color: var(--color-primary);
  width: 100vw;

  .mainContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-height: 100%;
  }

  div > div {
    display: flex;
    flex-direction: row;
    gap: 1px;
    margin-right: 20px;
  }

  h1,
  h2 {
    color: white;
    font-size: 2rem;
  }

  h2 {
    font-family: "Courier New", Courier, monospace;
    font-weight: bold;
  }
`;
