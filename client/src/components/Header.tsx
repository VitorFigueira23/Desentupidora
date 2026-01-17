import { WhatsAppButton } from "./WhatsAppButton";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-white/10">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img 
            src="/images/expresstec-logo.png" 
            alt="ExpressTec Logo" 
            className="h-14 w-auto drop-shadow-lg"
          />
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <WhatsAppButton />
        </div>
      </div>
    </header>
  );
}
