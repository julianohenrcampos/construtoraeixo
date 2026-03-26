import { memo } from "react";
import maquinasPesadasImg from "@/assets/maquinas_pesadas.jpg?w=800&format=webp&quality=75";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const EquipmentSection = memo(() => {
  return (
    <section id="equipamentos" className="section-padding bg-muted">
      <div className="container-max flex flex-col items-center">
        <div className="w-full max-w-3xl bg-background rounded-2xl overflow-hidden shadow-elevated">
          <div className="relative h-72 md:h-96 overflow-hidden">
            <img
              src={maquinasPesadasImg}
              alt="Máquinas Pesadas"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              width={800}
              height={600}
            />
          </div>
          <div className="p-8 text-center">
            <span className="text-xs font-medium text-primary uppercase tracking-wider">Frota Própria</span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-3">Máquinas Pesadas</h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Equipamentos modernos e de alta performance disponíveis para locação. Frota própria com manutenção rigorosa.
            </p>
            <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gradient-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity px-8">
                <MessageCircle size={20} className="mr-2" />
                Solicitar Locação
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

EquipmentSection.displayName = "EquipmentSection";

export default EquipmentSection;
