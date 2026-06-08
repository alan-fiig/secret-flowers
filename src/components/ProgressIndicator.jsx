import { motion } from "framer-motion";

function ProgressIndicator({ currentStep, totalSteps }) {
  const percentage =
    totalSteps > 1 ? (currentStep / (totalSteps - 1)) * 100 : 100;

  return (
    <div className="relative w-full">
      <div className="absolute top-1/2 left-0 right-0 h-px bg-mist-gray -translate-y-1/2" />

      <motion.div
        className="absolute top-1/2 left-0 h-px bg-forest-green -translate-y-1/2 origin-left"
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="relative flex items-center justify-between">
        {Array.from({ length: totalSteps }).map((_, index) => {
          const active = index <= currentStep;
          const isCurrent = index === currentStep;

          return (
            <motion.div
              key={index}
              className={`
                h-2 w-2 rounded-full z-10
                ${active ? "bg-forest-green" : "bg-mist-gray"}
              `}
              animate={{
                scale: isCurrent ? 1.5 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProgressIndicator;
