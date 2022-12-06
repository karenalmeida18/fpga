import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import * as Styled from "./styles";
import Keyboard from "../../components/keyboard";
import SortedWord from "../../components/sortedWord";
import Header from "../../components/header";

const words = [
    {
      name: 'PROCESSADOR',
      tip: 'Também conhecido como CPU, ele fica acoplado à placa-mãe e é responsável por fazer o controle das operações que a máquina realiza. Interfere diretamente na rapidez das tarefas executadas.'
    }
]

// Forca
export default function Gallows() {
  const navigate = useNavigate();
  const [keysWithError, setKeysWithError] = useState([]);
  const [keysWithHits, setKeysWithHits] = useState([]);
  const { name: sortedWord, tip } = words[0];

  const set = new Set(sortedWord.split(''));
  const filteredWord = [...set].join('');

  useEffect(() => {
    localStorage.setItem('step', '1');
    localStorage.setItem('spots', '0');
  }, []);

  const increaseSpots = () => {
    alert("PARABÉNS! VOCÊ ACERTOU");
    localStorage.setItem('spots', '10');
    setKeysWithError([]);
    setKeysWithHits([]);
    navigate('/connect')
  };

  const restart = () => {
    alert("Ops... Você atingiu o número de erros, tente novamente.");
    setKeysWithError([]);
    setKeysWithHits([]);
  };

  const handleKeyChange = (key) => {
    if (!keysWithError.includes(key) && !keysWithHits.includes(key)) {
      if (sortedWord.includes(key)) {
        setKeysWithHits([...keysWithHits, key]);
        if (keysWithHits.length === (filteredWord.length - 1)) increaseSpots();
      } else {
        setKeysWithError([...keysWithError, key]);
        if (keysWithError.length === 4) restart();
      }
    }
  };

  return (
    <Styled.Container>
      <Header />
      <Styled.Content>
        <Styled.TipWrapper>
          <b>Dica: </b>
          {tip}
        </Styled.TipWrapper>
        <SortedWord correctKeys={keysWithHits} currentWord={sortedWord} />
        <Keyboard
          onKeyClick={(key) => handleKeyChange(key)}
          keysWithError={keysWithError}
          keysWithHits={keysWithHits}
        />
      </Styled.Content>
    </Styled.Container>
  );
}
