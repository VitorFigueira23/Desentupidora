import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useSmartContact } from "@/hooks/useSmartContact";

export function WhatsAppButton({ className = "" }: { className?: string }) {
  const { contact, loading } = useSmartContact();
  const whatsappNumber = "5511999999999"; // Placeholder number
  const message = "Olá! Preciso de um orçamento urgente.";
  const whatsappLink = `https://wa.me/${contact?.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`inline-block ${className}`}
    >
      <Button 
        size="lg" 
        className="bg-primary text-primary-foreground hover:bg-primary/90 font-display text-xl uppercase tracking-wide px-8 py-6 h-auto shadow-[0_0_20px_rgba(255,215,0,0.3)] animate-pulse hover:animate-none transition-all duration-300 transform hover:scale-105 border-2 border-primary-foreground/10"
      >
        <Phone className="mr-3 h-6 w-6 fill-current" />
        Solicitar Orçamento Agora
      </Button>
    </a>
  );
}
