import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Evita recarregar a tela toda vez que o usuário clica na janela
      refetchOnWindowFocus: false, 
      retry: false,
    },
  },
});