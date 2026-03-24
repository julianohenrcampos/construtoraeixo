import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const menuItems = [
  { title: "Home", href: "/" },
  { title: "A Empresa", href: "/a-empresa" },
  { title: "Equipamentos", href: "/equipamentos" },
  { title: "Contato", href: "/contato" },
];

const segments = [
  "Gerenciamento e Consultoria",
  "Prediais",
  "Energia",
  "Obras de Arte Especiais",
  "Terraplanagem",
  "Drenagem",
  "Limpeza Urbana",
  "Manutenção",
  "Óleo e Gás",
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [segmentosOpen, setSegmentosOpen] = useState(false);
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
      onMouseLeave={() => setSegmentosOpen(false)}
    >
      <div className="flex items-center justify-center gap-10 px-6 py-4">
        {/* LOGO */}
        <Link to="/" className="font-bold text-lg tracking-wide">
          <span className="text-gradient">CONSTRUTORA</span>{" "}
          <span className="text-primary-foreground">EIXO</span>
        </Link>

        {/* NAV DESKTOP */}
        <ul className="hidden lg:flex gap-8 text-sm text-primary-foreground">
          {menuItems.slice(0, 2).map((item) => (
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

          {/* SEGMENTOS */}
          <li
            className="relative"
            onMouseEnter={() => setSegmentosOpen(true)}
          >
            <Link
              to="/servicos"
              className="font-bold text-white hover:text-blue-400 transition-colors duration-300"
            >
              Segmentos
            </Link>
            <span className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-primary to-secondary transition-all duration-300 ${segmentosOpen ? "w-full" : "w-0"}`} />
          </li>

          {menuItems.slice(2).map((item) => (
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
          className="hidden lg:inline-block ml-6 px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground text-sm font-medium transition hover:opacity-90"
        >
          Solicitar Orçamento
        </a>

        {/* HAMBURGER MOBILE */}
        <button
          className="lg:hidden text-primary-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* DROPDOWN SEGMENTOS (overlay) */}
      <div
        className={`hidden lg:block absolute top-full left-0 w-full transition-all duration-300 ${
          segmentosOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="max-w-3xl mx-auto px-4">
          <div className="rounded-xl bg-transparent py-3 px-4">
            <div className="grid grid-cols-3 gap-x-4 gap-y-1">
              {segments.map((item) => (
                <Link
                  key={item}
                  to="/servicos"
                  className="text-sm font-bold text-white hover:text-blue-400 hover:translate-x-1 transition-all duration-200"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden w-full bg-[#0A0F2C]/95 backdrop-blur-sm p-6 animate-fade-in">
          <ul className="flex flex-col gap-4">
            {menuItems.slice(0, 2).map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-bold text-white hover:text-blue-400 transition-colors duration-300 py-2 block"
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/servicos"
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold text-white hover:text-blue-400 transition-colors duration-300 py-2 block"
              >
                Segmentos
              </Link>
            </li>
            {menuItems.slice(2).map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-bold text-white hover:text-blue-400 transition-colors duration-300 py-2 block"
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="mailto:contato@eixoengenharia.com.br?subject=Solicitação de Orçamento"
                onClick={() => setIsOpen(false)}
                className="inline-block px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground text-sm font-medium mt-2"
              >
                Solicitar Orçamento
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
