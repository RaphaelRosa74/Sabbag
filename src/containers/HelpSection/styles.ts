import styled from "styled-components";

export const Section = styled.section`
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.secondary};
`;

export const Container = styled.div`
  max-width: 56rem;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.25rem;
  }
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  line-height: 1.7;
`;

export const Strong = styled.strong`
  color: ${({ theme }) => theme.colors.foreground};
`;

export const QuoteText = styled.p`
  color: ${({ theme }) => theme.colors.foreground};
  font-weight: 500;
  font-style: italic;
  font-size: 1.125rem;
`;

export const CtaLink = styled.a`
  display: inline-block;
  margin-top: 2.5rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryForeground};
  padding: 0.875rem 2rem;
  border-radius: 9999px;
  font-weight: 500;
  font-size: 0.875rem;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;