function ProgressIndicator({ currentStep, totalSteps }) {
  const percentage = totalSteps > 1 ? (currentStep / (totalSteps - 1)) * 100 : 100;

  return (
    <div className="relative w-full">
      <div className="absolute top-1/2 left-0 right-0 h-px bg-mist-gray -translate-y-1/2" />

      <div
        className="absolute top-1/2 left-0 h-px bg-forest-green -translate-y-1/2 transition-all duration-500"
        style={{ width: `${percentage}%` }}
      />

      <div className="relative flex items-center justify-between">
        {Array.from({ length: totalSteps }).map((_, index) => {
          const active = index <= currentStep;

          return (
            <div
              key={index}
              className={`
                h-2 w-2 rounded-full z-10
                transition-all duration-500
                ${active ? "bg-forest-green" : "bg-mist-gray"}
              `}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProgressIndicator;
