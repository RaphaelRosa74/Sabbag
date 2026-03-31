import { motion } from "framer-motion";
import gabrielPhoto from "@/assets/gabriel-photo.jpeg";
import * as S from "./styles";

const HeroSection = () => {
  return (
    <S.Section id="inicio">
      <S.Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <S.Title>
            <S.Highlight>Terapia Cognitivo-Comportamental (TCC):</S.Highlight>{" "}
            integrando ciência e humanidade no cuidado em saúde emocional.
          </S.Title>
          <S.Quote>
            Psicoterapia para adultos e adolescentes com atenção aos processos
            que atravessam sua história, promovendo escuta qualificada e um
            espaço seguro para transformar suas experiências.
          </S.Quote>
          <S.CtaLink
            href="https://wa.me/5511921024433?text=Olá,+gostaria+de+agendar+uma+consulta."
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar consulta
          </S.CtaLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <S.PhotoWrapper>
            <S.PhotoCircle>
              <img src={gabrielPhoto} alt="Gabriel Sabbag - Psicólogo" />
            </S.PhotoCircle>
          </S.PhotoWrapper>
        </motion.div>
      </S.Container>
    </S.Section>
  );
};

export default HeroSection;
