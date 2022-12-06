import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.white}
`;

export const Form = styled.form`
    width: 360px;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.red};
  margin: 20px 0;
  font-family: 'Games', sans-serif;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
`;

export const GallowDraw = styled.div`
    background-color: ${({ theme }) => theme.colors.red};
    `;

export const TipWrapper = styled.p`
    max-width: 700px;

`;
