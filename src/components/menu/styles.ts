import styled from "styled-components";

interface UlProps {
  visible: boolean;
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
  display: ${({ visible }) => (visible ? "flex" : "none")}!important;

  @media (max-width: 768px) {
    position: absolute;
    right: 0;
    top: 60px; 
    width: 100%;
    background: #000;
    flex-direction: column;
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
  }
  & li a::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #09f0b4;
      transition: transform 0.3s ease;
      transform: scaleX(0); /* Inicialmente escondido */
      transform-origin: right;
      background: -o-linear-gradient(190deg, #6ff2cb 0%, rgba(115, 67, 210, 0) 100%);
      background: linear-gradient(260deg, #6ff2cb 0%, rgba(115, 67, 210, 0) 100%);
      /* -webkit-filter: blur(1px);
      filter: blur(1px); */
  }
  & li a.active,
  & li a:hover {
      color:#09f0b4;
  }
  & li a:hover::before {
      transform: scaleX(1); /* Efeito de hover: expande o pseudo-elemento */
      transform-origin: left;
  }
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

export const Hamburger = styled.div`
  margin-right: 20px;
  margin-left: 20px;
`;

export const DropBox = styled.div`
  &.marked {
    background-color: #f2f2f2;
    border-radius: 2px;
  }

  .drop-text.marked1 {
    color: #ffffff;
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
