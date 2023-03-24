import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { MdEmail } from "react-icons/md";

export const MainUserStyled = styled.main`
  width: 100%;
  max-width: 1000px;
  height: 90vh;
  margin: 0 auto;
  background-color: var(--color-white);
  padding-top: 20px;

  figure {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 2rem;
    padding: 20px 15px;
    text-align: center;
    display: block;
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
  }

  aside {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h2 {
    font-weight: 700;
    font-size: 1.8rem;
    margin: 30px 0;
  }

  h3 {
    color: var(--color-grey-50);
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 165%;
    margin-left: 15px;
    margin-block-start: 1.65em;
    margin-block-end: 1.65em;
  }

  @media screen and (min-width: 750px) {

    section{
        display: flex;
        flex-direction: row;
        padding: 0px 10px;
    }
    span{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    aside{
        justify-content: baseline;
        align-items: baseline;
    }
  }
`;

export const UserNewIcon = styled(FaUserCircle)`
  width: 10rem;
  height: 10rem;
  color: var(--color-grey-50);
`;

export const URLIcon = styled(TbWorldWww)`
  width: 2rem;
  height: 2rem;
`;

export const EmailIcon = styled(MdEmail)`
  width: 2rem;
  height: 2rem;
`;
