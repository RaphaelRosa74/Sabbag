import { motion } from "framer-motion";
import { MessageCircle, Mail, Instagram } from "lucide-react";
import * as S from './styles'

const ContactSection = () => {
  return (
    <S.Section id="contato">
      <S.Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <S.Title>Vamos Conversar?</S.Title>
          <S.Description>
            Dar o primeiro passo pode ser desafiador, mas estou aqui para te
            acolher. Entre em contato e vamos começar essa jornada juntos.
          </S.Description>

          <S.ButtonsRow>
            <S.PrimaryButton
              href="https://wa.me/5511921024433?text=Olá,+gostaria+de+mais+informações+sobre+as+sessões+de+psicoterapia."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} />
              <S.ButtonText>
                {/* <S.ButtonLabel>WhatsApp</S.ButtonLabel> */}
                <S.ButtonSub>(11) 92102-4433</S.ButtonSub>
              </S.ButtonText>
            </S.PrimaryButton>

            <S.SecondaryButton href="mailto:gabriel.g.sabbag@gmail.com">
              <Mail size={20} />
              <S.ButtonText>
                {/* <S.ButtonLabel>E-mail</S.ButtonLabel> */}
                <S.ButtonSub>gabriel.g.sabbag@gmail.com</S.ButtonSub>
              </S.ButtonText>
            </S.SecondaryButton>

            <S.SecondaryButton
              href="https://www.instagram.com/gabriel.g.sabbag/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={20} />
              <S.ButtonText>
                {/* <S.ButtonLabel>Instagram</S.ButtonLabel> */}
                <S.ButtonSub>@gabriel.g.sabbag</S.ButtonSub>
              </S.ButtonText>
            </S.SecondaryButton>
          </S.ButtonsRow>
        </motion.div>
      </S.Container>
    </S.Section>
  );
};

export default ContactSection;
