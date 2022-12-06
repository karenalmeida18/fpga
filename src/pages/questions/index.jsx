import React, { useEffect } from "react";
import * as Styled from './styles';
import Header from "../../components/header";

const words = []

export default function Questions() {
  useEffect(() => {
    localStorage.setItem('step', '3');
    localStorage.setItem('spots', '20');
  }, []);

  return (
    <Styled.Container>
        <Header />
        Perguntas
    </Styled.Container>
  )
}