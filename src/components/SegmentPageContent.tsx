import { CheckCircle, MessageCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SegmentPageContentProps {
  institutionalParagraphs: string[];
  solutions: { title: string; items: string[] };
  differentials: { title: string; items: string[] };
  efficiency: { intro: string; items: string[]; outro: string };
  
  backgroundImage?: string;
  solutionsImage?: string;
  differentialsImage?: string;
  efficiencyImage?: string;
  ctaImage?: string;
}

const CheckItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-3">
    <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "#23B5EB" }} />
    <span className="text-primary-foreground/90 text-sm md:text-base text-justify">{text}</span>
  </li>
);

const SegmentPageContent = ({
  institutionalParagraphs,
  solutions,
  differentials,
  efficiency,
  backgroundImage,
  solutionsImage,
  differentialsImage,
  efficiencyImage,
  ctaImage,
}: SegmentPageContentProps) => {
  return (
    <>
      {/* INSTITUTIONAL */}
      <section className="relative overflow-hidden py-16 md:py-20">
        {backgroundImage ? (
          <>
            <img
              src={backgroundImage}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-[#0A0F2C]/60" />
          </>
        ) : (
          <div className="absolute inset-0 bg-[#0A0F2C]" />
        )}
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <div className="bg-[#0A0F2C]/70 backdrop-blur-sm rounded-xl border border-white/10 p-8 md:p-10">
            <p className="text-xs uppercase tracking-widest text-blue-500 mb-4 text-center">Sobre</p>
            {institutionalParagraphs.map((p, i) => (
              <p key={i} className="text-primary-foreground/80 text-base md:text-lg leading-relaxed mb-4 last:mb-0 text-justify">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="bg-[#060B1A] py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-xs uppercase tracking-widest text-blue-500 mb-3 text-center">Soluções</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground text-center mb-10">
            {solutions.title}
          </h2>
          <div className={`${solutionsImage ? "grid lg:grid-cols-[1fr_380px] gap-10 items-center" : ""}`}>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {solutions.items.map((item, i) => (
                <CheckItem key={i} text={item} />
              ))}
            </ul>
            {solutionsImage && (
              <img
                src={solutionsImage}
                alt="Soluções"
                width={800}
                height={450}
                className="rounded-xl shadow-lg shadow-black/30 w-full object-cover aspect-video mt-8 lg:mt-0"
                loading="lazy"
                decoding="async"
              />
            )}
          </div>
        </div>
      </section>

      {/* DIFFERENTIALS */}
      <section className="bg-[#0A0F2C] py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-xs uppercase tracking-widest text-blue-500 mb-3 text-center">Diferenciais</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground text-center mb-10">
            {differentials.title}
          </h2>
          <div className={`${differentialsImage ? "grid lg:grid-cols-[380px_1fr] gap-10 items-center" : ""}`}>
            {differentialsImage && (
              <img
                src={differentialsImage}
                alt="Diferenciais"
                width={800}
                height={450}
                className="rounded-xl shadow-lg shadow-black/30 w-full object-cover aspect-video mb-8 lg:mb-0"
                loading="lazy"
                decoding="async"
              />
            )}
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {differentials.items.map((item, i) => (
                <CheckItem key={i} text={item} />
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* EFFICIENCY */}
      <section className="bg-[#060B1A] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs uppercase tracking-widest text-blue-500 mb-3 text-center">Eficiência Operacional</p>
          <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed text-justify mb-8">
            {efficiency.intro}
          </p>
          {efficiencyImage && (
            <img
              src={efficiencyImage}
              alt="Eficiência Operacional"
              width={800}
              height={450}
              className="rounded-xl shadow-lg shadow-black/30 w-full object-cover aspect-video mb-8 max-w-2xl mx-auto"
              loading="lazy"
              decoding="async"
            />
          )}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {efficiency.items.map((item, i) => (
              <CheckItem key={i} text={item} />
            ))}
          </ul>
          <p className="text-primary-foreground/70 text-base leading-relaxed text-justify">
            {efficiency.outro}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-16 md:py-20">
        {ctaImage ? (
          <>
            <img
              src={ctaImage}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-[#050816]/60" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 gradient-primary" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-transparent" />
          </>
        )}
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <div className="bg-[#050816]/70 backdrop-blur-sm rounded-xl border border-white/10 p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              ENGENHARIA PARA SUPERAR GRANDES DESAFIOS
            </h2>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-xl mx-auto mb-8">
              Otimize seus processos, reduza custos e aumente a eficiência operacional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary-foreground text-primary font-semibold px-8 py-6 text-base hover:bg-primary-foreground/90">
                <MessageCircle size={20} className="mr-2" />
                WhatsApp
              </Button>
            </a>
            <a href="mailto:contato@construtoraeixo.com.br?subject=Solicitação de Orçamento">
              <Button size="lg" variant="outline" className="border-blue-glow/50 text-blue-glow hover:bg-primary-foreground/10 hover:text-primary-foreground font-semibold px-8 py-6 text-base">
                <FileText size={20} className="mr-2" />
                Solicitar Orçamento
              </Button>
            </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SegmentPageContent;
