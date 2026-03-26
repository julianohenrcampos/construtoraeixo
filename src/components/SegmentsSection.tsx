import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import bridgeImg from "@/assets/bridge.jpg?w=800&format=webp&quality=75";
import earthworkImg from "@/assets/terraplanagem.svg";
import projectsImg from "@/assets/projects.jpg?w=800&format=webp&quality=75";
import highwayImg from "@/assets/prediais.svg";
import drainageImg from "@/assets/energia.svg";
import drainageSegmentImg from "@/assets/drenagem_segment.svg";
import limpezaUrbanaImg from "@/assets/limpeza_urbana.svg";
import manutencaoImg from "@/assets/manutencao.svg";
import oleoGasImg from "@/assets/oleo_gas.jpg?w=800&format=webp&quality=75";
import imagemObraImg from "@/assets/imagem_obra.svg";
import aterroImg from "@/assets/segments/aterro_solutions.jpg?w=800&format=webp&quality=75";
import pedreiraImg from "@/assets/segments/pedreira_solutions.jpg?w=800&format=webp&quality=75";
import cbuqImg from "@/assets/segments/cbuq_solutions.jpg?w=800&format=webp&quality=75";

const segments = [
  { title: "Infraestrutura / Gerenciamento", image: projectsImg, desc: "Planejamento, gestão e coordenação de obras.", href: "/infraestrutura" },
  { title: "Obras e Serviços", image: imagemObraImg, desc: "Execução de obras civis e serviços especializados.", href: "/obras-servicos" },
  { title: "Obras Prediais", image: highwayImg, desc: "Execução e gestão de obras prediais.", href: "/prediais" },
  { title: "Aterro de Agregados", image: aterroImg, desc: "Produção e fornecimento de agregados minerais.", href: "/aterro-agregados" },
  { title: "Pedreira", image: pedreiraImg, desc: "Extração e beneficiamento de rocha.", href: "/pedreira" },
  { title: "Usina de CBUQ", image: cbuqImg, desc: "Produção de concreto betuminoso usinado a quente.", href: "/usina-cbuq" },
  { title: "Energia", image: drainageImg, desc: "Projetos de infraestrutura energética." },
  { title: "Obras de Arte Especiais", image: bridgeImg, desc: "Pontes, viadutos e estruturas especiais." },
  { title: "Terraplanagem", image: earthworkImg, desc: "Movimentação de terra e preparação de terrenos." },
  { title: "Drenagem", image: drainageSegmentImg, desc: "Sistemas de drenagem urbana e rodoviária." },
  { title: "Limpeza Urbana", image: limpezaUrbanaImg, desc: "Serviços de limpeza e conservação urbana." },
  { title: "Manutenção", image: manutencaoImg, desc: "Manutenção de infraestrutura e obras civis." },
  { title: "Óleo e Gás", image: oleoGasImg, desc: "Infraestrutura para o setor de óleo e gás." },
];

const CardContent = ({ segment }: { segment: typeof segments[number] }) => (
  <>
    <img
      src={segment.image}
      alt={segment.title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      loading="lazy"
      decoding="async"
      width={800}
      height={600}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent transition-all duration-300 group-hover:from-primary/80 group-hover:via-primary/40" />
    <div className="absolute bottom-0 left-0 right-0 p-6">
      <h3 className="text-xl font-bold text-primary-foreground mb-1">{segment.title}</h3>
      <p className="text-primary-foreground/70 text-sm">{segment.desc}</p>
    </div>
  </>
);

const MobileCardContent = ({ segment }: { segment: typeof segments[number] }) => (
  <>
    <img
      src={segment.image}
      alt={segment.title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      loading="lazy"
      decoding="async"
      width={800}
      height={600}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/20 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-5">
      <h3 className="text-lg font-bold text-primary-foreground mb-1">{segment.title}</h3>
      <p className="text-primary-foreground/70 text-sm">{segment.desc}</p>
    </div>
  </>
);

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
        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map((segment) => {
            const cardClass = "group relative overflow-hidden rounded-lg cursor-pointer h-72 shadow-elevated block";
            return segment.href ? (
              <Link key={segment.title} to={segment.href} className={cardClass}>
                <CardContent segment={segment} />
              </Link>
            ) : (
              <div key={segment.title} className={cardClass}>
                <CardContent segment={segment} />
              </div>
            );
          })}
        </div>

        {/* Mobile vertical stack */}
        <div className="flex flex-col gap-4 md:hidden">
          {segments.map((segment, i) => {
            const cardClass = "segment-card group relative overflow-hidden rounded-lg cursor-pointer h-64 shadow-elevated block w-full";
            return segment.href ? (
              <Link
                key={segment.title}
                to={segment.href}
                ref={(el) => { cardsRef.current[i] = el as unknown as HTMLDivElement; }}
                className={cardClass}
              >
                <MobileCardContent segment={segment} />
              </Link>
            ) : (
              <div
                key={segment.title}
                ref={(el) => { cardsRef.current[i] = el; }}
                className={cardClass}
              >
                <MobileCardContent segment={segment} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SegmentsSection;
