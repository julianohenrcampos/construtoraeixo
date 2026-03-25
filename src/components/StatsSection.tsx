import { Target, LayoutDashboard } from "lucide-react";
import bimIcon from "@/assets/bim_icon.svg";
import leanIcon from "@/assets/lean_icon.svg";

type Methodology =
  | { type: "lucide"; icon: typeof Target; label: string; mobileLabel: string; subtitle: string }
  | { type: "svg"; src: string; label: string; mobileLabel: string; subtitle: string };

const methodologies: Methodology[] = [
  { type: "svg", src: bimIcon, label: "BIM", mobileLabel: "BIM", subtitle: "Building Information Modeling" },
  { type: "lucide", icon: Target, label: "FEL", mobileLabel: "FEL", subtitle: "Front End Loading" },
  { type: "lucide", icon: LayoutDashboard, label: "SCRUM/KANBAN", mobileLabel: "SCRUM", subtitle: "Metodologias Ágeis" },
  { type: "svg", src: leanIcon, label: "Lean Construction", mobileLabel: "Lean", subtitle: "Construção Enxuta" },
];

const StatsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-blue-glow/10" />
      <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground text-center mb-12 md:mb-16">
          Metodologias e Inteligência Aplicada à <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Engenharia</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {methodologies.map((item) => (
            <div key={item.label} className="text-center flex flex-col items-center gap-3">
              {item.type === "svg" ? (
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-11 h-11"
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(58%) sepia(88%) saturate(1834%) hue-rotate(167deg) brightness(97%) contrast(92%)",
                  }}
                />
              ) : (
                <item.icon size={44} color="#23B5EB" strokeWidth={1.5} />
              )}
              <p className="text-2xl md:text-3xl font-bold text-primary-foreground">
                <span className="md:hidden">{item.mobileLabel}</span>
                <span className="hidden md:inline">{item.label}</span>
              </p>
              <p className="text-navy-foreground/60 text-sm font-medium">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
