import React, { useState } from "react";
import * as Styled from "./styles";
import Keyboard from "../../components/keyboard";
import SortedWord from "../../components/sortedWord";

const words = [
    {
      name: 'PROCESSADOR',
      tip: 'Também conhecido como CPU, ele fica acoplado à placa-mãe e é responsável por fazer o controle das operações que a máquina realiza. Interfere diretamente na rapidez das tarefas executadas.'
    }
]

// Forca
export default function Gallows() {
  const [keysWithError, setKeysWithError] = useState([]);
  const [keysWithHits, setKeysWithHits] = useState([]);
  const { name: sortedWord, tip } = words[0];

  const set = new Set(sortedWord.split(''));
  const filteredWord = [...set].join('');

  const handleKeyChange = (key) => {
    if (!keysWithError.includes(key) && !keysWithHits.includes(key)) {
      if (sortedWord.includes(key)) {
        setKeysWithHits([...keysWithHits, key]);
        if (keysWithHits.length === (filteredWord.length - 1)) alert("PARABÉNS! VOCÊ ACERTOU");
      }
      else setKeysWithError([...keysWithError, key]);
    }
  };

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.TipWrapper>
         {`Dica: ${tip}`}
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
