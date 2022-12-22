/* eslint-disable react-hooks/exhaustive-deps */
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
    id: 'tip1',
    description: "Esse componente é responsável por dar mais agilidade ao sistema...",
    position: {
      x: 10,
      y: 20,
    },
  },
  {
    id: 'tip2',
    description: "Basicamente esse componente funciona como um espaço de trabalho temporário...",
    position: {
      x: 40,
      y: 20,
    },
  },
  {
    id: 'tip3',
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
  const [y, setY] = useState(2);
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
    tips.forEach((tip) => {
      const { offsetLeft: tipX, offsetTop: tipY } = document.getElementById(
        tip.id
      ) || {};
      const {
        offsetLeft: avatarX,
        offsetTop: avatarY,
      } = document.getElementById("avatar");
      console.log({ tipX, avatarX });

      Math.floor(620/10)


      if (Math.floor(tipX/10) === Math.floor(avatarX/10) && tipY === avatarY) {
        setTimeout(() => {
          handleOpenTip(tip);
        }, 500);
      } else {
        setTimeout(() => {
          setY(2);
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

    if (value.includes(component)) return navigate('/hunting');
    alert ('Opss... você errou!');
    setTipsOpened([]);
    setX(1);
    setY(2);
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
        {tips.filter((tip) => !tipsOpened.includes(tip)).map(({ position, id }) => (
          <Styled.Card id={id} key={id} $x={position.x} $y={position.y}>
            ?
          </Styled.Card>
        ))}
        <Styled.Floor />
      </Styled.Container>
    </>
  );
}
