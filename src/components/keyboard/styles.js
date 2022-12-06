import styled from 'styled-components';

const getButtonColor = (hasError, hasHit, theme) => {
  if (hasError) return theme.colors.red;
  if (hasHit) return theme.colors.green;
  return 'white';
};

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  max-width: 600px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  color: ${({ theme, $hasError, $hasHit }) => ($hasError || $hasHit) ? theme.colors.white : theme.colors.redDark};
  background-color: ${({ theme, $hasError, $hasHit }) => getButtonColor($hasError, $hasHit, theme)};

  :hover {
    opacity: 0.7;
  }
`;