import React from "react";
import { Modal } from "./Modal";
import { Phone, MessageCircle } from "lucide-react";

interface ContactChoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onWhatsAppClick: () => void;
}

export function ContactChoiceModal({
  isOpen,
  onClose,
  onWhatsAppClick,
}: ContactChoiceModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Como deseja entrar em contato?"
    >
      <div className="flex flex-col sm:flex-row gap-4 p-2">
        <a
          href="tel:+5542999009200"
          className="flex-1 flex flex-col items-center justify-center gap-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl p-6 transition-all border border-slate-700"
          onClick={onClose}
        >
          <div className="bg-blue-500/20 p-4 rounded-full text-blue-400">
            <Phone size={32} />
          </div>
          <span className="font-medium text-lg">Ligar</span>
          <span className="text-sm text-slate-400 text-center">
            Falar diretamente pelo telefone
          </span>
        </a>

        <button
          className="flex-1 flex flex-col items-center justify-center gap-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl p-6 transition-all border border-slate-700"
          onClick={() => {
            onClose();
            onWhatsAppClick();
          }}
        >
          <div className="bg-green-500/20 p-4 rounded-full text-green-400">
            <MessageCircle size={32} />
          </div>
          <span className="font-medium text-lg">WhatsApp</span>
          <span className="text-sm text-slate-400 text-center">
            Enviar mensagem personalizada
          </span>
        </button>
      </div>
    </Modal>
  );
}
