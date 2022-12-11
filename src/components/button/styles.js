import styled from "styled-components";

const mapBackgroundVariant = {
  primary: 'red',
  secondary: 'white',
}

const mapColorVariant = {
  primary: 'white',
  secondary: 'red',
}

export const Button = styled.button`
  background-color: ${({ theme, $variant }) => theme.colors[mapBackgroundVariant[$variant]]};
  border: 1px solid ${({ theme, $variant }) => theme.colors[mapColorVariant[$variant]]};
  border-radius: 30px;
  padding: 10px 24px;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme, $variant }) => theme.colors[mapColorVariant[$variant]]};
  cursor: pointer;
  width: 100%;

  :hover {
    opacity: 0.8;
    transition: all 0.2s;
  }
`;  