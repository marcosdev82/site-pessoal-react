import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MenuContent, Ul, DropBox, Rotate } from "./styles";

const Menu = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); 
  const [isMarked, setIsMarked] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth >= 768;
      setIsDropdownVisible(isDesktop); 
      setIsMarked(isDesktop); 
    };

    handleResize(); 
    window.addEventListener("resize", handleResize); 

    return () => {
      window.removeEventListener("resize", handleResize); // Remove o listener ao desmontar
    };
  }, []);

  const handleClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
    setIsMarked(!isMarked);
  };

  const menuItems = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Serviços", link: "/servicos" },
    { id: 3, name: "Trabalhos", link: "/trabalhos" },
    { id: 4, name: "Sobre min", link: "/sobre-min" },
    { id: 5, name: "Blog", link: "/blog" },
    { id: 6, name: "Contato", link: "/contato" },
  ];

  return (
    <MenuContent>
      <DropBox className={isMarked ? "marked" : ""} onClick={handleClick}>
        <span className={`drop-text ${isMarked ? "marked1" : ""}`}>
          Opções
        </span>
        <Rotate className={isMarked ? "down" : ""}>▼</Rotate>
      </DropBox>

      <Ul visible={isDropdownVisible}>
        {menuItems.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.link}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </Ul>
    </MenuContent>
  );
};

export default Menu;
