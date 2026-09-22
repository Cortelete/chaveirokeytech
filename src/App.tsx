import React, { useState } from "react";
import { Instagram, MapPin, Star } from "lucide-react";
import { LinkButton } from "./components/LinkButton";
import { ContactModal } from "./components/ContactModal";
import { LocationModal } from "./components/LocationModal";
import { ReviewModal } from "./components/ReviewModal";
import { DeveloperModal } from "./components/DeveloperModal";
import { AboutUsModal } from "./components/AboutUsModal";
import { ContactChoiceModal } from "./components/ContactChoiceModal";
import { WhatsAppIcon } from "./components/WhatsAppIcon";
import { motion } from "motion/react";

export default function App() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [logoClicked, setLogoClicked] = useState(false);

  const closeModal = () => setActiveModal(null);

  const handleLogoClick = () => {
    setLogoClicked(true);
    setTimeout(() => {
      setLogoClicked(false);
      setActiveModal("about");
    }, 1000); // Wait for the animation to finish
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-900">
      {/* Animated Background Image */}
      <div
        className="absolute inset-0 z-0 bg-[url('/bg-circuito.jpg')] bg-cover opacity-60 mix-blend-screen"
        style={{
          animation:
            "pan-image 30s ease-in-out infinite, pulse-glow 8s ease-in-out infinite",
        }}
      />
      {/* Overlay for better readability */}
      <div className="absolute inset-0 z-0 bg-slate-900/60" />

      {/* --- Dynamic Neon Beams & Cyber Atmosphere in the Background --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Pulsing Ambient Neon Glow Orbs */}
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-cyan-500/25 blur-[110px] animate-[neon-pulse_5s_ease-in-out_infinite]" />
        <div className="absolute -bottom-24 -right-20 w-[32rem] h-[32rem] rounded-full bg-blue-600/30 blur-[130px] animate-[neon-pulse_6s_ease-in-out_infinite_2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-sky-400/15 blur-[100px] animate-[neon-pulse_4s_ease-in-out_infinite_1s]" />

        {/* Diagonal Neon Laser Beams */}
        <div className="absolute top-1/4 -left-1/4 w-[150%] h-[3px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee,0_0_30px_#0284c7] animate-[neon-laser-1_7s_ease-in-out_infinite]" />
        <div className="absolute top-2/3 -left-1/4 w-[150%] h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_20px_#3b82f6,0_0_40px_#1d4ed8] animate-[neon-laser-2_10s_ease-in-out_infinite_1.5s]" />

        {/* Horizontal Neon Scanner Streaks */}
        <div className="absolute top-16 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent shadow-[0_0_10px_#22d3ee] animate-pulse" />
        <div className="absolute bottom-20 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent shadow-[0_0_10px_#3b82f6] animate-pulse" />

        {/* Floating Neon Circuit Sparkles */}
        <div className="absolute top-1/5 left-1/4 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_10px_#67e8f9] animate-ping" />
        <div className="absolute bottom-1/4 right-1/4 w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_12px_#60a5fa] animate-pulse" />
        <div className="absolute top-3/4 left-1/6 w-1.5 h-1.5 rounded-full bg-sky-300 shadow-[0_0_8px_#38bdf8] animate-pulse" />
      </div>

      {/* Main Glass Card with Neon Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-sm sm:max-w-md max-h-[95vh] sm:max-h-none overflow-y-auto sm:overflow-visible bg-slate-900/60 backdrop-blur-xl border border-cyan-500/30 rounded-[2rem] p-4 sm:p-8 shadow-[0_0_35px_rgba(34,211,238,0.18),inset_0_0_25px_rgba(56,189,248,0.08)] flex flex-col items-center custom-scrollbar"
      >
        {/* --- Cyber Corner Accents inside the Card --- */}
        <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-cyan-400/80 rounded-tl-lg shadow-[0_0_8px_#22d3ee] pointer-events-none" />
        <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-cyan-400/80 rounded-tr-lg shadow-[0_0_8px_#22d3ee] pointer-events-none" />
        <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-cyan-400/80 rounded-bl-lg shadow-[0_0_8px_#22d3ee] pointer-events-none" />
        <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-cyan-400/80 rounded-br-lg shadow-[0_0_8px_#22d3ee] pointer-events-none" />

        {/* --- Interior Vertical Neon Scan Beam --- */}
        <div className="absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-cyan-400/12 to-transparent blur-sm pointer-events-none animate-[neon-scanline_6s_ease-in-out_infinite]" />

        {/* Profile Section */}
        <div className="flex flex-col items-center mb-2 sm:mb-4 relative">
          {/* Logo Neon Aura Glow */}
          <div className="absolute top-6 w-36 h-36 sm:w-48 sm:h-48 rounded-full bg-gradient-to-r from-cyan-500/25 via-blue-500/20 to-sky-400/25 blur-2xl animate-[neon-pulse_4s_ease-in-out_infinite] pointer-events-none" />

          <motion.div
            className={`-mt-4 sm:-mt-6 w-44 h-44 sm:w-56 sm:h-56 rounded-full flex items-center justify-center cursor-pointer relative z-20 ${logoClicked ? "animate-[coin-spin_1s_ease-in-out_forwards]" : ""}`}
            onClick={handleLogoClick}
            whileHover={!logoClicked ? { scale: 1.05 } : {}}
          >
            {/* Using drop-shadow for transparent PNG/SVG glow effect */}
            <img
              src="/logo.png"
              alt="Logo Central das Chaves Oficinas"
              className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(34,211,238,0.7)]"
            />
          </motion.div>

          <motion.button
            onClick={() => setActiveModal("contactChoice")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="relative z-30 mt-0 sm:mt-1 block text-xl sm:text-3xl font-tech font-bold tracking-tight text-center bg-gradient-to-r from-cyan-300 via-sky-100 to-blue-400 bg-clip-text text-transparent animate-[gradient_4s_ease_infinite] bg-[length:200%_auto] hover:opacity-80 transition-opacity drop-shadow-[0_0_12px_rgba(34,211,238,0.65)]"
            title="Opções de Contato"
          >
            (42) 99900-9200
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-1 sm:mt-2 text-center text-slate-300 text-[11px] sm:text-xs tracking-wide space-y-0.5 sm:space-y-1"
          >
            <p>Especialista em chaves codificadas e imobilizador</p>
            <p>Reparo de painel e ECU</p>
            <p>Atendimento automotivo</p>
          </motion.div>

          {/* Neon Divider */}
          <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent mt-3 mb-1 shadow-[0_0_8px_#22d3ee] relative">
            <div className="absolute left-1/2 -top-0.5 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_6px_#67e8f9]" />
          </div>
        </div>

        {/* Links Section */}
        <div className="w-full space-y-2 sm:space-y-3 mb-4 sm:mb-8 relative z-20">
          <LinkButton
            icon={<Instagram size={24} />}
            title="Siga no Instagram"
            onClick={() =>
              window.open(
                "https://www.instagram.com/central_das_chaves_oficinas/",
                "_blank",
              )
            }
          />
          <LinkButton
            icon={<WhatsAppIcon size={24} />}
            title="Fale Conosco (WhatsApp)"
            onClick={() => setActiveModal("contact")}
          />
          <LinkButton
            icon={<MapPin size={24} />}
            title="Nossa Localização"
            onClick={() => setActiveModal("location")}
          />
          <LinkButton
            icon={<Star size={24} />}
            title="Avalie nosso atendimento"
            onClick={() => setActiveModal("review")}
          />
        </div>

        {/* Footer */}
        <div className="mt-auto w-full text-center">
          <button
            onClick={() => setActiveModal("developer")}
            className="text-xs sm:text-sm text-slate-500 hover:text-blue-400 transition-colors bg-gradient-to-r from-slate-500 to-slate-400 bg-clip-text hover:text-transparent"
          >
            Desenvolvido por InteligenciArte.IA ✨
          </button>
        </div>
      </motion.div>

      {/* Modals */}
      <AboutUsModal isOpen={activeModal === "about"} onClose={closeModal} />
      <ContactChoiceModal
        isOpen={activeModal === "contactChoice"}
        onClose={closeModal}
        onWhatsAppClick={() => setActiveModal("contact")}
      />
      <ContactModal isOpen={activeModal === "contact"} onClose={closeModal} />
      <LocationModal isOpen={activeModal === "location"} onClose={closeModal} />
      <ReviewModal isOpen={activeModal === "review"} onClose={closeModal} />
      <DeveloperModal
        isOpen={activeModal === "developer"}
        onClose={closeModal}
      />
    </div>
  );
}
