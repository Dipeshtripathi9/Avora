import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ElderlySupport from "./pages/ElderlySupport";
import AirbnbManagement from "./pages/AirbnbManagement";
import WebDevelopment from "./pages/WebDevelopment";
import DigitalMarketing from "./pages/DigitalMarketing";
import LeadGeneration from "./pages/LeadGeneration";
import VirtualAssistant from "./pages/VirtualAssistant";
import Bookkeeping from "./pages/Bookkeeping";
import ConstructionEstimation from "./pages/ConstructionEstimation";
import BrandingDesign from "./pages/BrandingDesign";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services/elderly-support" element={<ElderlySupport />} />
        <Route path="/services/airbnb-management" element={<AirbnbManagement />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/lead-generation" element={<LeadGeneration />} />
        <Route path="/services/virtual-assistant" element={<VirtualAssistant />} />
        <Route path="/services/bookkeeping" element={<Bookkeeping />} />
        <Route path="/services/construction-estimation" element={<ConstructionEstimation />} />
        <Route path="/services/branding-design" element={<BrandingDesign />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;