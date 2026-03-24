import { useEffect, useRef } from "react";
import bridgeImg from "@/assets/bridge.jpg";
import earthworkImg from "@/assets/terraplanagem.svg";
import projectsImg from "@/assets/projects.jpg";
import highwayImg from "@/assets/prediais.svg";
import drainageImg from "@/assets/energia.svg";
import drainageSegmentImg from "@/assets/drenagem_segment.svg";
import limpezaUrbanaImg from "@/assets/limpeza_urbana.svg";
import manutencaoImg from "@/assets/manutencao.svg";
import oleoGasImg from "@/assets/oleo_gas.jpg";

const segments = [
  { title: "Gerenciamento e Consultoria", image: projectsImg, desc: "Planejamento, gestão e coordenação de obras" },
  { title: "Prediais", image: highwayImg, desc: "Execução e gestão de obras prediais" },
  { title: "Energia", image: drainageImg, desc: "Projetos de infraestrutura energética" },
  { title: "Obras de Arte Especiais", image: bridgeImg, desc: "Pontes, viadutos e estruturas especiais" },
  { title: "Terraplanagem", image: earthworkImg, desc: "Movimentação de terra e preparação de terrenos" },
  { title: "Drenagem", image: drainageSegmentImg, desc: "Sistemas de drenagem urbana e rodoviária" },
  { title: "Limpeza Urbana", image: limpezaUrbanaImg, desc: "Serviços de limpeza e conservação urbana" },
  { title: "Manutenção", image: manutencaoImg, desc: "Manutenção de infraestrutura e obras civis" },
  { title: "Óleo e Gás", image: oleoGasImg, desc: "Infraestrutura para o setor de óleo e gás" },
];

const SegmentsSection = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("segment-card-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="segmentos" className="section-padding bg-muted">
      <div className="container-max">
        {/* Desktop: grid / Mobile: horizontal scroll carousel */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map((segment) => (
            <div
              key={segment.title}
              className="group relative overflow-hidden rounded-lg cursor-pointer h-72 shadow-elevated"
            >
              <img
                src={segment.image}
                alt={segment.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent transition-all duration-300 group-hover:from-primary/80 group-hover:via-primary/40" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-primary-foreground mb-1">{segment.title}</h3>
                <p className="text-primary-foreground/70 text-sm">{segment.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: horizontal scroll-snap carousel */}
        <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 scrollbar-hide">
          {segments.map((segment, i) => (
            <div
              key={segment.title}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="segment-card group relative overflow-hidden rounded-lg cursor-pointer h-64 shadow-elevated snap-center shrink-0"
              style={{ width: "80vw", maxWidth: "340px" }}
            >
              <img
                src={segment.image}
                alt={segment.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-lg font-bold text-primary-foreground mb-1">{segment.title}</h3>
                <p className="text-primary-foreground/70 text-sm">{segment.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SegmentsSection;
