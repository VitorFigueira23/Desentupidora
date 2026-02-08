import { Toaster } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import NotFound from "./pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import { Navbar } from "./components/layout/navbar";
import { useGeoLocation } from "./hooks/useGeoLocation"; // <--- Importe o Hook novo
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
// Importe o Hook Inteligente
import { useSmartContact } from "./hooks/useSmartContact";
import { Loader2, MapPinOff } from "lucide-react";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  // Chamamos o porteiro
  const { isAllowed, userCity, loading } = useSmartContact();

  // 1. TELA DE CARREGAMENTO (Enquanto o Worker responde)
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <Loader2 className="h-10 w-10 animate-spin text-blue-600 mb-4" />
        <p className="text-gray-500 font-medium">Verificando disponibilidade na sua região...</p>
      </div>
    );
  }

  // 2. TELA DE BLOQUEIO (Se não for 013, 043 ou Bauru)
  if (!isAllowed) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white p-6 text-center">
        <div className="bg-red-500/10 p-6 rounded-full mb-6 border border-red-500/20">
          <MapPinOff className="h-16 w-16 text-red-500" />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4 font-display uppercase">
          Região não atendida
        </h1>
        
        <p className="text-lg text-gray-300 max-w-lg mb-8 leading-relaxed">
          Identificamos que você está acessando de <strong className="text-yellow-400">{userCity}</strong>.
          <br /><br />
          No momento, a <strong>Desentupidora Express</strong> atende exclusivamente as regiões do 
          <span className="text-white font-bold"> Litoral de SP (013)</span> e 
          <span className="text-white font-bold"> Norte do Paraná (043)</span>.
        </p>

        <div className="text-sm text-gray-500 border-t border-gray-800 pt-6 w-full max-w-md">
          Caso acredite que isso é um erro, entre em contato com nosso suporte central.
        </div>
      </div>
    );
  }

 // 3. SITE LIBERADO (O usuário passou no teste)
  return (
    // O QueryClientProvider deve ser o "pai" de todos
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Toaster />
            {/* O Navbar precisa estar aqui dentro para pegar os dados do contato */}
            <Navbar /> 
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;
