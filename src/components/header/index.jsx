import React from "react";
import * as Styled from "./styles";

export default function Header() {
  const name = localStorage.getItem('username');
  const spots = localStorage.getItem('spots');
  const step = localStorage.getItem('step');


  return (
    <Styled.Header>
      <Styled.Text><b>Nome: </b>{name}</Styled.Text>
      <Styled.Text><b>Pontos: </b>{spots || '0'}</Styled.Text>
      <Styled.Text><b>Fase: </b>{step || '1'}</Styled.Text>
    </Styled.Header>
  );
}
