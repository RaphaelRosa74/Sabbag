import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled.section`
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.secondary};
`;

export const Container = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: 0.75rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.25rem;
  }
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  margin-bottom: 2.5rem;
`;

export const AccordionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const AccordionItem = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0 1.5rem;
  overflow: hidden;
`;

export const AccordionTrigger = styled.button<{ $open: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 0;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-weight: 500;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.foreground};
  font-family: ${({ theme }) => theme.fonts.body};

  svg {
    flex-shrink: 0;
    transition: transform 0.2s;
    transform: rotate(${({ $open }) => ($open ? "180deg" : "0deg")});
    color: ${({ theme }) => theme.colors.mutedForeground};
  }
`;

export const AccordionContent = styled(motion.div)`
  color: ${({ theme }) => theme.colors.mutedForeground};
  line-height: 1.7;
  padding-bottom: 1.25rem;
  font-size: 0.9375rem;
`;