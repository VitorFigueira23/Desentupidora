import { Phone, Mail, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contato" className="relative py-24 bg-zinc-900 overflow-hidden">
      {/* Elemento decorativo de fundo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-primary/20 blur-[100px]"></div>
        <div className="absolute bottom-[0%] left-[0%] w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LADO ESQUERDO: Texto e Informações */}
          <div className="space-y-8 text-white">
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm">
                Orçamento Gratuito
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mt-2 mb-4 leading-tight">
                Problema de entupimento? <br />
                <span className="text-gray-400">Resolvemos hoje.</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Preencha o formulário para receber uma ligação de um técnico especialista em poucos minutos. Atendimento imediato para emergências.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                <div className="bg-primary/20 p-3 rounded-full text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Ligue Agora</h3>
                  <p className="text-gray-400">Atendimento 24h: (11) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                <div className="bg-primary/20 p-3 rounded-full text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">E-mail</h3>
                  <p className="text-gray-400">orcamento@desentupidora.com</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500 mt-4">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Resposta em até 30 minutos</span>
                <CheckCircle2 className="w-4 h-4 text-primary ml-4" />
                <span>Visita técnica sem compromisso</span>
              </div>
            </div>
          </div>

          {/* LADO DIREITO: O Formulário */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicitar Orçamento</h3>
            
            {/* FORMULARIO DE ORCAMENTO
                
            */}
            <form 
              action="https://formspree.io/f/xgooornn" 
              method="POST"
              className="space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Nome</label>
                  <input 
                    required 
                    type="text" 
                    name="name" 
                    id="name"
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">WhatsApp</label>
                  <input 
                    required 
                    type="tel" 
                    name="phone" 
                    id="phone"
                    placeholder="(11) 99999-9999"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-gray-700">Tipo de Serviço</label>
                <select 
                  name="service" 
                  id="service"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none"
                >
                  <option value="" disabled selected>Selecione uma opção</option>
                  <option value="pia">Pia Entupida</option>
                  <option value="vaso">Vaso Sanitário</option>
                  <option value="esgoto">Rede de Esgoto</option>
                  <option value="ralo">Ralo / Box</option>
                  <option value="limpa-fossa">Limpa Fossa</option>
                  <option value="outros">Outros / Não sei</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Detalhes (Opcional)</label>
                <textarea 
                  name="message" 
                  id="message"
                  rows={3}
                  placeholder="Descreva brevemente o problema..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none placeholder:text-gray-400"
                ></textarea>
              </div>

              <Button 
                type="submit" 
                className="w-full py-6 text-lg font-bold uppercase tracking-wider bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
              >
                Solicitar Agora <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <p className="text-xs text-center text-gray-500 mt-4">
                Seus dados estão seguros. Não enviamos spam.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}