function FloralPattern() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="floral"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            {/* Flor central */}
            <circle cx="50" cy="50" r="6" fill="#FFF6F7" />

            {/* Pétalos principales */}
            <ellipse
              cx="50"
              cy="38"
              rx="5"
              ry="10"
              fill="#EBC1CB"
              opacity="0.6"
            />
            <ellipse
              cx="50"
              cy="62"
              rx="5"
              ry="10"
              fill="#EBC1CB"
              opacity="0.6"
            />
            <ellipse
              cx="38"
              cy="50"
              rx="10"
              ry="5"
              fill="#EBC1CB"
              opacity="0.6"
            />
            <ellipse
              cx="62"
              cy="50"
              rx="10"
              ry="5"
              fill="#EBC1CB"
              opacity="0.6"
            />

            {/* Pétalos diagonales */}
            <ellipse
              cx="41"
              cy="41"
              rx="4"
              ry="8"
              fill="#F1DDE2"
              opacity="0.4"
              transform="rotate(-45 41 41)"
            />
            <ellipse
              cx="59"
              cy="41"
              rx="4"
              ry="8"
              fill="#F1DDE2"
              opacity="0.4"
              transform="rotate(45 59 41)"
            />
            <ellipse
              cx="41"
              cy="59"
              rx="4"
              ry="8"
              fill="#F1DDE2"
              opacity="0.4"
              transform="rotate(45 41 59)"
            />
            <ellipse
              cx="59"
              cy="59"
              rx="4"
              ry="8"
              fill="#F1DDE2"
              opacity="0.4"
              transform="rotate(-45 59 59)"
            />

            {/* Hojas */}
            <circle cx="10" cy="10" r="4" fill="#F1DDE2" opacity="0.3" />
            <circle cx="90" cy="10" r="4" fill="#F1DDE2" opacity="0.3" />
            <circle cx="10" cy="90" r="4" fill="#F1DDE2" opacity="0.3" />
            <circle cx="90" cy="90" r="4" fill="#F1DDE2" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#floral)" />
      </svg>
    </div>
  );
}

export default FloralPattern;
