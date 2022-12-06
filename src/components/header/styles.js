import styled from "styled-components";

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.red};
  padding: 20px;
  width: 100%;
  position: absolute;
  top: 0;
  color: white;
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 8px;
`;  

export const Text = styled.div`
  border-radius: 50px;
  padding: 10px;
  background-color: lightyellow;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.red};
`;
