import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  position: relative
`;

export const KeyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40px;
  height: 60px;
  gap: 16px;  
  color: black;
  text-align: center;
`;

export const KeyTrace = styled.div`
  width: 40px;
  background-color: ${({ theme }) => theme.colors.redDark};
  height: 2px;
  position: absolute;
  top: 24px;
`;
