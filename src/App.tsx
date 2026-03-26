import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "./pages/Home";

const AEmpresa = lazy(() => import("./pages/AEmpresa"));
const Servicos = lazy(() => import("./pages/Servicos"));
const Equipamentos = lazy(() => import("./pages/Equipamentos"));
const Contato = lazy(() => import("./pages/Contato"));
const Infraestrutura = lazy(() => import("./pages/Infraestrutura"));
const ObrasServicos = lazy(() => import("./pages/ObrasServicos"));
const Prediais = lazy(() => import("./pages/Prediais"));
const AterroAgregados = lazy(() => import("./pages/AterroAgregados"));
const PedreiraSeg = lazy(() => import("./pages/PedreiraSeg"));
const UsinaCBUQ = lazy(() => import("./pages/UsinaCBUQ"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/a-empresa" element={<AEmpresa />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/equipamentos" element={<Equipamentos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/infraestrutura" element={<Infraestrutura />} />
            <Route path="/obras-servicos" element={<ObrasServicos />} />
            <Route path="/prediais" element={<Prediais />} />
            <Route path="/aterro-agregados" element={<AterroAgregados />} />
            <Route path="/pedreira" element={<PedreiraSeg />} />
            <Route path="/usina-cbuq" element={<UsinaCBUQ />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
