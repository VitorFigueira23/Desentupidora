import { useState, useEffect } from 'react';

// --- 1. DADOS DE CONTATO (O que mostrar) ---
const REGIONAL_DATA = {
  litoral: { // DDD 013
    phone: "(13) 99741-7162",
    whatsapp: "5513997417162",
    address: "Atendimento em Santos, Praia Grande e Região (Litoral)"
  },
  londrina: { // DDD 043
    phone: "(43) 9136-6753",
    whatsapp: "554391366753",
    address: "Atendimento em Londrina e Norte do Paraná"
  },
  bauru: { // DDD 014 (SEU TESTE)
    phone: "(14) 99876-1274",
    whatsapp: "5514998761274",
    address: "Plantão 24h em Bauru"
  }
};

// --- 2. LISTAS DE CIDADES (Para precisão máxima) ---
const CITIES_013 = [
  "Santos", "Sao Vicente", "São Vicente", "Praia Grande", "Guaruja", "Guarujá", 
  "Cubatao", "Cubatão", "Bertioga", "Mongagua", "Mongaguá", "Itanhaem", "Itanhaém", 
  "Peruibe", "Peruíbe"
];

const CITIES_043 = [
  "Londrina", "Cambe", "Cambé", "Ibipora", "Ibiporã", "Rolandia", "Rolândia", 
  "Arapongas"
];

const CITIES_TESTE = ["Bauru", "Agudos", "Piratininga"];

export function useSmartContact() {
  // Começa com NULL para não mostrar nada errado antes de saber a região
  const [contact, setContact] = useState<any>(null);
  const [isAllowed, setIsAllowed] = useState(false);
  const [userCity, setUserCity] = useState("Localizando...");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // A. Verifica se tem teste forçado na URL (ex: ?cidade=Londrina)
    const params = new URLSearchParams(window.location.search);
    const testeCidade = params.get("cidade");

    // B. Monta a URL do Worker
    let workerUrl = 'https://geo-api-desentupidora.expresstecdesentupidora-9d5.workers.dev/';
    // Se tiver teste na URL, avisa o Worker para fingir que estamos lá
    if (testeCidade) {
        workerUrl += `?cidade=${testeCidade}`;
    }

    // C. Consulta a Inteligência
    fetch(workerUrl)
      .then(res => res.json())
      .then(data => {
        const city = data.city || "";
        const region = data.region || ""; // O Estado (SP, PR...)
        const country = data.country || "";

        setUserCity(city);
        console.log(`📍 Cliente detectado: ${city} (${region})`);

        // --- D. LÓGICA DE DECISÃO BLINDADA (FALLBACK) ---

        // 1. Prioridade: Teste Local (Bauru)
        if (CITIES_TESTE.some(c => city.includes(c))) {
          setContact(REGIONAL_DATA.bauru);
          setIsAllowed(true);
        }
        
        // 2. Região PARANÁ (043)
        // Se a cidade for Londrina (preciso) OU se o Estado for PR (segurança 4G)
        else if (CITIES_043.some(c => city.includes(c)) || region === "PR") {
          setContact(REGIONAL_DATA.londrina);
          setIsAllowed(true);
        }
        
        // 3. Região SÃO PAULO (013)
        // Se a cidade for do Litoral (preciso) OU se o Estado for SP (segurança 4G)
        // Obs: Quem estiver na Capital (SP) pelo 4G cairá aqui e verá o telefone do Litoral.
        else if (CITIES_013.some(c => city.includes(c)) || region === "SP" || region.includes("Paulo")) {
          setContact(REGIONAL_DATA.litoral);
          setIsAllowed(true);
        }

        // 4. Bloqueio Total (Outros Estados/Países)
        else {
          console.warn("🚫 Acesso Bloqueado:", city, region);
          setContact(null);
          setIsAllowed(false);
        }
        
        setLoading(false);
      })
      .catch(err => {
        console.error("Erro na API de Localização:", err);
        // Em caso de erro na API (raro), liberamos o padrão (Litoral) para não perder venda
        setContact(REGIONAL_DATA.litoral);
        setIsAllowed(true);
        setLoading(false);
      });
  }, []);

  return { contact, isAllowed, userCity, loading };
}