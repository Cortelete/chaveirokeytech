import React from "react";
import { Modal } from "./Modal";
import { MapPin } from "lucide-react";

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LocationModal({ isOpen, onClose }: LocationModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Nossa Localização">
      <div className="space-y-4">
        <div className="flex items-start space-x-3 text-slate-300 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
          <MapPin className="text-blue-400 mt-1 flex-shrink-0" size={20} />
          <p className="text-sm leading-relaxed">
            R. Franco Grilo, 274
            <br />
            Colonia Dona Luiza – Ponta Grossa/PR
            <br />
            CEP: 84045-320
          </p>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg shadow-blue-500/10 border border-slate-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.4055212914523!2d-50.157986699999995!3d-25.1219774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e81b035e463ca1%3A0xf7362b42da38da2b!2sChaveiro%20Central%20das%20Chaves%20Oficinas!5e0!3m2!1spt-BR!2sbr!4v1790083354468!5m2!1spt-BR!2sbr"
            className="w-full h-48 sm:h-64"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Google Maps Location"
          ></iframe>
        </div>

        <a
          href="https://www.google.com/maps/search/?api=1&query=R.+Franco+Grilo,+274+-+Colonia+Dona+Luiza,+Ponta+Grossa+-+PR,+84045-320"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center bg-slate-800 text-blue-400 font-medium rounded-lg px-4 py-3 hover:bg-slate-700 hover:text-blue-300 transition-all border border-blue-500/30 active:scale-[0.98]"
        >
          Abrir no Mapa
        </a>
      </div>
    </Modal>
  );
}
