import React from "react";
import * as Styled from './styles';

export function Board({ board, onClick }) {
  return (
    <Styled.Board>
      {board?.map((row, indexRow) => (
        <ul key={"row" + indexRow}>
          {row.map((column, indexColumn) => (
            <Styled.Li
              $isSelected={column.isSelected}
              key={"column" + indexColumn}
              onClick={() => {
               onClick(column);
              }}
            >
              {column.letter}
            </Styled.Li>
          ))}
        </ul>
      ))}
    </Styled.Board>
  );
}
