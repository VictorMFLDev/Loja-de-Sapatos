import * as S from "./style";

const Footer = () => {
  return (
    <S.Footer>
      <S.Content>
        <S.Logo>
          <h2>Calçado para a seu pé</h2>
          <p>
            Clique aqui e comece a digitar. Sed ut perspiciatis unde omnis iste.
          </p>
        </S.Logo>

        <S.Info>
          <S.Title>Informação</S.Title>
          <p> Política de Privacidade</p>
          <p>Termos e Condições</p>
        </S.Info>

        <S.Info>
          <S.Title>Calçado para a seu pé</S.Title>
          <p>Sobre nós</p>
          <p>Contacte-nos</p>
        </S.Info>

        <S.Contact>
          <p>E-mail: <strong>vm859222@gmail.com</strong></p>
          <p>Número de telefone: <strong>12345678</strong></p>
        </S.Contact>
      </S.Content>
    </S.Footer>
  );
};

export default Footer;
