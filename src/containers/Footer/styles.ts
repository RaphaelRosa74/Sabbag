import styled from "styled-components";

export const FooterWrapper = styled.footer`
  padding: 1.6rem 0;
  background: ${({ theme }) => theme.colors.foreground};
  color: rgba(245, 243, 227, 0.6);
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: left;
  }
`;

export const FooterInner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const FooterText = styled.p`
  font-size: 0.875rem;
  margin: 0;
`;