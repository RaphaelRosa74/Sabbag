import styled from "styled-components";

export const Section = styled.section`
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.background};
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const Grid = styled.div`
  display: grid;
  gap: 1rem;
  font-size: 14px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
    font-size: 15px;
    // gap: 0.6rem;
    gap: 1.6rem;
    word-spacing: 1px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ProfileImage = styled.img`
  width: 18rem;
  height: 22rem;
  object-fit: cover;
  border-radius: 1.25rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    // width: 22rem;
    // height: 26rem;
    width: 100%;
    height: 35rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: 1.5rem;
  display: inline-block;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary}66;

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
