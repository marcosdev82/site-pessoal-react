import styled from "styled-components";

interface UlProps {
  $visible: boolean;
}

export const NavIcon = styled.div`
    display: none;
`;
export const MenuIcon = styled.img`
    width: 40px;
    height: 40px;
`;
export const MenuContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    z-index: 10;
`;
export const Nav = styled.nav`
    width: 100%;
    top: 30%;
    left: 42%;
    background-color: #fefefe;
    border-radius: 2px;
    display: inline-block;
    height: 50px;
    line-height: 50px;
    width: 300px;
    font-family:'inter', sans-serif;
`;
export const Ul = styled.ul<UlProps>`
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  gap: 40px;
  z-index: 10;
  display: ${({ $visible }) => ($visible ? "flex" : "none")}!important;

  @media (max-width: 768px) {
    position: absolute;
    right: 0px;
    top: 70px;
    width: 100%;
    background: rgb(0, 0, 0);
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 15px;
    padding: 20px;
    /* opacity: ${({ $visible }) => ($visible ? "1" : "0")};
    transform: ${({ $visible }) =>
      $visible ? "translateY(0)" : "translateY(-10px)"};
    pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};
    transition: opacity 0.3s ease, transform 0.3s ease; */
    & li {
      display: flex;
    }
    
  }
  & li a {
      color: ${props => props.theme.colors.white};
      text-decoration: none;
      position: relative;
      padding-bottom:5px;
      transition: color 0.3s ease; 
      text-transform: uppercase;
      font-size: 16px;
      font-weight: 600;
      font-family: 'Inter';
  }
  /* & li a::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #09f0b4;
      transition: transform 0.3s ease;
      transform: scaleX(0); 
      transform-origin: right;
      background: -o-linear-gradient(190deg, #6ff2cb 0%, rgba(115, 67, 210, 0) 100%);
      background: linear-gradient(260deg, #6ff2cb 0%, rgba(115, 67, 210, 0) 100%);
  } */
  & li a.active,
  & li a:hover {
      color:#09f0b4;
  }
  /* & li a:hover::before {
      transform: scaleX(1); 
      transform-origin: left;
  } */
`;

export const Arrow = styled.div`
  width: 0;
  height: 0;
  margin-left: 275px;
  border-right: 9px solid transparent;
  border-left: 9px solid transparent;
  border-bottom: 9px solid #fefefe;
  position: absolute;
  top: -9px;
`;

export const Hamburger = styled.label`
  position: relative;
  cursor: pointer;
  display: block;
  height: 22px;
  width: 30px;

  .drop-text.marked1 {
    color: #ffffff;
  }

  & span {
    position: absolute;
    display: block;
    height: 4px;
    width: 100%;
    border-radius: 30px;
    background-color: #ffffff;
    transition: 0.25s ease-in-out;
  }

  & span:nth-child(1) {
    top: 0;
  }

  & span:nth-child(2) {
    top: 8px;
  }

  & span:nth-child(3) {
    top: 16px;
  }

  &.marked span:nth-child(1) {
    transform: rotate(-45deg); 
    top: 9px;
    background-color: #09f0b4;
  }

  &.marked span:nth-child(2) {
    opacity: 0;
    background-color: #09f0b4;
  }

  &.marked span:nth-child(3) {
    transform: rotate(45deg); 
    top: 9px;
    background-color: #09f0b4;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Rotate = styled.span`
  transition: all 0.3s linear;

  &.down {
    transform: rotate(180deg);
  }
`;
