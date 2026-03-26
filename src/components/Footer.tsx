import { Link } from "react-router-dom";
import { MapPin, Mail, Instagram, Linkedin, Facebook } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "A Empresa", href: "/a-empresa" },
  { label: "Segmentos", href: "/servicos" },
  { label: "Equipamentos", href: "/equipamentos" },
  { label: "Contato", href: "/contato" },
];

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-navy border-t border-primary/10">
      <div className="container-max section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-gradient">CONSTRUTORA</span>
              <span className="text-primary-foreground"> EIXO</span>
            </div>
            <p className="text-navy-foreground/60 text-sm leading-relaxed">
              Construindo infraestrutura com excelência, segurança e compromisso com o desenvolvimento do Brasil.
            </p>
          </div>

          <div>
            <h4 className="text-navy-foreground font-semibold mb-4">Links Rápidos</h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link key={link.href} to={link.href} className="text-navy-foreground/60 text-sm hover:text-blue-glow transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-navy-foreground font-semibold mb-4">Contato</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-blue-glow shrink-0 mt-0.5" />
                <span className="text-navy-foreground/60 text-sm"><span className="text-navy-foreground/60 text-sm">Rua São José, 20, 20° andar, Centro</span></span>
              </div>
              <a href="mailto:contato@construtoraeixo.com.br" className="flex items-center gap-3 hover:text-blue-glow transition-colors">
                <Mail size={16} className="text-blue-glow shrink-0" />
                <span className="text-navy-foreground/60 text-sm hover:text-blue-glow transition-colors">contato@construtoraeixo.com.br</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-navy-foreground font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-navy-foreground/60 hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary/10 mt-12 pt-8 text-center">
          <p className="text-navy-foreground/40 text-sm">
            © {new Date().getFullYear()} Construtora Eixo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
