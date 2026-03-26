import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/eixoconstrutora.svg";

const menuItems = [
  { title: "Home", href: "/" },
  { title: "A Empresa", href: "/a-empresa" },
  { title: "Segmentos", href: "/servicos" },
  { title: "Equipamentos", href: "/equipamentos" },
  { title: "Contato", href: "/contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-[#0B1B3B]/90 backdrop-blur-md shadow-md border-white/10"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto w-full flex items-center px-4 sm:px-6 py-3 gap-8 lg:gap-12">
        {/* LOGO + BRAND */}
        <Link to="/" className="flex items-center gap-2 font-bold text-lg tracking-wide shrink-0">
          <img src={logo} alt="Logo Construtora Eixo" className="w-8 h-8 object-contain" />
          <span className="text-gradient">CONSTRUTORA</span>{" "}
          <span className="text-primary-foreground">EIXO</span>
        </Link>

        {/* NAV DESKTOP */}
        <ul className="hidden lg:flex gap-8 text-sm text-primary-foreground">
          {menuItems.map((item) => (
            <li key={item.href} className="relative group">
              <Link
                to={item.href}
                className="font-bold text-white hover:text-blue-400 transition-colors duration-300"
              >
                {item.title}
              </Link>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>

        {/* BOTÃO DESKTOP */}
        <a
          href="mailto:contato@eixoengenharia.com.br?subject=Solicitação de Orçamento"
          className="hidden lg:inline-block ml-auto px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground text-sm font-medium transition hover:opacity-90 shrink-0"
        >
          Solicitar Orçamento
        </a>

        {/* HAMBURGER MOBILE */}
        <button
          className="lg:hidden ml-auto text-primary-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden w-full bg-transparent animate-fade-in">
          <ul className="flex flex-wrap items-center justify-center gap-1.5 px-4 py-2">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xs font-bold text-white hover:text-[#23B5EB] transition-colors duration-300 px-3 py-2 rounded-full border border-white/20 hover:border-[#23B5EB]/50 hover:bg-[#23B5EB]/10 block whitespace-nowrap"
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="mailto:contato@construtoraeixo.com.br?subject=Solicitação de Orçamento"
                onClick={() => setIsOpen(false)}
                className="text-xs font-bold text-primary-foreground px-3 py-2 rounded-full bg-gradient-to-r from-primary to-secondary whitespace-nowrap block"
              >
                Orçamento
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
