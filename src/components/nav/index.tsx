import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {
  Nav,
  Ul,
  Home,
  Settings,
  Messages,
  DropBox,
  Rotate,
} from './styles';

const Dropdown = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMarked, setIsMarked] = useState(false);

  const handleClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
    setIsMarked(!isMarked);
  };

  return (
    <Nav>
      <DropBox
        className={isMarked ? "marked" : ""}
        onClick={handleClick}
      >
        <span className={`drop-text ${isMarked ? "marked1" : ""}`}>
          Opções
        </span>
        <Rotate className={isMarked ? "down" : ""}>▼</Rotate>
      </DropBox>
      <Ul visible={isDropdownVisible}>
        <Home>
          <a href="#">Home</a>
        </Home>
        <Messages>
          <a href="#">Mensagens</a>
        </Messages>
        <Settings>
          <a href="#">Configurações</a>
        </Settings>
      </Ul>
    </Nav>
  );
};

export default Dropdown;
