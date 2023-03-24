import styled from "styled-components";
import { FaSpinner } from "react-icons/fa";

export const LoaderStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const IconLoader = styled(FaSpinner)`
  font-size: 3rem;
  color: var(--color-grey-100);
`;
