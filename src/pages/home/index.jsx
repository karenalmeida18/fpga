import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Styled from "./styles";
import Button from "../../components/button";
import Input from "../../components/input";

export default function Home() {
  const navigate = useNavigate();
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/gallow");
    localStorage.setItem('username', name);
  };

  return (
    <Styled.Container>
      <Styled.Title>Learning Hardware</Styled.Title>
      <Styled.Form onSubmit={(e) => handleSubmit(e)}>
        <Input onChange={(e) => setName(e.target.value)} label="Nome" name="name" required placeholder="Insira seu nome para continuar" />
        <Button type="submit" text="Iniciar" />
      </Styled.Form>
    </Styled.Container>
  );
}
