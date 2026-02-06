import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

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
    { name: "Serviços", href: "/#servicos" }, // Iremos criar essa âncora depois
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
        <Link 
          href="/" 
          className="text-2xl font-display font-bold uppercase tracking-wider text-white hover:opacity-80 transition-opacity"
        >
          Desentupidora <span className="text-primary">Express</span>
        </Link>

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
          
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-widest gap-2"
            onClick={() => window.open("https://wa.me/5511999999999", "_blank")} // Substitua pelo número real
          >
            <Phone className="w-4 h-4" />
            (11) 99999-9999
          </Button>
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
          <Button className="w-full bg-green-600 hover:bg-green-700 mt-2 text-white">
            Chamar no WhatsApp
          </Button>
        </div>
      )}
    </nav>
  );
}