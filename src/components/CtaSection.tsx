import { Button } from "@/components/ui/button";
import { MessageCircle, FileText } from "lucide-react";

const CtaSection = () => {
  return (
    <section id="contato" className="section-padding gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-transparent" />
      <div className="container-max relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
          ENGENHARIA PARA SUPERAR GRANDES DESAFIOS
        </h2>
        <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Otimize seus processos, reduza custos e aumente a eficiência operacional.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary-foreground text-primary font-semibold px-8 py-6 text-base hover:bg-primary-foreground/90 transition-colors">
              <MessageCircle size={20} className="mr-2" />
              WhatsApp
            </Button>
          </a>
          <a href="mailto:contato@eixoengenharia.com.br?subject=Solicitação de Orçamento">
            <Button size="lg" variant="outline" className="border-blue-glow/50 text-blue-glow hover:bg-primary-foreground/10 hover:text-primary-foreground font-semibold px-8 py-6 text-base transition-colors">
              <FileText size={20} className="mr-2" />
              Solicitar Orçamento
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
