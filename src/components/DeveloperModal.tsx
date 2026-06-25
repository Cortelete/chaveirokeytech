import React, { useState } from "react";
import { Modal } from "./Modal";
import { Instagram, MessageCircle } from "lucide-react";

interface DeveloperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DeveloperModal({ isOpen, onClose }: DeveloperModalProps) {
  const [name, setName] = useState("");

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const message = `Olá, vi o link da CHAVEIRO KEY TECH e quero um site igual!\nMeu nome é ${name}.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/5541988710303?text=${encoded}`, "_blank");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="InteligenciArte.IA ✨">
      <div className="space-y-6">
        <p className="text-sm text-slate-300">
          Você está prestes a entrar em contato com o desenvolvedor deste site.
        </p>
        
        <a
          href="https://www.instagram.com/inteligenciarte.ia/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-lg px-4 py-3 hover:opacity-90 transition-all shadow-lg shadow-purple-500/25 active:scale-[0.98]"
        >
          <Instagram size={20} />
          <span>Siga @inteligenciarte.ia</span>
        </a>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-slate-900 px-2 text-slate-400">Quer um site incrível como esse? Fale comigo! 🚀</span>
          </div>
        </div>

        <form onSubmit={handleWhatsApp} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              Seu Nome
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
              placeholder="Digite seu nome..."
            />
          </div>
          
          <button
            type="submit"
            className="w-full flex items-center justify-center space-x-2 bg-green-500 text-white font-medium rounded-lg px-4 py-3 hover:bg-green-600 transition-all shadow-lg shadow-green-500/25 active:scale-[0.98]"
          >
            <MessageCircle size={20} />
            <span>Enviar WhatsApp</span>
          </button>
        </form>
      </div>
    </Modal>
  );
}
