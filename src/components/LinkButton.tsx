import { motion } from "motion/react";
import React from "react";

interface LinkButtonProps {
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
}

export function LinkButton({ icon, title, onClick }: LinkButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group relative w-full flex items-center overflow-hidden rounded-xl bg-slate-800/80 p-4 border border-blue-500/30 shadow-lg transition-all hover:shadow-blue-500/40 hover:border-blue-400/50 backdrop-blur-sm"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-sky-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="flex w-full items-center">
        <div className="flex-shrink-0 text-blue-400 group-hover:text-blue-300 transition-colors">
          {icon}
        </div>
        <span className="flex-1 text-center font-medium text-slate-100 group-hover:text-white transition-colors text-sm sm:text-base pr-6">
          {title}
        </span>
      </div>
    </motion.button>
  );
}
