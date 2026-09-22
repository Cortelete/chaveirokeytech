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
      className="group relative w-full flex items-center overflow-hidden rounded-xl bg-slate-800/85 p-3 sm:p-4 border border-blue-500/30 shadow-lg transition-all hover:shadow-[0_0_22px_rgba(34,211,238,0.35)] hover:border-cyan-400/70 backdrop-blur-sm"
    >
      {/* Neon ambient gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 via-cyan-400/10 to-sky-400/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Neon sweep beam across button */}
      <div className="absolute -inset-y-full -left-20 w-16 bg-gradient-to-r from-transparent via-cyan-300/25 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-[420px] transition-all duration-700 pointer-events-none" />

      <div className="flex w-full items-center relative z-10">
        <div className="flex-shrink-0 text-blue-400 group-hover:text-cyan-300 transition-colors scale-90 sm:scale-100 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]">
          {icon}
        </div>
        <span className="flex-1 text-center font-medium text-slate-100 group-hover:text-white transition-colors text-xs sm:text-base pr-6 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
          {title}
        </span>
      </div>
    </motion.button>
  );
}
