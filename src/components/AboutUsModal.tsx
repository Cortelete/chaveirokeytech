import React from "react";
import { Modal } from "./Modal";

interface AboutUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AboutUsModal({ isOpen, onClose }: AboutUsModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Quem Somos">
      <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
        <p>
          A{" "}
          <span className="text-blue-400 font-semibold">
            Central das Chaves Oficinas
          </span>{" "}
          é referência em serviços automotivos em Ponta Grossa. Especializada em
          tecnologia embarcada, oferecemos soluções completas para a segurança e
          funcionamento do seu veículo.
        </p>
        <p>
          Nossa expertise abrange chaves codificadas, imobilizadores, e reparo
          avançado de painéis e módulos ECU. Trabalhamos com equipamentos de
          ponta para garantir um serviço rápido, seguro e eficiente.
        </p>
        <p>
          Nosso compromisso é entregar não apenas um serviço, mas a
          tranquilidade de saber que seu veículo está em mãos de especialistas.
        </p>
      </div>
    </Modal>
  );
}
