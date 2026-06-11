import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "Hasta esta tarde",
  "Y recuerda, que",
  "Te quiero mucho hermosa",
  "❤️",
  "Atte",
  "El Grillo",
  "🦗",
];

function GoodBye() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < messages.length - 1) {
        setIndex(index + 1);
      } else {
        navigate("/");
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, [index, navigate]);

  return (
    <section className="flex-1 flex flex-col px-8 pb-12">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-2xl flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.h2
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5 }}
              className="text-center text-charcoal text-[1.5rem] font-semibold tracking-[-0.03em]"
            >
              {messages[index]}
            </motion.h2>
          </AnimatePresence>
          <div className="flex h-1 w-1/4 mt-2 bg-forest-green" />
        </div>
      </div>
    </section>
  );
}

export default GoodBye;
