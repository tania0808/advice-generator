import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 540px;
  height: 330px;
  background-color: ${({ theme }) => theme.colors.darkGrayishBlue};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 55px 50px;
  border-radius: 15px;

  @media (max-width: 568px) {
    margin: 0 20px;
    padding: 55px 30px;
  }
`;


export const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.neonGreen};
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 14px;
`;

export const Body = styled.q`
  color: ${({ theme }) => theme.colors.lightCyan};
  text-align: center;
  font-size: 28px;
`;

export const Divider = styled.div`
  position: relative;
  width: 100%;
`;

export const DividerLine = styled.div`
  position: absolute;
  height: 0.3px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightCyan};
  z-index: 0;
`;

export const IconDivider = styled.img`
  background-color: ${({ theme }) => theme.colors.darkGrayishBlue};
  position: absolute;
  left: 50%;
  top: -8px;
  transform: translateX(-50%);
  padding: 0 10px;
  z-index: 1000;
`;

export const Button = styled.div`
  background-color: ${({ theme }) => theme.colors.neonGreen};
  width: 65px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -32.5px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  :hover {
    filter: drop-shadow(0 0 0.75rem ${({ theme }) => theme.colors.neonGreen});
  }
`;

export const ButtonIcon = styled.img`
  width: 50%;
  height: 50%;
`;
