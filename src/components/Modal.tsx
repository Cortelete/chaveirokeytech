import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-3 sm:p-4 overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg max-h-[90vh] flex flex-col bg-slate-900 border border-blue-500/20 rounded-2xl shadow-2xl shadow-blue-500/20 overflow-hidden relative my-auto"
          >
            {title && (
              <div className="flex-shrink-0 flex items-center justify-between p-4 border-b border-white/10">
                <h3 className="text-lg font-semibold text-white bg-gradient-to-r from-blue-300 to-sky-100 bg-clip-text text-transparent">
                  {title}
                </h3>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors p-1"
                >
                  <X size={20} />
                </button>
              </div>
            )}
            {!title && (
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white transition-colors p-1"
              >
                <X size={20} />
              </button>
            )}
            <div className="p-4 sm:p-6 overflow-hidden flex-1 min-h-0 flex flex-col">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
