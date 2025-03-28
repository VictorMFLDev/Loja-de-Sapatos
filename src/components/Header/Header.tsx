import * as S from "./style";

// Icones
import { CiShoppingCart } from "react-icons/ci";

export const Header = () => {
  return (
    <S.Content>
      <S.Logo>Loja oficial de sapatos</S.Logo>
      <S.Navigation>
        <ul>
          <li>Início</li>
          <li>Sobre nós</li>
          <li>Contato</li>
          <li>
            Carrinho <CiShoppingCart size={25} />
          </li>
        </ul>
      </S.Navigation>
    </S.Content>
  );
};
