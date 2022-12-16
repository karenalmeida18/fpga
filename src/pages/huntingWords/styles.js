import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding-top: 100px;
    gap: 20px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.white}
`;

export const Content = styled.div`
  display: flex;
  gap: 30px;
`;

export const Board = styled.div`
  display: flex; 
  gap: 20px;
  background-color: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  ul {
    list-style: none;
  }

`

export const Li = styled.li`
cursor: pointer;
border-radius: 4px;
padding: 10px;
margin: 4px 0;
background-color: ${({ theme, $isSelected }) => $isSelected ?  theme.colors.gray : 'white'};


:hover {
  transition: all .2s;
  background-color: ${({ theme }) => theme.colors.white};
}
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  border: ${({ theme, $isFinded }) => $isFinded ? `8px solid ${theme.colors.green}` : 'none'};
`;

export const ImagesWrapper = styled.div `
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 10px 0;
`;
