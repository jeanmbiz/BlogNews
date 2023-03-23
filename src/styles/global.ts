import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-primary: #FD377E;
    --color-primary-2: #E34981;
  
    --color-secondary: #03B898;

    --color-grey-100: #333333;
    --color-grey-50: #828282;
    --color-grey-20: #E0E0E0;
    --color-grey-0: #F5F5F5;

    --color-white: #FFFFFF;

    --color-negative: #E60000;
    --color-warning: #FFCD07; 
    --color-sucess: #168821;

  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  body,html{
    width: 100vw;
    height: 100vh;
  }

  body {
    background: var(--color-grey-0);
    color: var(--color-grey-100);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  body, input, button, textarea {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 400;
    line-height: 24px;
  }
  button {
    cursor: pointer;
  }

  ol, ul, li {
	list-style: none;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
    margin: 1rem;
    border-radius: 1.6rem;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-grey-100);
    border-radius: 1.6rem;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary);
  }

  .mainContainer{
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0.8rem;
  }


`;
