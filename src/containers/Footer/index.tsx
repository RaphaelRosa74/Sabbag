import * as S from './styles'

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.FooterInner>
        <S.FooterText>
          © {new Date().getFullYear()} Gabriel Sabbag — CRP 06/211441. Todos os
          direitos reservados.
        </S.FooterText>
      </S.FooterInner>
    </S.FooterWrapper>
  );
};

export default Footer;
