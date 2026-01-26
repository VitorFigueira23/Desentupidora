import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BeforeAfterGallery } from "@/components/BeforeAfterGallery";
import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, ShieldCheck, Wrench, Droplet, AlertCircle, Zap, Star } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/ContactSection";
import { Phone, ArrowRight, Shield, PenTool as Tool, Droplets, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

// Componente rápido para o ícone do WhatsApp (SVG)
const WhatsappLogo = ({ className }: { className?: string }) => (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.768-.001 1.298.38 2.27 1.019 3.287l-.682 2.472 2.566-.675c1.13.592 2.072.868 3.13.868 3.182 0 5.768-2.587 5.768-5.768 0-3.181-2.585-5.768-5.767-5.768zm0 10.199c-.962 0-1.842-.247-2.738-.708l-1.51.397.405-1.482c-.588-.933-.947-1.844-.947-2.902 0-2.527 2.053-4.58 4.582-4.58 2.528 0 4.58 2.053 4.58 4.58s-2.052 4.58-4.58 4.58zm2.521-3.428c-.14-.07-.819-.404-.945-.45-.126-.047-.218-.07-.309.07-.092.14-.355.45-.436.543-.08.093-.162.105-.302.035-.14-.07-.593-.219-1.13-.697-.418-.373-.701-.834-.783-.975-.081-.14-.009-.216.062-.286.063-.063.14-.163.21-.245.07-.08.094-.138.141-.23.047-.093.023-.174-.012-.245-.035-.07-.309-.745-.424-1.021-.111-.267-.225-.231-.309-.235-.081-.004-.174-.004-.267-.004-.093 0-.245.035-.373.175-.129.14-1.002.926-1.002 2.26 0 1.334.971 2.591 1.104 2.774.133.183 1.912 2.919 4.633 4.093.648.279 1.153.446 1.545.57.651.206 1.243.177 1.713.107.525-.078 1.617-.661 1.845-1.299.229-.638.229-1.185.161-1.299-.069-.115-.255-.186-.395-.256z"/>
</svg>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      <Header />
      
      {/* Spacer for fixed header */}
      <div className="h-20" />
      
      {/* HERO SECTION - Imagem Colagem Fixa com Overlay */}
      <section 
        id="inicio" 
        className="relative min-h-[90vh] flex items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed pt-20 pb-16 overflow-hidden"
        style={{
          // Certifique-se que a imagem está salva com esse nome na pasta public/images
          backgroundImage: `url('/images/hero-collage.png')`
        }}
      >
        
        {/* Overlay Escuro Pesado (Essencial para ler o texto por cima da colagem) */}
        {/* Ajuste o 'bg-black/80' se quiser mais claro (70) ou mais escuro (90) */}
        <div className="absolute inset-0 bg-black/90 z-0 backdrop-blur-[2px]"></div>

        <div className="container relative z-10 px-4 flex flex-col items-center text-center">
          
          {/* LOGO EM DESTAQUE (Opcional, já que tem na imagem de fundo, mas ajuda a focar) */}
          <div className="mb-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
            <img 
              src="/images/logo-hero.png" 
              alt="Desentupidora Jato Clean Logo" 
              className="w-full max-w-[250px] md:max-w-[350px] h-auto drop-shadow-2xl mx-auto"
            />
          </div>

          {/* TÍTULO PRINCIPAL */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white uppercase leading-tight mb-6 tracking-wide drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
            Desentupidora e <span className="text-primary block md:inline">Dedetizadora</span>
          </h1>

          {/* SUBTÍTULO */}
          <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mb-10 leading-relaxed font-light drop-shadow-lg animate-in fade-in slide-in-from-bottom-7 duration-1000 delay-300">
            Soluções rápidas para sua residência ou comércio. <br className="hidden md:block" />
            <strong className="text-primary font-medium">Atendimento emergencial 24 horas.</strong>
          </p>

          {/* BOTÕES */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            
            {/* Botão WhatsApp */}
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white font-bold uppercase tracking-widest text-lg px-8 py-6 h-auto shadow-lg hover:shadow-green-500/30 transition-all w-full sm:w-auto flex items-center justify-center gap-3 border-2 border-green-500"
              onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
            >
              <WhatsappLogo className="w-6 h-6" />
               Orçamento via WhatsApp
            </Button>

            {/* Botão Ligar */}
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white/20 font-bold uppercase tracking-widest px-8 py-6 h-auto w-full sm:w-auto flex items-center justify-center gap-3 bg-black/50 backdrop-blur-sm"
              onClick={() => window.location.href = "tel:11999999999"}
            >
              <Phone className="w-5 h-5" />
              Ligar Agora (24h)
            </Button>
          </div>

        </div>
        
        {/* Seta rolar para baixo */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 animate-bounce drop-shadow-lg">
            <ArrowDown className="w-8 h-8" />
        </div>
      </section>


      {/* Services Section */}
      <section id="servicos" className="py-24 relative z-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-32">
            {[
              {
                title: "Desentupimento Geral",
                icon: "/images/service-icon-1.png",
                desc: "Pias, ralos, tanques e tubulações em geral. Resolvemos qualquer obstrução."
              },
              {
                title: "Vasos Sanitários",
                icon: "/images/service-icon-2.png",
                desc: "Desentupimento rápido e higiênico de vasos sanitários sem quebrar nada."
              },
              {
                title: "Esgoto e Fossas",
                icon: "/images/service-icon-3.png",
                desc: "Limpeza pesada de redes de esgoto, caixas de gordura e fossas sépticas."
              }
            ].map((service, index) => (
              <Card key={index} className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-6 relative">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Wrench className="w-24 h-24 text-primary" />
                  </div>
                  <div className="w-24 h-24 rounded-2xl bg-background/50 p-4 border border-white/5 shadow-inner flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <img src={service.icon} alt={service.title} className="w-full h-full object-contain drop-shadow-lg" />
                  </div>
                  <h3 className="text-2xl font-display font-bold uppercase text-white group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-32 bg-background relative">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-display font-bold uppercase text-white mb-6">
              Tipos de Desentupimento Profissional
            </h2>
            <p className="text-xl text-gray-300">
              Conheça todos os tipos de desentupimento que oferecemos com tecnologia de ponta e profissionais experientes. Da desentupidora de pia até limpeza de esgoto, temos a solução ideal para seu problema.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Desentupimento de Pias e Ralos",
                icon: Droplet,
                description: "Remoção rápida de obstruções em pias de cozinha, banheiro e ralos de chão.",
                details: [
                  "Uso de desentupidor pneumático profissional",
                  "Sem danos ao encanamento",
                  "Solução imediata para entupimentos simples",
                  "Limpeza completa da tubulação"
                ]
              },
              {
                title: "Desentupimento de Vasos Sanitários",
                icon: AlertCircle,
                description: "Desentupimento higiênico e eficiente de vasos sanitários com equipamento especializado.",
                details: [
                  "Técnica sem quebra de cerâmica",
                  "Remoção de papel e resíduos",
                  "Desinfecção do local",
                  "Garantia de funcionamento perfeito"
                ]
              },
              {
                title: "Limpeza de Caixas de Gordura",
                icon: Zap,
                description: "Limpeza profunda de caixas de gordura para evitar entupimentos recorrentes.",
                details: [
                  "Remoção completa de resíduos",
                  "Limpeza interna com jato de água",
                  "Descarte correto de resíduos",
                  "Prevenção de odores desagradáveis"
                ]
              },
              {
                title: "Desentupimento de Esgoto",
                icon: Wrench,
                description: "Limpeza de redes de esgoto e tubulações principais com equipamento de alta pressão.",
                details: [
                  "Jato de água de alta pressão",
                  "Remoção de raízes e sedimentos",
                  "Inspeção com câmera endoscópica",
                  "Solução permanente para problemas crônicos"
                ]
              },
              {
                title: "Limpeza de Fossas Sépticas",
                icon: Droplet,
                description: "Manutenção completa de fossas sépticas com técnicas ambientalmente responsáveis.",
                details: [
                  "Sucção e limpeza profissional",
                  "Verificação do estado da fossa",
                  "Orientações de manutenção preventiva",
                  "Descarte adequado de resíduos"
                ]
              },
              {
                title: "Desobstrução de Tubulações",
                icon: Zap,
                description: "Desobstrução de tubulações internas e externas com tecnologia de ponta.",
                details: [
                  "Uso de mola profissional e jato de água",
                  "Identificação da causa do entupimento",
                  "Limpeza preventiva de tubulações",
                  "Orientações para evitar futuros problemas"
                ]
              }
            ].map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 group overflow-hidden">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-display font-bold uppercase text-white group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 pt-4 border-t border-white/10">
                      <p className="text-sm uppercase font-display font-bold text-primary tracking-wide">O que está incluído:</p>
                      <ul className="space-y-2">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-300">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* SEÇÃO QUEM SOMOS (NOVA) */}
      <section id="sobre" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* Imagem do Técnico */}
            <div className="w-full md:w-1/2 relative">
              <div className="absolute inset-0 bg-primary/20 translate-x-4 translate-y-4 rounded-lg"></div>
              <img 
                src="/images/tecnico.jpg" 
                alt="Técnico Desentupidora Express" 
                className="relative z-10 w-full h-[400px] object-cover rounded-lg shadow-xl grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Texto */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary font-bold text-sm uppercase tracking-wider rounded-full">
                Sobre Nós
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white uppercase">
                Experiência que resolve o seu problema
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                A <span className="font-bold text-primary">Desentupidora ExpressTec</span> não é apenas mais uma empresa. Somos especialistas em situações críticas.
              </p>
              <ul className="space-y-4">
                {[
                  "Equipe uniformizada e treinada",
                  "Equipamentos de alta tecnologia (Hidrojato)",
                  "Atendimento limpo e organizado",
                  "Garantia de serviço prestado"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300 font-medium">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <button 
                    onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-gray-900 text-white px-8 py-3 font-bold uppercase tracking-wider hover:bg-primary hover:text-gray-900 transition-colors duration-300"
                >
                  Conhecer Serviços
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features / Trust Section */}
      <section id="sobre" className="py-20 bg-secondary/5 border-y border-white/5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: Clock, title: "Chegada em 30min", text: "Atendimento expresso em toda a região." },
              { icon: ShieldCheck, title: "Garantia Total", text: "Serviço garantido por 90 dias." },
              { icon: CheckCircle2, title: "Preço Justo", text: "Orçamento transparente antes de começar." },
              { icon: Wrench, title: "Equipamento Moderno", text: "Tecnologia que não quebra pisos." }
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-primary/10 text-primary mb-2">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-display font-bold uppercase">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before and After Gallery Section */}
      <section className="py-32 bg-background relative">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-display font-bold uppercase text-white mb-6">
              Veja os Resultados
            </h2>
            <p className="text-xl text-gray-300">
              Confira os antes e depois dos nossos serviços de desentupimento. Deslize o controle para comparar os resultados.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <BeforeAfterGallery />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-background relative">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-display font-bold uppercase text-white mb-6">
              O Que Dizem Nossos Clientes
            </h2>
            <p className="text-xl text-gray-300">
              Confira as avaliações de clientes satisfeitos com nosso serviço de desentupimento profissional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                city: "São Paulo, SP",
                rating: 5,
                text: "Excelente serviço! Chegaram rápido e resolveram meu problema de entupimento em minutos. Muito profissional e higiênico. Recomendo!",
                service: "Desentupimento de Pia"
              },
              {
                name: "João Santos",
                city: "São Paulo, SP",
                rating: 5,
                text: "Melhor desentupidora que já contratei. Preço justo, atendimento atencioso e garantia de 90 dias. Voltaria a contratar com certeza!",
                service: "Desentupimento de Esgoto"
              },
              {
                name: "Ana Costa",
                city: "São Paulo, SP",
                rating: 5,
                text: "Chegaram em 20 minutos! Resolveram o entupimento do banheiro sem quebrar nada. Muito bom mesmo, super recomendo!",
                service: "Desentupimento de Vaso Sanitário"
              },
              {
                name: "Carlos Oliveira",
                city: "São Paulo, SP",
                rating: 5,
                text: "Serviço impecável! Limparam a caixa de gordura com profissionalismo. Voltei a usar a pia normalmente. Muito obrigado!",
                service: "Limpeza de Caixa de Gordura"
              },
              {
                name: "Fernanda Gomes",
                city: "São Paulo, SP",
                rating: 5,
                text: "Atendimento 24 horas funcionando mesmo! Chamei à noite e vieram logo. Problema resolvido, cliente feliz. Parabéns!",
                service: "Desentupimento Geral"
              },
              {
                name: "Roberto Martins",
                city: "São Paulo, SP",
                rating: 5,
                text: "Profissionais competentes e educados. Explicaram tudo que fizeram e deixaram tudo limpo. Vale cada centavo investido!",
                service: "Desobstrução de Tubulação"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
                <CardContent className="p-8 space-y-6 flex flex-col h-full">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  {/* Review Text */}
                  <p className="text-gray-300 leading-relaxed flex-grow italic">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Service Badge */}
                  <div className="inline-block">
                    <span className="text-xs uppercase font-display font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {testimonial.service}
                    </span>
                  </div>
                  
                  {/* Author Info */}
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-white font-display font-bold text-lg">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.city}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Rating Summary */}
          <div className="mt-16 bg-secondary/5 border border-white/10 rounded-lg p-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>
            </div>
            <p className="text-2xl font-display font-bold text-white mb-2">4.9 de 5 Estrelas</p>
            <p className="text-gray-400">Baseado em 127 avaliações de clientes verificados</p>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <ContactSection />

      {/* Footer Simple */}
      <Footer />
    </div>
  );
}
