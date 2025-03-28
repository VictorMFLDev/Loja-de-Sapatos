import styled from "styled-components";
import { theme } from "../../style/theme";

export const Content = styled.header`
  width: 100%;
  padding: 2em;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${theme.colors.gray};
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
  font-size: 1.8em;
  font-weight: 500;
  color: ${theme.colors.black};
`;

export const Navigation = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
    gap: 2em;

    li {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;

      &:last-child {
        border-left: 1px solid #666;
        margin: 0 -1em;
        padding: 0 1em;
      }
    }
  }
`;
