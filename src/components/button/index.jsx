import React from "react";
import * as Styled from "./styles";

export default function Button({ text, onClick, rest }) {
  return (
    <Styled.Button {...rest} onClick={() => (onClick ? onClick() : undefined)}>
      {text}
    </Styled.Button>
  );
}
