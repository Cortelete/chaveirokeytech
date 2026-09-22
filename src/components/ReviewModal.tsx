import React, { useState } from "react";
import { Modal } from "./Modal";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReviewModal({ isOpen, onClose }: ReviewModalProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating);
    if (selectedRating === 5) {
      window.open(
        "https://search.google.com/local/writereview?placeid=ChIJoTxGXgMb6JQRK9o42kIrNvc",
        "_blank",
      );
      onClose();
    } else {
      setShowFeedbackForm(true);
    }
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending to formsubmit
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "https://formsubmit.co/your-email@example.com"; // Placeholder email as per request
    form.target = "_blank";

    const input = document.createElement("input");
    input.type = "hidden";
    input.name = "Feedback";
    input.value = `Nota: ${rating} estrelas\nMotivo: ${feedback}`;
    form.appendChild(input);

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    onClose();
  };

  // Reset state when opened
  React.useEffect(() => {
    if (isOpen) {
      setRating(0);
      setHoveredRating(0);
      setShowFeedbackForm(false);
      setFeedback("");
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Avalie nosso serviço">
      <AnimatePresence mode="wait">
        {!showFeedbackForm ? (
          <motion.div
            key="stars"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center py-6 space-y-6"
          >
            <p className="text-slate-300 text-center font-medium">
              Como foi sua experiência com a Central das Chaves Oficinas?
            </p>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  onClick={() => handleStarClick(star)}
                  className="p-1 focus:outline-none transition-transform hover:scale-110"
                >
                  <Star
                    size={40}
                    className={`${
                      (hoveredRating || rating) >= star
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-slate-600"
                    } transition-all`}
                  />
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="feedback"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={handleFeedbackSubmit}
            className="space-y-4"
          >
            <p className="text-slate-300 text-sm font-medium">
              Poxa, sentimos muito por não atingir 5 estrelas. Poderia nos
              contar o que houve e como podemos melhorar?
            </p>
            <textarea
              required
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              placeholder="Digite seu feedback..."
              rows={4}
            />
            <div className="flex space-x-3 pt-2">
              <button
                type="button"
                onClick={() => setShowFeedbackForm(false)}
                className="flex-1 bg-slate-800 text-slate-300 font-medium rounded-lg px-4 py-3 hover:bg-slate-700 transition-all"
              >
                Voltar
              </button>
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-medium rounded-lg px-4 py-3 hover:from-blue-500 hover:to-sky-400 transition-all shadow-lg shadow-blue-500/25"
              >
                Enviar
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </Modal>
  );
}
