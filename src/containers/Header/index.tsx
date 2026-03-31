import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { Logo as LogoImg } from '@/utils/logo'
import { useIsMobile } from "@/hooks/use-mobile";
import * as S from './styles'

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre mim", href: "#sobre" },
  { label: "Abordagem", href: "#ajuda" },
  { label: "Para quem", href: "#para-quem" },
  { label: "Atendimentos", href: "#atendimentos" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <S.HeaderWrapper $scrolled={scrolled}>
      <S.HeaderInner>
        <S.LinkLogo href="#inicio">
          <LogoImg />
        </S.LinkLogo>

        <S.DesktopNav>
          {navLinks.map((l) => (
            <S.NavItem key={l.href} href={l.href}>
              {l.label}
            </S.NavItem>
          ))}
          <S.CtaButton
            href="https://wa.me/5511921024433?text=Olá,+gostaria+de+agendar+uma+consulta."
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar consulta
          </S.CtaButton>
        </S.DesktopNav>

        <S.MobileButton onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </S.MobileButton>
      </S.HeaderInner>

      <AnimatePresence>
        {mobileOpen && (
          <S.MobileNav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <S.MobileNavInner>
              {navLinks.map((l) => (
                <S.MobileNavItem
                  key={l.href}
                  href={l.href}
                >
                  {l.label}
                </S.MobileNavItem>
              ))}
              <S.MobileCtaButton
                href="https://wa.me/5511921024433?text=Olá,+gostaria+de+agendar+uma+consulta."
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar consulta
              </S.MobileCtaButton>
            </S.MobileNavInner>
          </S.MobileNav>
        )}
      </AnimatePresence>
    </S.HeaderWrapper>
  );
};

export default Header;
