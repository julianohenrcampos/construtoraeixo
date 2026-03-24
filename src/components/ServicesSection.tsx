import highwayImg from "@/assets/highway.jpg";
import bridgeImg from "@/assets/bridge.jpg";
import earthworkImg from "@/assets/earthwork.jpg";
import drainageImg from "@/assets/drainage.jpg";
import projectsImg from "@/assets/projects.jpg";
import equipmentImg from "@/assets/equipment.jpg";

const services = [
  { title: "Rodovias", image: highwayImg, desc: "Construção e pavimentação de rodovias e estradas" },
  { title: "Obras de Arte Especiais", image: bridgeImg, desc: "Pontes, viadutos e passarelas" },
  { title: "Terraplanagem", image: earthworkImg, desc: "Movimentação de terra e preparação de terrenos" },
  { title: "Drenagem", image: drainageImg, desc: "Sistemas de drenagem e saneamento" },
  { title: "Projetos Executivos", image: projectsImg, desc: "Engenharia de projetos e planejamento" },
  { title: "Locação de Equipamentos", image: equipmentImg, desc: "Frota própria para locação" },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding bg-muted">
      <div className="container-max">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3">Nossos Serviços</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Soluções completas em <span className="text-gradient">engenharia</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-lg cursor-pointer h-72 shadow-elevated"
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent transition-all duration-300 group-hover:from-primary/80 group-hover:via-primary/40" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-primary-foreground mb-1">{service.title}</h3>
                <p className="text-primary-foreground/70 text-sm">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
