import { motion } from "framer-motion";
import { Brain, HeartPulse, Sparkles, Users } from "lucide-react";
import * as S from "./styles";

const items = [
  {
    icon: Brain,
    title: "Diagnósticos clínicos",
    description:
      "Desenvolvimento de recursos emocionais para lidar com desafios clínicos, promovendo autonomia e direção a objetivos pessoais.",
  },
  {
    icon: HeartPulse,
    title: "Sofrimento persistente",
    description:
      "Quando surgem mudanças emocionais como cansaço frequente, perda de interesse ou pensamentos negativos recorrentes.",
  },
  {
    icon: Sparkles,
    title: "Autoconhecimento",
    description:
      "Espaço para compreender seus padrões emocionais e comportamentais, desenvolvendo maior consciência sobre si.",
  },
  {
    icon: Users,
    title: "Qualidade de vida",
    description:
      "Relações mais saudáveis, melhor comunicação e maior equilíbrio emocional no dia a dia.",
  },
];

const ForWhomSection = () => {
  return (
    <S.Section id="para-quem">
      <S.Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <S.Title>Para quem a Psicoterapia é indicada</S.Title>
          <S.Subtitle>
            A terapia pode ajudar em diferentes contextos:
          </S.Subtitle>
          <S.Grid>
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <S.Card>
                  <S.CardHeader>
                    <S.IconWrapper>
                      <item.icon size={28} />
                    </S.IconWrapper>
                    <S.CardTitle>{item.title}</S.CardTitle>
                  </S.CardHeader>
                  <S.CardDescription>{item.description}</S.CardDescription>
                </S.Card>
              </motion.div>
            ))}
          </S.Grid>
        </motion.div>
      </S.Container>
    </S.Section>
  );
};

export default ForWhomSection;
