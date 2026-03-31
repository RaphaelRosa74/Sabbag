import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.secondary};
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 6rem 1.5rem 4rem;
  width: 100%;
  display: grid;
  gap: 3rem;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.15;
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: 1.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 3rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1.9rem;
  }
`;

export const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Subtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.mutedForeground};
  margin-bottom: 1rem;
  max-width: 32rem;
  line-height: 1.7;
`;

export const Quote = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.mutedForeground};
  margin-bottom: 2rem;
  max-width: 32rem;
  font-style: italic;
`;

export const CtaLink = styled.a`
  display: block;
  width: fit-content;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryForeground};
  padding: 0.875rem 2rem;
  border-radius: 9999px;
  font-weight: 500;
  font-size: 0.875rem;
  transition: opacity 0.2s;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: inline-block;
    margin: 0;
  }

  &:hover {
    opacity: 0.9;
  }
`;

export const PhotoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const PhotoCircle = styled.div`
  position: relative;
  width: 18rem;
  height: 18rem;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid ${({ theme }) => theme.colors.background};
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 24rem;
    height: 24rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
