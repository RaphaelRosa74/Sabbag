import { motion } from "framer-motion";
import fotoPerfil from "@/assets/foto-perfil.jpeg"
import * as S from './styles'

const AboutSection = () => {
  return (
    <S.Section id="sobre">
      <S.Container>
        <S.Grid>
          <S.ImageWrapper>
            <S.ProfileImage src={fotoPerfil} alt="Gabriel Sabbag - Psicólogo" />
          </S.ImageWrapper>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <S.Title>Sobre Mim</S.Title>
              <S.TextBlock>
                <S.Paragraph>
                  Olá, meu nome é Gabriel, sou Psicólogo formado pela{" "}
                  <S.Strong>Universidade Presbiteriana Mackenzie</S.Strong> e
                  atualmente faço uma especialização em Terapia Comportamental e
                  Cognitiva em Saúde Mental pelo <S.Strong>Amban </S.Strong>
                  (Ambulatório de Ansiedade), no{" "}
                  <S.Strong>
                    Instituto de Psiquiatria do Hospital das Clínicas da
                    Faculdade de Medicina da Universidade de São Paulo
                  </S.Strong>
                   {" "}(IPQ HC FMUSP).
                </S.Paragraph>
                <S.Paragraph>Também atuo como pesquisador na mesma instituição, no <S.Strong>ADRE</S.Strong> (ambulatório para o desenvolvimento dos relacionamentos e das emoções), ambulatório que atende adolescentes com graves problemas de desregulação emocional.</S.Paragraph> 
                <S.Paragraph>
                  Através da minha experiência como psicólogo clínico e pesquisador, venho estudando, acompanhando e ajudando em diversos casos.
                  Atuo através da <S.Strong>Terapia Cognitivo Comportamental (TCC)</S.Strong> e da <S.Strong>Terapia de Aceitação e Compromisso (ACT)</S.Strong> (padrão ouro no tratamento de diversos transtornos como ansiedade, depressão, TDAH e bipolaridade).
                </S.Paragraph>
                <S.Paragraph>
                  Meu compromisso é integrar o conhecimento derivado de pesquisas a uma prática humana e individual. A partir dessa base, me dedico a te ajudar a compreender suas dificuldades de forma fundamentada, promover mudanças e caminhar em direção de objetivos pessoas valorizados.
                </S.Paragraph>
              </S.TextBlock>
            </div>
          </motion.div>
        </S.Grid>
      </S.Container>
    </S.Section>
  );
};

export default AboutSection;
