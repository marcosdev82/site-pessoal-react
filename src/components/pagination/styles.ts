import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-top: 20px;
  margin-bottom: 40px;
`;

const Button = styled.button<{ active?: boolean }>`
  background: ${({ active }) => (active ? props => props.theme.colors.tertiary : 'transparent')};
  color: ${({ active }) => (active ? props => props.theme.colors.secundary : props => props.theme.colors.white)};
  border: 1px solid ${ props => props.theme.colors.border100 };
  padding: 8px 12px; 
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ active }) => (active ?  props => props.theme.colors.tertiary  : props => props.theme.colors.tertiary)};
    color: ${ props => props.theme.colors.white };
  }

  &:disabled {
    background: ${props => props.theme.colors.tertiary};
    color: ${ props => props.theme.colors.grey };
    cursor: not-allowed;
  }
`;

// Criamos um objeto para armazenar os componentes corretamente
const PaginationButtons = {
  First: styled(Button)``,
  Prev: styled(Button)``,
  Item: styled(Button)``,
  Next: styled(Button)``,
  Last: styled(Button)``,
};

export { PaginationContainer, PaginationButtons };
