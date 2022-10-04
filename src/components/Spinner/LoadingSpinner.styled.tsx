import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 10px solid ${({ theme }) => theme.colors.darkBlue};
  border-top: 10px solid ${({ theme }) => theme.colors.neonGreen};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${spin} 1s linear infinite;
`;
