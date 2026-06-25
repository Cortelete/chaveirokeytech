import React, { useState } from "react";
import { Instagram, MapPin, Star, Wrench } from "lucide-react";
import { LinkButton } from "./components/LinkButton";
import { ContactModal } from "./components/ContactModal";
import { LocationModal } from "./components/LocationModal";
import { ReviewModal } from "./components/ReviewModal";
import { DeveloperModal } from "./components/DeveloperModal";
import { AboutUsModal } from "./components/AboutUsModal";
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
      <div className="absolute inset-0 z-0 bg-slate-900/50" />

      {/* Main Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-sm sm:max-w-md max-h-[95vh] sm:max-h-none overflow-y-auto sm:overflow-visible bg-slate-900/40 backdrop-blur-md border border-blue-500/20 rounded-[2rem] p-4 sm:p-8 shadow-2xl shadow-blue-500/10 flex flex-col items-center custom-scrollbar"
      >
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-4 sm:mb-8 relative">
          <motion.div
            className={`w-24 h-24 sm:w-36 sm:h-36 rounded-full flex items-center justify-center cursor-pointer relative z-20 ${logoClicked ? "animate-[coin-spin_1s_ease-in-out_forwards]" : ""}`}
            onClick={handleLogoClick}
            whileHover={!logoClicked ? { scale: 1.05 } : {}}
          >
            {/* Using drop-shadow for transparent PNG/SVG glow effect */}
            <img
              src="/logo.png"
              alt="Logo Chaveiro Keytech"
              className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-2 sm:mt-4 text-xl sm:text-3xl font-tech font-bold tracking-tight text-center bg-gradient-to-r from-blue-400 via-sky-200 to-blue-400 bg-clip-text text-transparent animate-[gradient_4s_ease_infinite] bg-[length:200%_auto]"
          >
            CHAVEIRO KEYTECH
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-1 sm:mt-2 text-center text-slate-300 text-xs sm:text-base space-y-0.5 sm:space-y-1"
          >
            <p className="flex items-center justify-center space-x-1">
              <Wrench size={14} className="text-blue-400" />{" "}
              <span>Especialista em chaves codificadas e imobilizador</span>
            </p>
            <p>🔧 Reparo de painel e ECU</p>
            <p>🚗 Atendimento automotivo</p>
          </motion.div>
        </div>

        {/* Links Section */}
        <div className="w-full space-y-2 sm:space-y-3 mb-4 sm:mb-8">
          <LinkButton
            icon={<Instagram size={24} />}
            title="Siga no Instagram"
            onClick={() =>
              window.open(
                "https://www.instagram.com/chaveiro_keytech/",
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
