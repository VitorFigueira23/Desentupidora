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

const CITIES_014 = ["Bauru", "Agudos", "Piratininga", "Lencois", "Lençóis"];

export function useSmartContact() {
  const [contact, setContact] = useState<any>(null);
  const [isAllowed, setIsAllowed] = useState(false);
  const [userCity, setUserCity] = useState("Localizando...");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // A. Verifica Teste de URL
    const params = new URLSearchParams(window.location.search);
    const testeCidade = params.get("cidade");
    let workerUrl = 'https://geo-api-desentupidora.expresstecdesentupidora-9d5.workers.dev/';
    if (testeCidade) workerUrl += `?cidade=${testeCidade}`;

    fetch(workerUrl)
      .then(res => res.json())
      .then(data => {
        const city = data.city || "";
        const region = data.region || ""; 
        
        setUserCity(city);
        console.log(`📍 Detectado: ${city} (${region})`);

        // --- LÓGICA DE DECISÃO (Ajustada para priorizar Bauru em SP) ---

        // 1. É LITORAL? (Verificação Específica)
        // Só mostra 013 se tiver CERTEZA que é uma cidade do litoral.
        if (CITIES_013.some(c => city.includes(c))) {
          setContact(REGIONAL_DATA.litoral);
          setIsAllowed(true);
        }
        
        // 2. É PARANÁ? (Verificação Estado ou Cidade)
        else if (CITIES_043.some(c => city.includes(c)) || region === "PR") {
          setContact(REGIONAL_DATA.londrina);
          setIsAllowed(true);
        }
        
        // 3. É SÃO PAULO GERAL? (Cai aqui Bauru, Capital e 4G)
        // Se for Bauru específico OU se for Estado SP genérico -> Manda para 014
        else if (CITIES_014.some(c => city.includes(c)) || region === "SP" || region.includes("Paulo")) {
          setContact(REGIONAL_DATA.bauru);
          setIsAllowed(true);
        }

        // 4. BLOQUEIO (Outros Estados/Países)
        else {
          console.warn("🚫 Bloqueado:", city);
          setContact(null);
          setIsAllowed(false);
        }
        
        setLoading(false);
      })
      .catch(err => {
        // Em caso de erro na API, qual deve ser o padrão?
        // Antes estava Litoral, agora mudei para Bauru (mais seguro para você)
        console.error("Erro API Geo:", err);
        setContact(REGIONAL_DATA.bauru);
        setIsAllowed(true);
        setLoading(false);
      });
  }, []);

  return { contact, isAllowed, userCity, loading };
}