import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useState } from "react";
import Header from "../../components/header";
import * as Styled from "./styles";

const elements = [
  {
    name: "Monitor",
    id: "monitor",
  },
  {
    name: "Mouse",
    id: "mouse",
  },
  {
    name: "Placa-mãe",
    id: "placa",
  },
  {
    name: 'Placa de vídeo',
    id: 'video',
  }
];

const descriptions = [
  {
    id: "placa",
    description:
      "É a placa central de todo o computador, onde todos os outros componentes são conectados.",
  },
  {
    id: "mouse",
    description:
      "É o componente que possibilita ao usuário direcionar o cursor e clicar em locais específicos para executar uma tarefa.",
  },
  {
    id: 'video',
    description: 'É o componente responsável por permitir a visualização de imagens no monitor.'
  },
  {
    id: "monitor",
    description:
      "É o equipamento que permite a visualização das informações solicitadas pelo usuário.",
  },
];

export default function ConnectDots() {
  const navigate = useNavigate();
  const [selectedElement, setSelectedElement] = useState("");
  const [selectedDescription, setSelectedDescription] = useState("");
  const [correctPairs, setCorrectPairs] = useState([])
  
  useEffect(() => {
    localStorage.setItem('step', '2');
    localStorage.setItem('spots', '10');
  }, []);

  const increaseSpots = () => {
    alert("PARABÉNS! VOCÊ ACERTOU");
    localStorage.setItem('spots', '20');
    navigate('/questions')
  };


  const handleItemClick = (id, item) => {
    if (item === "element") {
      setSelectedElement(id);
      if (selectedDescription === id) {
        setCorrectPairs([...correctPairs, id]);
        if (correctPairs.length === 3 ) increaseSpots();
      }
    } else {
      setSelectedDescription(id);
      if (selectedElement === id) {
        setCorrectPairs([...correctPairs, id]);
        if (correctPairs.length === 3 ) increaseSpots();
      }
    }
  };

  return (
    <Styled.Container>
      <Header />
      <Styled.Content>
        <Styled.Column>
          {elements.map(({ name, id }) => (
            <Styled.Item
              $isSelected={selectedElement === id}
              $isCorrect={correctPairs.includes(id)}
              onClick={() => handleItemClick(id, "element")}
              key={id}
            >
              {name}
            </Styled.Item>
          ))}
        </Styled.Column>
        <Styled.Column>
          {descriptions.map(({ description, id }) => (
            <Styled.Item
              $isDescription
              $isCorrect={correctPairs.includes(id)}
              $isSelected={selectedDescription === id}
              onClick={() => handleItemClick(id, "description")}
              key={id}
            >
              {description}
            </Styled.Item>
          ))}
        </Styled.Column>
      </Styled.Content>
    </Styled.Container>
  );
}
