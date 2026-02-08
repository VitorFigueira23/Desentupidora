import { useState, useEffect } from 'react';

// --- CONFIGURAÇÃO DAS REGIÕES ---

// Dados de contato por região
const REGIONAL_DATA = {
  litoral: { // DDD 013
    phone: "(13) 99999-8888",
    whatsapp: "5513999998888",
    address: "Atendimento em Santos, Praia Grande e Região (Litoral)"
  },
  londrina: { // DDD 043
    phone: "(43) 3333-7777",
    whatsapp: "554333337777",
    address: "Atendimento em Londrina e Norte do Paraná"
  },
  bauru: { // DDD 014 (SEU TESTE) - Depois você apaga isso
    phone: "(14) 98888-1234",
    whatsapp: "5514988881234",
    address: "Plantão 24h em Bauru"
  }
};

// Listas de cidades permitidas (Adicione mais cidades conforme precisar)
const CITIES_013 = [
  "Santos", "Sao Vicente", "São Vicente", "Praia Grande", "Guaruja", "Guarujá", 
  "Cubatao", "Cubatão", "Bertioga", "Mongagua", "Mongaguá", "Itanhaem", "Itanhaém", 
  "Peruibe", "Peruíbe"
];

const CITIES_043 = [
  "Londrina", "Cambe", "Cambé", "Ibipora", "Ibiporã", "Rolandia", "Rolândia", 
  "Arapongas"
];

const CITIES_TESTE = ["Bauru", "Agudos", "Piratininga"]; // Lista de teste

export function useSmartContact() {
  const [contact, setContact] = useState<any>(null); // Começa vazio
  const [isAllowed, setIsAllowed] = useState(false); // Começa bloqueado
  const [userCity, setUserCity] = useState("Localizando...");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Consulta o seu Worker na Cloudflare
    fetch('https://geo-api-desentupidora.expresstecdesentupidora-9d5.workers.dev/')
      .then(res => res.json())
      .then(data => {
        const city = data.city || "";
        setUserCity(city);
        
        console.log("📍 Cidade do Cliente:", city);

        // --- A GRANDE DECISÃO ---
        
        if (CITIES_TESTE.some(c => city.includes(c))) {
          // É Bauru (Teste)? Libera com dados de Bauru
          setContact(REGIONAL_DATA.bauru);
          setIsAllowed(true);
        } 
        else if (CITIES_013.some(c => city.includes(c))) {
          // É Litoral? Libera com dados do Litoral
          setContact(REGIONAL_DATA.litoral);
          setIsAllowed(true);
        } 
        else if (CITIES_043.some(c => city.includes(c))) {
          // É Londrina? Libera com dados de Londrina
          setContact(REGIONAL_DATA.londrina);
          setIsAllowed(true);
        } 
        else {
          // NÃO É NENHUM DELES? BLOQUEIA!
          setContact(null);
          setIsAllowed(false);
        }
        
        setLoading(false);
      })
      .catch(err => {
        console.error("Erro ao verificar região:", err);
        // Se der erro na API, por segurança, bloqueamos ou liberamos?
        // Aqui vou deixar bloqueado para evitar atendimento onde não deve.
        setIsAllowed(false);
        setLoading(false);
      });
  }, []);

  return { 
    contact,   // Dados do telefone (se permitido)
    isAllowed, // True = Pode ver o site / False = Bloqueado
    userCity,  // Nome da cidade para mostrar na tela de bloqueio
    loading    // Carregando...
  };
}