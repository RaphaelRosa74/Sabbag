import { motion } from "framer-motion";
import styled from "styled-components";

export const HeaderWrapper = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  transition: all 0.3s ease;
  background: ${({ $scrolled, theme }) =>
    $scrolled ? `${theme.colors.background}f2` : "transparent"};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? "blur(12px)" : "none")};
  box-shadow: ${({ $scrolled }) =>
    $scrolled ? "0 1px 3px rgba(0,0,0,0.08)" : "none"};
`;

export const HeaderInner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LinkLogo = styled.a`
 display: flex;
 align-items: center;
 justify-content: center;

 svg {
  width: 150px;
  height: 50px;
 }
`

export const Logo = styled.img`
  height: 3.5rem;
  object-fit: contain;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 4rem;
  }
`;

export const DesktopNav = styled.nav`
  display: none;
  align-items: center;
  gap: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`;

export const NavItem = styled.a`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.mutedForeground};
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.foreground};
  }
`;

export const CtaButton = styled.a`
  font-size: 0.875rem;
  font-weight: 500;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryForeground};
  padding: 0.625rem 1.25rem;
  border-radius: 9999px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export const MobileButton = styled.button`
  display: block;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.foreground};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const MobileNav = styled(motion.nav)`
  background: ${({ theme }) => theme.colors.background}fa;
  backdrop-filter: blur(12px);
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const MobileNavInner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  gap: 1rem;
`;

export const MobileNavItem = styled.a`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.mutedForeground};
  transition: color 0.2s;
`;

export const MobileCtaButton = styled(CtaButton)`
  text-align: center;
`;