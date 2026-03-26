import aboutImg from "@/assets/about.jpg?w=800&format=webp&quality=75";
import { Shield, Award, Users, TrendingUp } from "lucide-react";

const features = [
  { icon: Shield, label: "Segurança" },
  { icon: Award, label: "Qualidade" },
  { icon: Users, label: "Equipe Especializada" },
  { icon: TrendingUp, label: "Eficiência" },
];

const AboutSection = () => {
  return (
    <section id="empresa" className="section-padding bg-background">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3">Quem Somos</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
              Excelência em <span className="text-gradient">infraestrutura</span>
            </h2>
            <div className="max-w-xl space-y-4">
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-justify">
                A Construtora Eixo é uma empresa de engenharia especializada em gerenciamento e consultoria de projetos de infraestrutura, atuando de forma estratégica no planejamento, coordenação e execução de obras com elevado padrão técnico.
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-justify">
                Atendemos demandas públicas e privadas com soluções integradas que envolvem desde a estruturação e gestão dos projetos até a execução das obras, garantindo eficiência, controle, cumprimento de prazos e excelência em cada etapa.
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-justify">
                Com uma equipe altamente qualificada e uma frota própria de equipamentos, asseguramos maior previsibilidade, segurança e desempenho operacional, sempre alinhados às melhores práticas de engenharia.
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-justify">
                Mais do que executar obras, nosso compromisso é orientar, planejar e gerenciar projetos que contribuam para o desenvolvimento sustentável da infraestrutura, promovendo soluções que gerem valor, eficiência e melhoria da qualidade de vida da população.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {features.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src={aboutImg}
              alt="Equipe de engenheiros"
              className="rounded-lg shadow-elevated w-full object-cover h-[500px]"
              loading="lazy"
              decoding="async"
              width={800}
              height={600}
            />
            <div className="absolute -bottom-6 -left-6 bg-primary rounded-lg p-6 shadow-blue hidden md:block">
              <p className="text-3xl font-bold text-primary-foreground">15+</p>
              <p className="text-primary-foreground/80 text-sm">Anos de Experiência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
