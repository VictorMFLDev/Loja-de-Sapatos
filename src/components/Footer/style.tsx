import styled from "styled-components";
import { theme } from "../../style/theme";

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em 3em;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 3em;
  padding: 3em 0;
  position: relative; /* Para alinhar o pseudo-elemento */
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px; /* Define a espessura da borda base */
    background-color: ${theme.colors.gray};
    transform: scaleY(0.5); /* Reduz a borda para metade de 1px (0.5px) */
  }
`;

export const Logo = styled.div`
  width: 28ch;
  display: flex;
  flex-direction: column;
  gap: 1em;
  h2 {
    font-size: 1.5em;
  }
`;

export const Title = styled.h2`
  font-size: 1.2em;
  color: ${theme.colors.gray};
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  color: ${theme.colors.gray};
  h2 {
    margin-bottom: 1em;
  }

  p {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Contact = styled.div`
  color: ${theme.colors.gray};
  text-indent: 1em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;
