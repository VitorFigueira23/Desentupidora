import { MapPin, Phone, Mail, Clock, ShieldCheck, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-gray-400 pt-16 pb-8 border-t border-white/10 font-body">
      <div className="container mx-auto px-4">
        
        {/* Grid Principal - 4 Colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Coluna 1: Sobre a Empresa */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold text-white uppercase tracking-wider">
              Desentupidora <span className="text-primary">Express</span>
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Soluções rápidas e definitivas para problemas de entupimento. 
              Tecnologia de ponta e equipe qualificada para atender sua residência ou empresa com segurança e limpeza.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.instagram.com/expresstec_desentupidora/?utm_source=ig_web_button_share_sheet" className="hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
              {/* <a href="#" className="hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a> */}
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Navegação</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2">Início</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-colors flex items-center gap-2">Nossos Serviços</a></li>
              <li><a href="#sobre" className="hover:text-primary transition-colors flex items-center gap-2">Quem Somos</a></li>
              <li><a href="#contato" className="hover:text-primary transition-colors flex items-center gap-2">Solicitar Orçamento</a></li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Fale Conosco</h4>
            <ul className="space-y-4 text-sm">
              {/* <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Av. Paulista, 1000 - Bela Vista<br />São Paulo - SP</span>
              </li>  */}
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>expresstecdesentupidora@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Atendimento */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Atendimento</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <span className="block text-white font-bold">Emergência 24h</span>
                  <span>Todos os dias, inclusive feriados</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <span className="block text-white font-bold">Garantia Total</span>
                  <span>3 meses de garantia no serviço</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Linha Divisória */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Desentupidora ExpressTec. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}