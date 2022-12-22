/* eslint-disable eqeqeq */
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "../../components/header";
import { createGame } from "hunting-words";
import { Board } from "./board";
import * as Styled from "./styles";
import { useState } from "react";
import drive from "../../assets/drive.webp";
import memoria from "../../assets/memoria.jpg";
import teclado from "../../assets/teclado.jpg";

const words = ["memoria", "drive", "teclado"];

const options = {
  wordsCross: false,
  inverseWord: false,
  wordInVertical: false,
  wordInHorizontal: true,
  wordDiagonalLeft: false,
  wordDiagonalRight: false,
};

export default function HuntingWords() {
  const [game, setGame] = useState({});
  const navigate = useNavigate();
  const [wordsFinded, setWordsFinded] = useState([]);

  useEffect(() => {
    localStorage.setItem("step", "4");
    localStorage.setItem("spots", "30");
    setGame(new createGame(10, 10, words, options));
  }, []);
  const { board } = game;

  const getLetterSelectedSameWord = (word) => {
    let lettersSelected = 0;
    board.forEach((row) => {
      lettersSelected =
        lettersSelected +
        row.filter((el) => {
          return el.word == word && el.isSelected;
        }).length;
    });

    return lettersSelected;
  };

  const verifyFindWord = (words) => {
    for (let word of words) {
      let lettersSelected = getLetterSelectedSameWord(word);

      if (lettersSelected == word.length) {
        alert("Você achou a palavra: " + word);
        setWordsFinded([...wordsFinded, word]);
      }
    }
  };

  const selectLetter = (item) => {
    board[item.row][item.column].setIsSelected(!item.isSelected);
    let newGame = { ...game, board };
    setGame(newGame);
    verifyFindWord(item.word);
  };

  useEffect(() => {
   if (wordsFinded.length === 3) {
    alert('Parabéns! você ganhou.');
    navigate('/final');
   }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wordsFinded]);

  return (
    <>
      <Header />
      <Styled.Container>
        <div>
            <h1> Caça - Palavras </h1>
            <p> Encontre os elementos da imagem abaixo! </p>
        </div>
        <Styled.Content>
            <Styled.ImagesWrapper>
            <Styled.Image $isFinded={wordsFinded.includes('drive')} src={drive} />
            <Styled.Image $isFinded={wordsFinded.includes('memoria')} src={memoria} />
            <Styled.Image $isFinded={wordsFinded.includes('teclado')} src={teclado} />
            </Styled.ImagesWrapper>
            <Board board={board} onClick={selectLetter} />

        </Styled.Content>
      </Styled.Container>
    </>
  );
}
