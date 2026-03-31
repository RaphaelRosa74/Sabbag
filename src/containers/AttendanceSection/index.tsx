import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import consultorio1 from "@/assets/consultorio1.jpeg";
import consultorio2 from "@/assets/consultorio2.jpeg";
import consultorio3 from "@/assets/connsultorio3.jpeg";
import * as S from "./styles";

const IMAGES = [consultorio1, consultorio2, consultorio3];
const WHATSAPP_LINK =
  "https://wa.me/5511921024433?text=Olá,+gostaria+de+agendar+uma+consulta.";

const AttendanceSection = () => {
  const [current, setCurrent] = useState(0);
  const next = useCallback(
    () => setCurrent((p) => (p + 1) % IMAGES.length),
    [],
  );
  const prev = useCallback(
    () => setCurrent((p) => (p - 1 + IMAGES.length) % IMAGES.length),
    [],
  );

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <S.Section id="atendimentos">
      <S.Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <S.Title>Atendimentos</S.Title>
          <S.TitleUnderline />
          <S.Subtitle>
            Além dos atendimentos online, ofereço sessões presenciais em
            consultório localizado em Santana, São Paulo.
          </S.Subtitle>
          <S.Grid>
            <S.CarouselWrapper>
              <S.CarouselImage
                src={IMAGES[current]}
                alt={`Consultório foto ${current + 1}`}
              />
              <S.PrevButton onClick={prev}>
                <ChevronLeft size={20} />
              </S.PrevButton>
              <S.NextButton onClick={next}>
                <ChevronRight size={20} />
              </S.NextButton>
              <S.Dots>
                {IMAGES.map((_, i) => (
                  <S.Dot
                    key={i}
                    $active={i === current}
                    onClick={() => setCurrent(i)}
                  />
                ))}
              </S.Dots>
            </S.CarouselWrapper>
            <S.MapWrapper>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.831832773778!2d-46.63400792502328!3d-23.50256595943412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef62ccfb0707d%3A0xda58a5ea90632aa!2sR.%20Dr.%20C%C3%A9sar%2C%20530%20-%20Conjunto%20406%20-%20Santana%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002013-002%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1774294989466!5m2!1spt-BR!2sus"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do consultório"
              />
            </S.MapWrapper>
          </S.Grid>
          <S.CtaWrapper>
            <S.CtaPrimary
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar size={18} />
              Agendar Consulta Presencial ou Online
            </S.CtaPrimary>
          </S.CtaWrapper>
        </motion.div>
      </S.Container>
    </S.Section>
  );
};

export default AttendanceSection;
