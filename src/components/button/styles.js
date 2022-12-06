import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.red};
  border: none;
  border-radius: 30px;
  padding: 10px 24px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  width: 100%;

  :hover {
    opacity: 0.8;
    transition: all 0.2s;
  }
`;  