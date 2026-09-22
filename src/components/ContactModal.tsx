import React, { useState } from "react";
import { Modal } from "./Modal";
import { createPortal } from "react-dom";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const servicesList = [
  {
    id: "comum",
    label: "Cópia de chave comum",
    desc: "Serviço de cópia de chaves tradicionais",
  },
  {
    id: "upgrade",
    label: "Upgrade de chave tradicional",
    desc: "Faça uma modernização em sua chave e deixe ela nos modelos atuais",
    image: "/upgradechavetradicional.jpg",
  },
  {
    id: "jeep",
    label: "Linha Jeep",
    desc: "Cópia e confecção de chave codificada",
    image: "/jeep.jpg",
  },
  {
    id: "injecao",
    label: "Reparo Central de Injeção Eletrônica",
    desc: "Reparo / Reset / Decode de ECU Linha Leve nacionais e importados",
    image: "/reparocentralinjecaoeletronica.jpg",
  },
  {
    id: "painel",
    label: "Painel Automotivo",
    desc: "Reparo, substituição de componentes, recuperação de arquivo de memória, ajuste de hodômetros nacionais e importados",
    image: "/painel.jpg",
  },
  {
    id: "ignicao",
    label: "Reparo Ignição Automotiva",
    desc: "Reparo de ignição e trocas de comutadores nacionais e importados",
    image: "/reparoingnicaoautomotiva.jpg",
  },
  {
    id: "cilindro",
    label: "Reparo Cilindro de Fechadura de Porta Automotiva",
    desc: "Reparo e substituição de excêntricos nacionais e importados",
    image: "/reparocilindrodefechaduraautomotiva.jpg",
  },
  {
    id: "honda",
    label: "Linha Honda",
    desc: "Cópia e confecção de chaves codificadas",
    image: "/honda.jpg",
  },
  {
    id: "renault",
    label: "Linha Renault",
    desc: "Cópia e confecção de chaves codificadas",
    image: "/renault.jpg",
  },
  {
    id: "abertura",
    label: "Abertura Automotiva",
    desc: "Abertura de carros nacionais e importados",
    image: "/aberturaautomotiva.jpg",
  },
  {
    id: "peugeot",
    label: "Linha Peugeot",
    desc: "Cópia e confecção de chave codificada",
    image: "/peugeot.jpg",
  },
  {
    id: "citroen",
    label: "Linha Citroen",
    desc: "Cópia e Confecção de chave codificada",
    image: "/citroen.jpg",
  },
  {
    id: "ford",
    label: "Linha Ford",
    desc: "Copias e confecção de chave codificada e programação de telecomando",
    image: "/ford.jpg",
  },
  {
    id: "chevrolet",
    label: "Linha Chevrolet",
    desc: "Cópia e Confecção de chave codificada",
    image: "/chevrolet.jpg",
  },
  {
    id: "telecomandos",
    label: "Controles e Telecomandos Automotivos",
    desc: "Reparo da placa, troca de bateria, limpeza",
    image: "/telecomandos.jpg",
  },
  {
    id: "byd",
    label: "Linha BYD",
    desc: "Chaves e confecção de chaves codificadas",
    image: "/byd.jpg",
  },
  {
    id: "gwm",
    label: "Linha GWM",
    desc: "Copia e confecção de chave codificadas",
    image: "/gwm.jpg",
  },
  {
    id: "casamento",
    label: "Casamento central/painel",
    desc: "Ajuste quando é necessário a troca de um dos dois componentes",
    image: "/casamento.jpg",
  },
  {
    id: "fiat",
    label: "Linha Fiat",
    desc: "Cópia e confecção de chaves codificadas",
    image: "/fiat.jpg",
  },
  {
    id: "volkswagen",
    label: "Linha Volkswagen",
    desc: "Cópia e confecção de chaves codificadas",
    image: "/vw.jpg",
  },
];

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [selectedServices, setSelectedServices] = useState<Set<string>>(
    new Set(),
  );
  const [carouselIndex, setCarouselIndex] = useState<number | null>(null);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEndEvent = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && carouselIndex !== null) {
      setCarouselIndex((carouselIndex + 1) % servicesList.length);
    }
    if (isRightSwipe && carouselIndex !== null) {
      setCarouselIndex(
        (carouselIndex - 1 + servicesList.length) % servicesList.length,
      );
    }
  };

  const toggleService = (id: string) => {
    const newSelected = new Set(selectedServices);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedServices(newSelected);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget;
    if (target.dataset.triedFallback) {
      target.style.display = "none";
      return;
    }
    target.dataset.triedFallback = "true";
    if (target.src.includes("telecomandos.jpg")) {
      target.src = "/controle.jpg";
    } else if (target.src.includes("telecomandos.png")) {
      target.src = "/controle.png";
    } else if (target.src.endsWith(".jpg")) {
      target.src = target.src.replace(/\.jpg$/, ".png");
    } else if (target.src.endsWith(".png")) {
      target.src = target.src.replace(/\.png$/, ".jpg");
    } else {
      target.style.display = "none";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    let message = `Olá, meu nome é ${name} e vim do site.\n\nTenho interesse nos seguintes serviços:\n`;

    if (selectedServices.size > 0) {
      servicesList.forEach((service) => {
        if (selectedServices.has(service.id)) {
          message += `- ${service.label}\n`;
        }
      });
    } else {
      message = `Olá, meu nome é ${name} e vim do site.\n\nGostaria de mais informações sobre seus serviços.\n`;
    }

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/5542999009200?text=${encoded}`, "_blank");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Fale Conosco">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col h-[70vh] sm:h-auto sm:max-h-[80vh]"
      >
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

          {servicesList.map((service, index) => (
            <div
              key={service.id}
              className="flex items-start space-x-3 group p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
            >
              <div
                className="relative flex items-center mt-1 cursor-pointer p-1 -m-1"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleService(service.id);
                }}
              >
                <input
                  type="checkbox"
                  checked={selectedServices.has(service.id)}
                  onChange={() => toggleService(service.id)}
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-slate-600 bg-slate-800 checked:border-blue-500 checked:bg-blue-500 transition-all"
                />
                <svg
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <div
                className="flex flex-1 items-start space-x-3 cursor-pointer"
                onClick={() => setCarouselIndex(index)}
              >
                {"image" in service && service.image && (
                  <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-md overflow-hidden bg-slate-800 border border-slate-700 relative group/image">
                    <img
                      src={service.image}
                      alt={service.label}
                      onError={handleImageError}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover/image:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity flex items-center justify-center">
                      <ZoomIn className="text-white w-4 h-4 sm:w-6 sm:h-6" />
                    </div>
                  </div>
                )}

                <div className="flex flex-col flex-1">
                  <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                    {service.label}
                  </span>
                  <span className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                    {service.desc}
                  </span>
                </div>
              </div>
            </div>
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

      {carouselIndex !== null &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] bg-slate-950/95 flex flex-col items-center justify-center p-4 backdrop-blur-md animate-in fade-in duration-200"
            onClick={(e) => {
              e.stopPropagation();
              setCarouselIndex(null);
            }}
          >
            <button
              className="absolute top-4 right-4 text-white p-2 bg-slate-800/80 rounded-full hover:bg-slate-700 transition-colors z-[101]"
              onClick={(e) => {
                e.stopPropagation();
                setCarouselIndex(null);
              }}
            >
              <X size={24} />
            </button>

            <div
              className="relative w-full max-w-2xl flex items-center justify-center touch-pan-y"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEndEvent}
            >
              <button
                className="absolute left-0 sm:-left-12 p-2 bg-slate-800/80 text-white rounded-full hover:bg-slate-700 transition-colors shadow-lg z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  setCarouselIndex(
                    (carouselIndex - 1 + servicesList.length) %
                      servicesList.length,
                  );
                }}
              >
                <ChevronLeft size={24} />
              </button>

              <div className="flex flex-col items-center max-h-[80vh] w-full px-12 sm:px-0">
                {"image" in servicesList[carouselIndex] &&
                servicesList[carouselIndex].image ? (
                  <div className="w-full flex-1 min-h-0 flex items-center justify-center mb-6">
                    <img
                      src={servicesList[carouselIndex].image}
                      alt={servicesList[carouselIndex].label}
                      onError={handleImageError}
                      className="max-w-full max-h-[50vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
                    />
                  </div>
                ) : (
                  <div className="w-full h-48 flex items-center justify-center bg-slate-800/50 rounded-lg mb-6 border border-slate-700">
                    <span className="text-slate-500">Imagem indisponível</span>
                  </div>
                )}

                <div className="text-center animate-in slide-in-from-bottom-4 duration-300">
                  <h3 className="text-xl sm:text-2xl font-tech font-bold tracking-tight text-white mb-2">
                    {servicesList[carouselIndex].label}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
                    {servicesList[carouselIndex].desc}
                  </p>
                  <button
                    className={`mt-6 px-6 py-2 rounded-lg font-medium transition-all ${
                      selectedServices.has(servicesList[carouselIndex].id)
                        ? "bg-slate-700 text-white hover:bg-slate-600"
                        : "bg-blue-600 text-white hover:bg-blue-500"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleService(servicesList[carouselIndex].id);
                    }}
                  >
                    {selectedServices.has(servicesList[carouselIndex].id)
                      ? "Remover da seleção"
                      : "Adicionar serviço"}
                  </button>
                </div>
              </div>

              <button
                className="absolute right-0 sm:-right-12 p-2 bg-slate-800/80 text-white rounded-full hover:bg-slate-700 transition-colors shadow-lg z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  setCarouselIndex((carouselIndex + 1) % servicesList.length);
                }}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>,
          document.body,
        )}
    </Modal>
  );
}
