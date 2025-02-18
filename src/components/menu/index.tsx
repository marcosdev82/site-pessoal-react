import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MenuContent, Ul, Hamburger } from "./styles";

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
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // useEffect(() => {
  //   document.body.style.overflow = isDropdownVisible ? "hidden" : "auto";
  // }, [isDropdownVisible]);

  const handleClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
    setIsMarked(!isMarked);
  };

  const handleItemClick = () => {
    setIsDropdownVisible(false);
    setIsMarked(false);
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
      <Hamburger className={isMarked ? "marked" : ""} onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>

      <Ul visible={isDropdownVisible}>
        {menuItems.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.link}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={handleItemClick}
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
