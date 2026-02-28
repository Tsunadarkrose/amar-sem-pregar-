/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from "react";
import { motion } from "motion/react";
import {
  Heart,
  Brain,
  BookOpen,
  MessageCircle,
  Stethoscope,
  ShieldCheck,
  Lock,
  Zap,
  Check,
  X,
} from "lucide-react";

const FadeIn = ({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  key?: React.Key;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-bg-warm text-text-primary overflow-x-hidden font-sans">
      {/* SECTION 1: HERO */}
      <section className="relative px-6 py-20 md:py-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <FadeIn className="flex flex-col items-start">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <span className="mr-2">🙏</span> Para mães cristãs que não
              desistem
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-text-primary mb-6 font-serif">
              Aprenda a Amar o Seu Filho Sem Pregar Para a Dor Dele
            </h1>
            <p className="text-lg md:text-xl text-text-secondary mb-4 leading-relaxed">
              O guia que ensina a mãe cristã a acolher a dor do filho, desarmar
              a culpa e reconquistar a confiança dele — sem abandonar a sua fé.
            </p>
            <p className="text-base italic text-primary mb-10">
              "Porque ele não está rejeitando a Deus. Ele está rejeitando a
              culpa."
            </p>

            <motion.button
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(107,66,38,0.05)",
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto bg-transparent border-2 border-primary text-primary px-9 py-3.5 rounded-xl font-bold text-lg transition-colors"
            >
              Quero Reconquistar Meu Filho → R$47
            </motion.button>

            <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-success-green font-medium">
              <span className="flex items-center">
                <Check className="w-4 h-4 mr-1" /> Acesso imediato
              </span>
              <span className="hidden sm:inline text-success-green/30">•</span>
              <span className="flex items-center">
                <Check className="w-4 h-4 mr-1" /> Pagamento seguro
              </span>
              <span className="hidden sm:inline text-success-green/30">•</span>
              <span className="flex items-center">
                <Check className="w-4 h-4 mr-1" /> Satisfação garantida
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 mix-blend-overlay"></div>
              <img
                src="https://picsum.photos/seed/motherhood-door/800/1000?blur=2"
                alt="Mãe na porta do quarto"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 2: DOR */}
      <section className="py-24 bg-bg-white px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
              Você se reconhece aqui?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-16 font-serif text-text-primary">
              Você já tentou de tudo e a porta continua fechada.
            </h2>
          </FadeIn>

          <div className="space-y-8 mb-16">
            {[
              "Você lê versículos para ele e recebe silêncio em resposta.",
              "Você chora no travesseiro para ninguém ouvir.",
              "Você se pergunta se falhou como mãe.",
              "Você ama demais para desistir, mas não sabe mais o que fazer.",
            ].map((quote, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <p className="text-xl md:text-2xl italic text-primary font-serif">
                  "{quote}"
                </p>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5}>
            <p className="text-lg text-text-primary font-medium">
              Se você sentiu um aperto no peito lendo isso, este guia foi
              escrito para você.
            </p>
            <div className="mt-12 flex justify-center">
              <div className="w-24 h-px bg-primary/20"></div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 3: SOLUÇÃO */}
      <section className="py-24 px-6 bg-bg-warm">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
              O que você vai aprender
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-text-primary">
              5 Capítulos Que Vão Mudar a Forma Como Você Ama
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              {
                icon: Heart,
                title: "Por Que o Seu Amor Está Afastando Ele",
                desc: "Descubra o 'Efeito Jó' — como suas palavras de fé chegam como julgamento na mente adoecida do seu filho, e como mudar isso.",
              },
              {
                icon: Brain,
                title: "O Que Ele Realmente Sente Naquele Quarto",
                desc: "Um raio-x da mente adoecida. O silêncio dele não é rebeldia — é um grito de socorro sem som. Entenda o que está acontecendo.",
              },
              {
                icon: BookOpen,
                title: "Quando Deus Usou Pão e Não Sermão",
                desc: "Como Deus curou o profeta Elias com descanso e comida — e o que isso te ensina sobre cuidar do seu filho hoje.",
              },
            ].map((item, i) => (
              <FadeIn
                key={i}
                delay={0.1 * i}
                className="bg-bg-white p-8 rounded-2xl shadow-[0_2px_24px_rgba(107,66,38,0.06)] hover:shadow-[0_8px_32px_rgba(107,66,38,0.12)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-primary font-sans">
                  {item.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </FadeIn>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: MessageCircle,
                title: "As Frases Que Curam e as Que Afastam",
                desc: "Um manual prático com as frases exatas para dizer, as que você precisa apagar do vocabulário e o poder do silêncio sagrado.",
              },
              {
                icon: Stethoscope,
                title: "Fé e Ciência Caminhando Juntas",
                desc: "Como ser o anjo de Deus na vida dele — orando no secreto e agindo com sabedoria no mundo físico. Seu novo plano de ação.",
              },
            ].map((item, i) => (
              <FadeIn
                key={i + 3}
                delay={0.1 * i}
                className="bg-bg-white p-8 rounded-2xl shadow-[0_2px_24px_rgba(107,66,38,0.06)] hover:shadow-[0_8px_32px_rgba(107,66,38,0.12)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-primary font-sans">
                  {item.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: PROVA BÍBLICA */}
      <section className="py-24 px-6 bg-bg-deep text-text-on-dark">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="text-accent text-[120px] leading-none font-serif opacity-80 mb-[-40px]">
              "
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif leading-tight mb-6">
              Deus não usou sermão para curar Elias. Ele mandou pão, água e
              descanso.
            </h2>
            <p className="text-accent/80 text-sm tracking-wide uppercase">
              — 1 Reis 19 · A base bíblica deste guia
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="flex flex-col items-start">
            <p className="text-lg leading-relaxed mb-10 text-text-on-dark/90">
              Este guia não veio para atacar a sua fé. Ele veio mostrar que a
              própria Bíblia nos ensina a lidar com a dor profunda da alma — com
              cuidado, paciência e presença, não com cobranças.
            </p>
            <div className="w-48 h-48 rounded-2xl overflow-hidden opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500">
              <img
                src="https://picsum.photos/seed/bible-bread/400/400?blur=1"
                alt="Bíblia e Pão"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 5: TRANSFORMAÇÃO */}
      <section className="py-24 px-6 bg-bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-text-primary">
              A mudança que este guia provoca
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Antes */}
            <FadeIn className="bg-bg-warm/50 p-8 md:p-10 rounded-3xl border border-primary/5">
              <div className="inline-block px-4 py-1.5 rounded-full bg-red-900/5 text-red-800 text-sm font-semibold mb-8">
                Antes do guia
              </div>
              <ul className="space-y-6">
                {[
                  "Você entra no quarto dele com versículos e sai com o coração partido",
                  "Você não sabe o que dizer sem parecer que está pregando",
                  "Você se sente culpada e sozinha nessa luta",
                  "Você tem medo de que buscar ajuda médica seja falta de fé",
                  "A distância entre vocês dois parece crescer a cada dia",
                ].map((text, i) => (
                  <li key={i} className="flex items-start text-text-secondary">
                    <X className="w-5 h-5 text-red-700/60 mr-4 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* Depois */}
            <FadeIn
              delay={0.2}
              className="bg-bg-warm p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgba(107,66,38,0.08)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="relative z-10">
                <div className="inline-block px-4 py-1.5 rounded-full bg-success-green/10 text-success-green text-sm font-semibold mb-8">
                  Depois do guia
                </div>
                <ul className="space-y-6">
                  {[
                    "Você sabe exatamente o que dizer (e o que nunca mais dizer)",
                    "Você entende o que acontece na mente dele — e para de se culpar",
                    "Você se torna o porto seguro que ele precisa para voltar à vida",
                    "Você combina oração no secreto com cuidado médico sem culpa",
                    "A confiança entre vocês começa a se reconstruir",
                  ].map((text, i) => (
                    <li
                      key={i}
                      className="flex items-start text-text-primary font-medium"
                    >
                      <Check className="w-5 h-5 text-success-green mr-4 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 6: OFERTA */}
      <section className="py-24 px-6 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <div className="inline-block px-4 py-1.5 rounded-full bg-accent text-primary font-bold text-sm mb-8">
              Acesso imediato
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-text-on-dark mb-12">
              Reconquiste a Confiança do Seu Filho Hoje
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-12">
              <div className="w-64 h-80 rounded-lg shadow-2xl bg-bg-deep overflow-hidden border-4 border-bg-deep">
                <img
                  src="https://picsum.photos/seed/ebook-cover/600/800"
                  alt="Ebook Amar Sem Pregar"
                  className="w-full h-full object-cover opacity-90"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="text-left text-text-on-dark">
                <p className="text-accent/90 uppercase tracking-wider text-sm font-semibold mb-2">
                  Investimento único
                </p>
                <div className="text-6xl font-bold font-serif mb-2">
                  R$ 47,00
                </div>
                <p className="text-text-on-dark/80 italic mb-8">
                  Menos que uma consulta. Mais que um sermão.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-accent mr-3" /> Acesso
                    imediato após o pagamento
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-accent mr-3" /> Leia no
                    celular, tablet ou computador
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-accent mr-3" /> Pagamento
                    100% seguro
                  </li>
                </ul>
              </div>
            </div>

            <motion.button
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(255,255,255,0.4)",
                  "0 0 0 15px rgba(255,255,255,0)",
                  "0 0 0 0 rgba(255,255,255,0)",
                ],
              }}
              transition={{ repeat: Infinity, duration: 4, times: [0, 0.5, 1] }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-bg-white text-primary px-10 py-5 rounded-xl font-bold text-xl shadow-xl w-full sm:w-auto"
            >
              Quero Amar Sem Pregar → Comprar Agora
            </motion.button>

            <div className="mt-8 flex items-center justify-center text-text-on-dark/80 text-sm">
              <Lock className="w-4 h-4 mr-2" />7 dias de garantia — se não
              transformar sua relação com ele, devolvemos tudo
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 7: SEGURANÇA */}
      <section className="py-20 px-6 bg-bg-warm">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif text-text-primary">
              Sua compra é 100% segura
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Garantia de 7 dias",
                desc: "Se você não sentir que este guia vale cada centavo, basta nos enviar um email e devolvemos tudo. Sem perguntas.",
              },
              {
                icon: Lock,
                title: "Pagamento Seguro",
                desc: "Processado pela Hotmart/Kiwify com criptografia SSL. Os mesmos padrões do seu internet banking.",
              },
              {
                icon: Zap,
                title: "Acesso Imediato",
                desc: "Assim que o pagamento for confirmado, você recebe o link de acesso no seu email em segundos.",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={0.1 * i} className="text-center p-6">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-text-primary">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.desc}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: FOOTER */}
      <footer className="bg-bg-deep text-text-on-dark/60 py-12 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-accent font-serif text-2xl font-bold mb-2">
              Amar Sem Pregar
            </div>
            <p className="text-sm">
              O guia da mãe cristã que ama sem desistir.
            </p>
          </div>

          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-accent transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Contato
            </a>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-12 text-center text-xs opacity-50">
          © 2025 Amar Sem Pregar · Todos os direitos reservados
        </div>
      </footer>
    </div>
  );
}
