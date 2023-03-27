import styled from "styled-components";
import { Link } from "react-router-dom";

export const PostStyled = styled.main`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  background-color: var(--color-white);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  section {
    max-width: 300px;
    height: 350px;
    padding: 20px 20px;
  }

  figure {
    width: 100%;
    height: 100%;
    max-width: 300px;
    position: relative;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 20px;
  }

  h2 {
    position: absolute;
    top: 82%;
    left: 13%;
    transform: translate(-50%, -50%);
    z-index: 1;

    background-color: var(--color-primary);
    color: white;
    font-size: 0.6rem;
    padding: 5px;
    border-radius: 10px;
  }

  h1 {
    max-width: 100%;
    margin: 0;
    font-family: "PT Sans Narrow", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Roboto", "Oxygen-Sans", "Ubuntu", "Cantarell", "Helvetica Neue",
      sans-serif;
    font-size: 26px;
    line-height: 33px;
    color: var(--headings-color);
    transition: color 0.2s ease-in-out;
    margin-left: 10px;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    margin-left: 10px;
  }

  h3 {
    clear: none;
    font-family: "Inter";
    font-weight: 400;
    font-size: 0.7rem;
    margin-top: 5px;
    color: var(--color-grey-50);
  }

  h4 {
    clear: none;
    font-family: "Inter";
    font-weight: 400;
    font-size: 0.8rem;
    margin-bottom: 0;
    color: var(--color-link);
  }

  @media screen and (min-width: 640px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  max-width: 100%;
  margin: 0;
  font-family: "PT Sans Narrow", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen-Sans", "Ubuntu", "Cantarell", "Helvetica Neue", sans-serif;
  font-size: 26px;
  line-height: 33px;
  color: var(--headings-color);
  transition: color 0.2s ease-in-out;

  :hover {
    figure {
      filter: brightness(0.9);
    }
    h2 {
      background-color: var(--link-color-hover);
    }
    h1 {
      color: var(--link-color-hover);
    }
  }
`;

export const LinkUserStyled = styled(Link)`
  clear: none;
  font-family: "PT Sans Narrow", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen-Sans", "Ubuntu", "Cantarell", "Helvetica Neue", sans-serif;
  font-weight: bold;
  font-size: 0.8rem;
  margin-bottom: 0;
  color: var(--color-link);
  text-decoration: none;

  :hover {
    color: red;
  }
`;
