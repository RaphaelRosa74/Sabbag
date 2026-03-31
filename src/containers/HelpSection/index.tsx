import { motion } from "framer-motion";
import * as S from "./styles";

const HelpSection = () => {
  return (
    <S.Section id="ajuda">
      <S.Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <S.Title>Como irei te ajudar</S.Title>

          <S.TextBlock>
            <S.Paragraph>
              Em diferentes momentos da vida, podemos nos sentir atravessados por ansiedade, tristeza persistente, conflitos internos ou dificuldades nos relacionamentos. Questões ligadas à forma como nos percebemos, nos relacionamos e vivemos nossa afetividade e sexualidade também podem gerar sofrimento e impactar significativamente o bem-estar emocional. Quando essas experiências se tornam intensas ou recorrentes, buscar psicoterapia pode ser um passo importante de cuidado consigo.
            </S.Paragraph>
            <S.Paragraph>
              A psicoterapia oferece um espaço seguro e ético para compreender essas vivências com profundidade. A partir dos avanços das pesquisas, é possível trabalhar de forma fundamentada para reunir ferramentas e recursos para promover autonomia e auxiliar no enfrentamento dos problemas emocionais. <S.Strong>O foco não está apenas nos sintomas, mas no sentido que essas experiências assumem na história de cada pessoa.</S.Strong>
            </S.Paragraph>
            <S.Paragraph>
              Meu trabalho é oferecer um acompanhamento atento e individualizado, considerando que o sofrimento humano se constrói na interação entre fatores psicológicos, biológicos e sociais. Ao longo do processo terapêutico, <S.Strong>buscamos desenvolver formas mais conscientes, flexíveis e funcionais de lidar com as experiências, fortalecendo recursos internos, promovendo autonomia e construindo uma vida com mais sentido.</S.Strong> 
            </S.Paragraph>
            <S.QuoteText>
              Você não precisa enfrentar esse processo sozinho.
            </S.QuoteText>
          </S.TextBlock>

          <S.CtaLink
            href="https://wa.me/5511921024433?text=Olá,+gostaria+de+agendar+uma+consulta."
            target="_blank"
            rel="noopener noreferrer"
          >
            Quero começar minha jornada
          </S.CtaLink>
        </motion.div>
      </S.Container>
    </S.Section>
  );
};

export default HelpSection;
