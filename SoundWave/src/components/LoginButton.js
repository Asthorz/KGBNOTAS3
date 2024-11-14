// src/components/LoginButton.js
import styled from 'styled-components';

const LoginButton = styled.button`
  width: 100%; /* Aproveita todo o espaço disponível */
  max-width: 320px; /* Largura máxima para não esticar demais */
  padding: 12px 18px; /* Leve ajuste para maior conforto */
  margin: 12px auto; /* Margem centralizada */
  display: block; /* Centraliza o botão */
  border: none;
  border-radius: 10px; /* Bordas mais arredondadas */
  font-size: 1.1rem;
  font-weight: 600; /* Negrito leve para maior legibilidade */
  cursor: pointer;
  color: ${({ theme }) => theme.colors.buttonText};
  background-color: ${({ bgColor }) => bgColor};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
    transform: translateY(-3px); /* Efeito de elevação */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* Sombra mais intensa */
  }

  &:active {
    transform: translateY(1px); /* Simula a pressão ao clicar */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra reduzida */
  }

  &:focus {
    outline: none; /* Remove a outline padrão */
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.focusOutline}; /* Adiciona uma outline de foco */
  }
`;

export default LoginButton;
