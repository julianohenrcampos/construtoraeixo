import { CheckCircle, Truck, Monitor, Users, Lock } from "lucide-react";

const reasons = [
  { icon: CheckCircle, title: "Experiência em Obras Públicas", desc: "Histórico comprovado em grandes projetos de infraestrutura pública." },
  { icon: Truck, title: "Frota Própria e Rastreável", desc: "Equipamentos modernos com rastreamento em tempo real." },
  { icon: Monitor, title: "Tecnologia e Controle", desc: "Sistemas avançados de gestão operacional e controle de obras." },
  { icon: Users, title: "Equipe Especializada", desc: "Profissionais qualificados e comprometidos com resultados." },
  { icon: Lock, title: "Transparência e Segurança", desc: "Processos transparentes e conformidade com normas de segurança." },
];

const WhyEixoSection = () => {
  return (
    <section className="section-padding bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <p className="text-blue-glow text-sm font-semibold tracking-[0.2em] uppercase mb-3">Diferenciais</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-foreground">
            Por que a <span className="text-gradient">Eixo?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`p-8 rounded-lg border border-primary/10 bg-navy-foreground/5 hover:border-primary/30 transition-all duration-300 ${i === 4 ? "md:col-start-2 lg:col-start-auto" : ""}`}
            >
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-5">
                <Icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-navy-foreground mb-2">{title}</h3>
              <p className="text-navy-foreground/60 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEixoSection;
