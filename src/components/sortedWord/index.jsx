import React from "react";
import * as Styled from "./styles";

export default function SortedWord({ currentWord, correctKeys }) {
  return (
    <Styled.Container>
      {currentWord.split('').map((key, index) => (
        <Styled.KeyWrapper key={index}>
          <p>{correctKeys.includes(key) ? key : ""}</p>
          <Styled.KeyTrace />
        </Styled.KeyWrapper>
      ))}
    </Styled.Container>
  );
}
