import styled from "styled-components";

interface UlProps {
  visible: boolean;
}

export const Nav = styled.nav`
  position: relative; 
  width: 100%;
  top: 30%;
  left: 42%;
  background-color: #fefefe;
  position: absolute;
  border-radius: 2px;
  display: inline-block;
  height: 50px;
  line-height: 50px;
  width: 300px;
  z-index: 10;
`;

export const Ul = styled.ul<UlProps>`
  margin-top: 20px;
  display: ${({ visible }) => (visible ? "block" : "none")};
`;

export const Li = styled.li`
  background-color: #fefefe;

  &:hover a {
    color: #6d6c6c;
  }

  &:hover .blue-box {
    position: absolute;
    margin-left: 0;
    height: 100%;
    width: 4px;
  }
`;

export const Home = styled(Li)`
  border-top-left-radius: 1px;
  border-top-right-radius: 1px;
  border-bottom: 1px #d7d9dd solid;
  position: relative;

  svg {
    width: 20px;
    height: 20px;
    position: relative;
    top: 4px;
  }

  &:hover #home {
    fill: #6d6c6c;
  }
`;

export const Settings = styled(Li)`
  border-bottom-left-radius: 1px;
  border-bottom-right-radius: 1px;
  border-top: 1px #d7d9dd solid;

  svg {
    width: 20px;
    height: 20px;
    position: relative;
    top: 4px;
  }

  &:hover #gear {
    fill: #6d6c6c;
  }
`;

export const Messages = styled(Li)`
  svg {
    width: 20px;
    height: 20px;
    position: relative;
    top: 4px;
  }

  &:hover #mail {
    fill: #6d6c6c;
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
`;

export const Rotate = styled.span`
  transition: all 0.3s linear;

  &.down {
    transform: rotate(180deg);
  }
`;
