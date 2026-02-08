import { useState, useEffect } from "react";
import { useLocation } from "wouter"; // Removi o Link do wouter pois não estamos usando no logo
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSmartContact } from "@/hooks/useSmartContact";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // const [location] = useLocation(); // Não estamos usando location aqui, pode remover se quiser
  const { contact, loading } = useSmartContact();

  // Efeito para mudar a cor da navbar quando rolar a página
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Serviços", href: "/#servicos" },
    { name: "Sobre Nós", href: "/#sobre" },
    { name: "Contato", href: "/#contato" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/10 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md py-3 shadow-md"
          : "bg-background/50 backdrop-blur-sm py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* LOGO */}
        <a 
          href="/" 
          className="text-2xl font-display font-bold uppercase tracking-wider text-white hover:opacity-80 transition-opacity cursor-pointer"
        >
          Desentupidora <span className="text-primary">ExpressTec</span>
        </a>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wide hover:text-primary transition-colors text-white/90"
            >
              {link.name}
            </a>
          ))}
          
          {/* SOLUÇÃO DEFINITIVA: Botão envolvido em Link HTML */}
          <a 
            href={`https://wa.me/${contact?.whatsapp}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="no-underline"
          >
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-widest gap-2">
              <Phone className="w-4 h-4" />
              {/* Mostra o número correto visualmente */}
              {loading ? "Carregando..." : (contact?.phone || "Whatsapp")}
            </Button>
          </a>
        </div>

        {/* MENU MOBILE (Hambúrguer) */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* DROPDOWN MOBILE */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-t border-white/10 p-4 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-bold text-white/80 hover:text-primary py-2 border-b border-white/5"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          
          {/* SOLUÇÃO DEFINITIVA MOBILE */}
          <a 
            href={`https://wa.me/${contact?.whatsapp}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full mt-2"
          >
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
              Chamar no WhatsApp ({loading ? "..." : (contact?.phone || "")})
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
}