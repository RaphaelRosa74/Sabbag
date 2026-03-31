import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import * as S from './styles'

const faqs = [
  {
    q: "Como funciona a primeira sessão?",
    a: "A primeira sessão é um momento de acolhimento e escuta. Vamos conversar sobre o que te trouxe até a terapia, entender sua história e definir juntos os objetivos do processo terapêutico.",
  },
  {
    q: "Qual a duração e frequência das sessões?",
    a: "As sessões têm duração de 50 minutos e a frequência recomendada é semanal. No entanto, podemos ajustar conforme sua necessidade e disponibilidade.",
  },
  {
    q: "A terapia online é tão eficaz quanto a presencial?",
    a: "Sim! Diversas pesquisas demonstram que a terapia online é tão eficaz quanto a presencial. O mais importante é a qualidade da relação terapêutica e o seu engajamento no processo.",
  },
  {
    q: "Quanto tempo dura o processo terapêutico?",
    a: "A duração varia de pessoa para pessoa e depende dos objetivos e da complexidade das questões trabalhadas. Não existe um prazo fixo — o processo é contínuo e respeitamos o seu ritmo.",
  },
  {
    q: "Como sei se preciso de terapia?",
    a: "Se você sente que algo não vai bem emocionalmente, se tem dificuldade em lidar com situações do dia a dia ou simplesmente quer se conhecer melhor, a terapia pode te ajudar.",
  },
  {
    q: "As informações das sessões são confidenciais?",
    a: "Sim, absolutamente. O sigilo é um dos pilares fundamentais da psicologia. Tudo o que é compartilhado nas sessões é protegido pelo Código de Ética Profissional do Psicólogo.",
  },
  {
    q: "Qual a diferença entre psicólogo e psiquiatra?",
    a: "O psicólogo trabalha com psicoterapia, utilizando técnicas e abordagens para promover saúde mental. O psiquiatra é médico e pode prescrever medicamentos. Muitas vezes, o trabalho conjunto é recomendado.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "O pagamento é feito por sessão e pode ser realizado via Pix ou transferência bancária. Não trabalho com convênios, mas emito recibo para reembolso junto ao plano de saúde.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <S.Section id="faq">
      <S.Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <S.Title>Perguntas Frequentes</S.Title>
          <S.Subtitle>Tire suas dúvidas sobre o processo terapêutico</S.Subtitle>

          <S.AccordionList>
            {faqs.map((faq, i) => (
              <S.AccordionItem key={i}>
                <S.AccordionTrigger
                  $open={openIndex === i}
                  onClick={() => toggle(i)}
                >
                  {faq.q}
                  <ChevronDown size={18} />
                </S.AccordionTrigger>
                {openIndex === i && (
                  <S.AccordionContent
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {faq.a}
                  </S.AccordionContent>
                )}
              </S.AccordionItem>
            ))}
          </S.AccordionList>
        </motion.div>
      </S.Container>
    </S.Section>
  );
};

export default FAQSection;
