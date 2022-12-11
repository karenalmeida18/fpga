import React from "react";
import * as Styled from './styles';

export default function Modal({ children }) {
  return (
    <Styled.Container>
        <Styled.Content>
            {children}
        </Styled.Content>
    </Styled.Container>
  )
};
