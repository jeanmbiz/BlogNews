import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import { MdLocalPostOffice } from "react-icons/md";
import { Link } from "react-router-dom";

export const MainCommentStyled = styled.main`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  background-color: var(--color-white);
  padding-top: 20px;
  height: 100%;
`;

export const SectionStyled = styled.section`
  article {
    padding: 0px 10px;
    h1 {
      font-size: 2rem;
      font-weight: 700;
      line-height: 120%;
      letter-spacing: -0.2px;
    }

    h2 {
      color: var(--color-grey-50);
      font-weight: 400;
      font-size: 1.18rem;
      margin: 15px 0 20px;
      line-height: 30px;
      font-style: normal;
      letter-spacing: normal;
    }
  }

  section {
    div:first-child {
      line-height: 130%;
      flex: 1;
      display: flex;
      flex-direction: row;
      gap: 5px;
      box-sizing: border-box;
      align-items: center;
      width: 100%;
      padding: 0px 10px;
    }

    div:nth-of-type(2) {
      font-size: 0.7rem;
      font-weight: 700;
      color: var(--color-primary);
      margin: 20px 0;
      text-align: left;
      padding: 0px 10px;
    }
  }
`;

export const CommentCardStyled = styled.div`
  border: 5px solid var(--color-grey-20);
  padding: 5px;

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
  }

  h4 {
    margin-left: 35px;
  }
`;

export const PostIcon = styled(MdLocalPostOffice)`
  width: 30px;
  height: 30px;
`;

export const UserIcon = styled(FaUserCircle)`
  width: 30px;
  height: 30px;
`;

export const LinkUser = styled(Link)`
  color: var(--color-link);
  text-decoration: none;
  font-size: 1.3rem;
  :hover {
    color: red;
  }
`;

export const LinkComments = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  color: var(--color-link);
  :hover {
    color: red;
  }
`;
