import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 20px;
    justify-content: center;
    align-items: center;
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
