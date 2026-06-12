import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "Bueno...",
  "Ahora sí.",
  "No queda nada más por desbloquear.",
  "Ni más pistas.",
  "Ni más mensajes ocultos.",
  "Solo unas cuantas horas.",
  "Nos vemos esta noche.",
  "Te quiero. ❤️",
  "El Grillo 🦗",
];

function Stars() {
  const [stars] = useState(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 3,
      duration: Math.random() * 2 + 2,
    })),
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function GoodBye() {
  const navigate = useNavigate();
  const { setIsNight } = useOutletContext();
  const [index, setIndex] = useState(0);

  const isNight = index >= 6;

  useEffect(() => {
    if (isNight) {
      setIsNight(true);
    }
    return () => setIsNight(false);
  }, [isNight, setIsNight]);

  useEffect(() => {
    const delay = index >= messages.length - 3 ? 3000 : 1500;
    const timer = setTimeout(() => {
      if (index < messages.length - 1) {
        setIndex(index + 1);
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [index, navigate]);

  return (
    <section className="flex-1 flex flex-col px-8 pb-12">
      <div className="flex-1 flex items-center justify-center relative">
        <AnimatePresence>{isNight && <Stars />}</AnimatePresence>
        <div className="w-2xl flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.h2
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5 }}
              className={`text-center text-[1.5rem] font-semibold tracking-[-0.03em] transition-colors duration-1500ms ${
                isNight ? "text-white" : "text-charcoal"
              }`}
            >
              {messages[index]}
            </motion.h2>
          </AnimatePresence>
          <div
            className={`flex h-1 w-1/4 mt-2 transition-colors duration-1500ms ${
              isNight ? "bg-white/30" : "bg-forest-green"
            }`}
          />
        </div>
      </div>
    </section>
  );
}

export default GoodBye;
