import React from "react";
import * as Styled from "./styles";

export default function Button({ text, onClick, children, rest, variant = 'primary' }) {
  return (
    <Styled.Button $variant={variant} {...rest} onClick={() => (onClick ? onClick() : undefined)}>
      {text || children}
    </Styled.Button>
  );
}
