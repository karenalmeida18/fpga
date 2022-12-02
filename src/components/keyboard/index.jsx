import React from "react";

import * as Styled from "./styles";

const keys = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Ç",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
];

export default function Keyboard({ keysWithError = [], keysWithHits = [], onKeyClick }) {
  return (
    <Styled.Container>
      {keys.map((key) => (
        <Styled.Button
          tabIndex={0}
          key={key}
          onKeyPress={(e) => onKeyClick(e.key.toLocaleUpperCase())}
          $hasError={keysWithError.includes(key)}
          $hasHit={keysWithHits.includes(key)}
          onClick={() => onKeyClick(key)}
        >
          {key}
        </Styled.Button>
      ))}
    </Styled.Container>
  );
}
