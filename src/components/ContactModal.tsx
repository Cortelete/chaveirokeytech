import React, { useState } from "react";
import { Modal } from "./Modal";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const servicesList = [
  { id: "comum", label: "Cópia de chave comum", desc: "Serviço de cópia de chaves tradicionais" },
  { id: "upgrade", label: "Upgrade de chave tradicional", desc: "Faça uma modernização em sua chave e deixe ela nos modelos atuais" },
  { id: "jeep", label: "Linha Jeep", desc: "Cópia e confecção de chave codificada" },
  { id: "injecao", label: "Reparo Central de Injeção Eletrônica", desc: "Reparo / Reset / Decode de ECU Linha Leve nacionais e importados" },
  { id: "painel", label: "Painel Automotivo", desc: "Reparo, substituição de componentes, recuperação de arquivo de memória, ajuste de hodômetros nacionais e importados" },
  { id: "ignicao", label: "Reparo Ignição Automotiva", desc: "Reparo de ignição e trocas de comutadores nacionais e importados" },
  { id: "cilindro", label: "Reparo Cilindro de Fechadura de Porta Automotiva", desc: "Reparo e substituição de excêntricos nacionais e importados" },
  { id: "honda", label: "Linha Honda", desc: "Cópia e confecção de chaves codificadas" },
  { id: "renault", label: "Linha Renault", desc: "Cópia e confecção de chaves codificadas" },
  { id: "abertura", label: "Abertura Automotiva", desc: "Abertura de carros nacionais e importados" },
  { id: "peugeot", label: "Linha Peugeot", desc: "Cópia e confecção de chave codificada" },
  { id: "citroen", label: "Linha Citroen", desc: "Cópia e Confecção de chave codificada" },
  { id: "ford", label: "Linha Ford", desc: "Copias e confecção de chave codificada e programação de telecomando" },
  { id: "chevrolet", label: "Linha Chevrolet", desc: "Cópia e Confecção de chave codificada" },
  { id: "telecomandos", label: "Controles e Telecomandos Automotivos", desc: "Reparo da placa, troca de bateria, limpeza" },
  { id: "byd", label: "Linha BYD", desc: "Chaves e confecção de chaves codificadas" },
  { id: "gwm", label: "Linha GWM", desc: "Copia e confecção de chave codificadas" },
  { id: "casamento", label: "Casamento central/painel", desc: "Ajuste quando é necessário a troca de um dos dois componentes" },
  { id: "fiat", label: "Linha Fiat", desc: "Cópia e confecção de chaves codificadas" },
  { id: "volkswagen", label: "Linha Volkswagen", desc: "Cópia e confecção de chaves codificadas" },
];

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [selectedServices, setSelectedServices] = useState<Set<string>>(new Set());

  const toggleService = (id: string) => {
    const newSelected = new Set(selectedServices);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedServices(newSelected);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    let message = `Olá! Meu nome é ${name}.\n\nTenho interesse nos seguintes serviços:\n`;
    
    if (selectedServices.size > 0) {
      servicesList.forEach(service => {
        if (selectedServices.has(service.id)) {
          message += `- ${service.label}\n`;
        }
      });
    } else {
      message += `Gostaria de mais informações sobre seus serviços.\n`;
    }

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/5542999009200?text=${encoded}`, "_blank");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Fale Conosco">
      <form onSubmit={handleSubmit} className="flex flex-col h-[70vh] sm:h-auto sm:max-h-[80vh]">
        <div className="flex-shrink-0 pb-4">
          <label className="block text-sm font-medium text-slate-300 mb-1">
            Seu Nome
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            placeholder="Digite seu nome..."
          />
        </div>
        
        <div className="flex-1 overflow-y-auto pr-2 pb-4 space-y-3 custom-scrollbar">
          <p className="text-sm font-medium text-slate-300 sticky top-0 bg-slate-900 py-2 z-10 border-b border-slate-800">
            Selecione os serviços de interesse:
          </p>
          
          {servicesList.map((service) => (
            <label key={service.id} className="flex items-start space-x-3 cursor-pointer group p-2 rounded-lg hover:bg-slate-800/50 transition-colors">
              <div className="relative flex items-center mt-0.5">
                <input
                  type="checkbox"
                  checked={selectedServices.has(service.id)}
                  onChange={() => toggleService(service.id)}
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-slate-600 bg-slate-800 checked:border-blue-500 checked:bg-blue-500 transition-all"
                />
                <svg
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                  {service.label}
                </span>
                <span className="text-xs text-slate-400 mt-0.5">
                  {service.desc}
                </span>
              </div>
            </label>
          ))}
        </div>

        <div className="flex-shrink-0 pt-4 border-t border-slate-800">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-sky-500 text-white font-medium rounded-lg px-4 py-3 hover:from-blue-500 hover:to-sky-400 transition-all shadow-lg shadow-blue-500/25 active:scale-[0.98]"
          >
            Confirmar e Enviar
          </button>
        </div>
      </form>
    </Modal>
  );
}
