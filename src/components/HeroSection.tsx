import { motion } from "framer-motion";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/eixoconstrutora.svg";
import obraImg from "@/assets/imagem_obra.svg";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <img src={obraImg} alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1B3B]/80 via-[#0B1B3B]/50 to-[#0B1B3B]/30" />
      <BackgroundPaths />

      <div className="relative z-10 flex-col text-center px-4 sm:px-6 lg:px-[32px] py-[50px] flex items-center justify-start">
        {/* SUBTITLE */}
        <motion.h1
          className="italic bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent leading-tight whitespace-nowrap mb-6 font-extrabold text-6xl mx-[2px] my-0 py-[6px] px-[9px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Engenharia de Alta Performance
        </motion.h1>

        {/* LOGO */}
        <motion.img
          src={logo}
          alt="Logo Construtora Eixo"
          className="w-[250px] h-auto mb-8 object-cover"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        />

        {/* TITLE */}
        <motion.p
          className="italic bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent leading-tight whitespace-nowrap mb-4 font-extrabold text-6xl mx-[2px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Construindo infraestrutura que move o Brasil.
        </motion.p>

        {/* DESCRIPTION */}
        <motion.p
          className="text-sm md:text-base text-primary-foreground/60 whitespace-nowrap mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          Especialistas em obras públicas, locação de equipamentos e engenharia de alta performance.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
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
