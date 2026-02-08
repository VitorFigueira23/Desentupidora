import { useState, useEffect } from 'react';

interface GeoData {
  city: string;
  region: string;
  country: string;
  isSaoPaulo: boolean;
  loading: boolean;
}

export function useGeoLocation() {
  const [location, setLocation] = useState<GeoData>({
    city: '',
    region: '',
    country: '',
    isSaoPaulo: true, // Padrão: assume que é SP para não bloquear ninguém sem querer
    loading: true,
  });

  useEffect(() => {
    // Sua URL do Worker
    fetch('https://geo-api-desentupidora.expresstecdesentupidora-9d5.workers.dev/')
      .then(res => res.json())
      .then(data => {
        setLocation({
          city: data.city,
          region: data.region,
          country: data.country,
          isSaoPaulo: data.isSaoPaulo,
          loading: false
        });
        
        // Log para você ver funcionando no console (pode tirar depois)
        console.log("Cliente detectado em:", data.city, "-", data.region);
      })
      .catch(err => {
        console.error("Erro ao obter localização:", err);
        // Se der erro, assumimos que é SP para garantir que o site funcione
        setLocation(prev => ({ ...prev, loading: false }));
      });
  }, []);

  return location;
}