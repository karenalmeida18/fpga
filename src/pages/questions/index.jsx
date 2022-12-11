import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Styled from "./styles";
import Header from "../../components/header";
import Button from "../../components/button";
import Input from '../../components/input';
import Alan from "../../assets/alan.png";
import Modal from "../../components/modal";

const tips = [
  {
    description: "Esse componente é responsável por dar mais agilidade ao sistema...",
    position: {
      x: 10,
      y: 20,
    },
  },
  {
    description: "Basicamente esse componente funciona como um espaço de trabalho temporário...",
    position: {
      x: 40,
      y: 20,
    },
  },
  {
    description: "Guarda temporariamente toda informação que o computador precisa.",
    position: {
      x: 70,
      y: 20,
    },
  },

];

const component = "ram"

export default function Questions() {
  const [x, setX] = useState(1);
  const [y, setY] = useState(5);
  const navigate = useNavigate();
  const [tipsOpened, setTipsOpened] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    localStorage.setItem("step", "3");
    localStorage.setItem("spots", "20");
  }, []);

  const increment = (count) => count + 1;

  const decrement = (count) => count - 1;

  const actions = {
    ArrowLeft: () => setX(decrement),
    ArrowRight: () => setX(increment),
    Space: () => setY(20),
    // ArrowDown: () => setY(increment),
    // ArrowUp: () => setY(decrement),
  };

  const handleKeyPress = (e) => {
    const action = actions[e.code];
    if (action) action();
  }

  const handlePressSpace = () => {
    tips.forEach((tip, index) => {
      const { offsetLeft: tipX, offsetTop: tipY } = document.getElementById(
        index + 1
      ) || {};
      const {
        offsetLeft: avatarX,
        offsetTop: avatarY,
      } = document.getElementById("avatar");


      if (tipX === avatarX && tipY === avatarY) {
        setTimeout(() => {
          handleOpenTip(tip);
        }, 500);
      } else {
        setTimeout(() => {
          setY(5);
        }, 500);
      }
    });
  };

  useEffect(() => {
    handlePressSpace();
  }, [x, y]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
  }, []);

  const handleOpenTip = (tip) => {
    setOpenModal(true);
    setTipsOpened([...tipsOpened, tip]);
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (value.includes(component)) return navigate('/final');
    alert ('Opss... você errou!');
    setTipsOpened([]);
    setX(1);
    setY(5);
    setOpenModal(false);
  };

  return (
    <>
     {openModal && (
        <Modal>
          <Styled.ModalContent>
            {tipsOpened.map(({ description }) => (
              <Styled.Tip key={description}>{description}</Styled.Tip>
            ))}
            <Styled.Footer onSubmit={handleSubmit}>
              {showInput && <Input onChange={(e) => setValue(e.target.value)} required label="Componente" placeholder="Insira o componente aqui" />}
              <Styled.ButtonsWrapper>
                <Button type={setShowInput ? 'submit' : 'text'} onClick={() => setShowInput(true)} variant="secondary">{value ? 'Enviar' : 'Advinhar'}</Button>
                {tipsOpened.length !== tips.length && <Button onClick={() => setOpenModal(false)}>Continuar</Button>}
              </Styled.ButtonsWrapper>
            </Styled.Footer>
          </Styled.ModalContent>
        </Modal>
     )}
      <Styled.Container onKeyPress={handleKeyPress}>
        <Header />
        <Styled.Image $x={x} $y={y} src={Alan} id="avatar" />
        {tips.filter((tip) => !tipsOpened.includes(tip)).map(({ position }, index) => (
          <Styled.Card id={index + 1} key={index} $x={position.x} $y={position.y}>
            ?
          </Styled.Card>
        ))}
        <Styled.Floor />
      </Styled.Container>
    </>
  );
}
