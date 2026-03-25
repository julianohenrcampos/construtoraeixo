import { motion } from "framer-motion";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import obraImg from "@/assets/imagem_obra.svg";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0B1B3B]">
      <img src={obraImg} alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" loading="eager" decoding="async" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1B3B]/80 via-[#0B1B3B]/50 to-[#0B1B3B]/30" />
      <BackgroundPaths />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        {/* TITLE */}
        <motion.h1
          className="font-extrabold italic leading-tight mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <span className="text-primary-foreground">Construindo infraestrutura</span>
          <br />
          <span className="text-gradient">
            que move o Brasil.
          </span>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          className="text-sm sm:text-base md:text-lg text-primary-foreground/60 max-w-xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Especialistas em obras públicas, locação de equipamentos e engenharia de alta performance.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <Link to="/obras">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold px-8 py-6 text-base shadow-lg hover:opacity-90 transition-opacity"
            >
              Ver Obras
            </Button>
          </Link>
          <Link to="/contato">
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground bg-primary-foreground/5 backdrop-blur-sm hover:bg-primary-foreground/10 font-semibold px-8 py-6 text-base transition-colors"
            >
              Fale Conosco
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
