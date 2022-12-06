import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    padding: 20px;
    padding-top: 75px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;
  grid-column-gap: 40px;
  width: 60%;
`;

export const Column = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-row-gap: 50px;
`;

const getBackgroudColor = (theme, isDescription, isCorrect, isSelected) => {
  if (isCorrect) return theme.colors.green;
  if (isSelected) return 'lightgray';
  if (isDescription) return 'white';
  return 'lightyellow';
};

export const Item = styled.p`
  border-radius: 4px;
  padding: 8px;
  display: flex;
  width: ${({ $isDescription }) => $isDescription ? 'auto' : '120px'};
  font-weight: ${({ $isDescription }) => $isDescription ? '500' : '600'};
  justify-content: center;
  align-items: center;
  box-shadow: ${({ $isCorrect }) => $isCorrect ? 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px': 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}; 
  color: ${({ theme }) => theme.colors.redDark};
  background-color: ${({ theme, $isDescription, $isCorrect, $isSelected }) => getBackgroudColor(theme, $isDescription, $isCorrect, $isSelected)};
  border: ${({ $isDescription, theme }) => $isDescription ? `1px solid ${theme.colors.red}` : 'lightyellow'};
  cursor: pointer;

  :hover {
    opacity: 0.7;
    transition: all;
  }
`;