import styled from "styled-components";

export const Section = styled.section`
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryForeground};
`;

export const Container = styled.div`
  max-width: 56rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.25rem;
  }
`;

export const Description = styled.p`
  opacity: 0.8;
  margin-bottom: 2.5rem;
  font-size: 1.125rem;
  max-width: 36rem;
  margin-left: auto;
  margin-right: auto;
`;

export const ButtonsRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: row;
  }
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: ${({ theme }) => theme.colors.primaryForeground};
  color: ${({ theme }) => theme.colors.primary};
  padding: 1rem 2rem;
border-radius: 9999px;
  font-weight: 700;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: ${({ theme }) => theme.colors.primaryForeground};
  padding: 1rem 2rem;
  font-weight: 700;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const ButtonText = styled.div`
  text-align: left;
`;

// export const ButtonLabel = styled.span`
//   display: block;
//   font-weight: 700;
// `;

export const ButtonSub = styled.span`
  display: block;
  font-size: 0.75rem;
  opacity: 0.7;
`;