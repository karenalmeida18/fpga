import styled, { keyframes } from "styled-components";


export const Container = styled.div`
  width: 100%;
  position: relative;
  height: 100vh;
  display: flex;
  padding: 20px;
  padding-top: 75px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;


export const Floor = styled.div`
  background-color: ${({ theme }) => theme.colors.redDark};
  width: 100%; 
  position: absolute;
  bottom: 0;
  height: 2rem;
`;

export const Image = styled.img`
  width: 80px;
  height: 100px;
  position: absolute;
  z-index: 10;
  left: ${({ $x }) => $x + 'rem'};
  bottom: ${({ $y }) => $y + 'rem'};
  transform: rotateY(-180deg);
`;

export const Card = styled.div`
  position: absolute;
  width: 80px;
  height: 100px;
  padding: 20px;
  border-radius: 6px;
  border: 4px solid ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.red};
  background-color: ${({ theme }) => theme.colors.yellow};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  left: ${({ $x }) => $x + 'rem'};
  bottom: ${({ $y }) => $y + 'rem'};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  animation: ${({ $x, $y }) => animate($x, $y)} 6s linear infinite;
`

export const animate = (x, y) => keyframes`
  0% {
    bottom: ${y}rem;
    left: ${x}rem;
  }
  20% {
    bottom: ${y}rem;
  }
  30% {
    bottom: ${y + 3}rem;
  }
  50% {
    bottom: ${y - 2}rem;
  }
  60% {
    bottom: ${y + 4}rem;
  }
  70% {
    bottom: ${y}rem;
  }
  75% {
    bottom: ${y + 6}rem;
  }
  80% {
    bottom: ${y}rem;
  }
  100% {
    bottom: ${y + 8}rem;
  }
`;


export const Tip = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.redDark};
  font-weight: 800;
  border: 2px solid ${({ theme }) => theme.colors.red};
  border-radius: 30px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  height: 100%;
`;


export const Footer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-end;
  justify-content: end;
  flex-grow: 1;
`;

export const ButtonsWrapper = styled.div`
 display: flex;
 gap: 8px;
 padding: 20px;
`