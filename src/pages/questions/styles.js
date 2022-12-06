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
