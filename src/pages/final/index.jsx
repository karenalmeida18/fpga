import React from "react";
import { useNavigate } from "react-router-dom";
import * as Styled from "./styles";
import Button from "../../components/button";

export default function Final() {
  const navigate = useNavigate();
  const name = localStorage.getItem('username');

  return (
    <Styled.Container>
      <Styled.Title>Parabéns, {name}! Você chegou ao fim.</Styled.Title>
      <p>Pontuação: 40</p>
      <Button onClick={() => navigate('/')}>Jogar novamente</Button>
    </Styled.Container>
  );
}
