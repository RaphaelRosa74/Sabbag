import styled from "styled-components";

export const Section = styled.section`
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.secondary};
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.foreground};
  text-align: center;
  margin-bottom: 0.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.25rem;
  }
`;

export const TitleUnderline = styled.div`
  width: 3rem;
  height: 3px;
  background: ${({ theme }) => theme.colors.primary};
  margin: 0 auto 1rem;
`;

export const Subtitle = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.mutedForeground};
  margin-bottom: 3rem;
  max-width: 36rem;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

export const Grid = styled.div`
  display: grid;
  gap: 2rem;
  align-items: stretch;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const MapWrapper = styled.div`
  border-radius: ${({ theme }) => theme.radius};
  overflow: hidden;
  height: 100%;
  min-height: 300px;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    min-height: 300px;
  }
`;

export const CtaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin-top: 3rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const CtaButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 9999px;
  font-weight: 500;
  font-size: 0.95rem;
  transition: opacity 0.2s;
  text-align: center;

  &:hover {
    opacity: 0.85;
  }
`;

export const CtaPrimary = styled(CtaButton)`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryForeground};
`;

export const CtaSecondary = styled(CtaButton)`
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
`;

export const CarouselWrapper = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.radius};
  overflow: hidden;
  aspect-ratio: 4 / 3;
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.4);
  color: white;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;
  &:hover { background: rgba(0, 0, 0, 0.6); }
`;

export const PrevButton = styled(CarouselButton)`left: 0.75rem;`;
export const NextButton = styled(CarouselButton)`right: 0.75rem;`;

export const Dots = styled.div`
  position: absolute;
  bottom: 0.75rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
`;

export const Dot = styled.button<{ $active: boolean }>`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: ${({ $active }) => ($active ? "#fff" : "rgba(255,255,255,0.5)")};
  transition: background 0.2s;
`;