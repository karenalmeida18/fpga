import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 100vh;
  background-color: #8c162a94;
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const Content = styled.div`
    width: 50%;
    height: 80%;
    padding: 20px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.white};
`;
