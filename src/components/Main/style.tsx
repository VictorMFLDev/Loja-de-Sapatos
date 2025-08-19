import styled from "styled-components";
import { theme } from "../../style/theme";

export const Main = styled.main`
  min-height: 100dvh;
  padding: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Category = styled.menu`
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  gap: 0.8em;
  color: ${theme.colors.gray};
  h2 {
    font-weight: 500;
    font-size: 1.8;
    padding-bottom: 0.2em;
    color: ${theme.colors.black};
  }

  p {
    cursor: pointer;
    font-size: 1.1em;

    &:hover {
      color: ${theme.colors.black};
    }
  }
`;

export const Content = styled.section`
  width: 80%;
  min-height: 80vh;

  h1 {
    text-align: center;
    font-size: 3em;
    color: ${theme.colors.black};
  }
`;

export const Products = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 20px;
  margin: 2px;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Um efeito de "elevado" no hover */
    transform: translateY(-2px); /* Um leve deslocamento para cima */
    transition: all 0.3s ease; /* Transição suave para o hover */
  }

  img {
    width: 300px;
  }

  p {
    &:last-child {
      color: ${theme.colors.gray};
    }
  }
`;
