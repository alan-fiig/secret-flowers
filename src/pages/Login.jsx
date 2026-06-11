import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FadeUp from "../components/FadeUp";
import Button from "../components/Button";
import Card from "../components/Card";

const validAnswers = [
  "flores",
  "un ramo",
  "claveles",
  "una sorpresa",
  "un regalo",
];

function Login() {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = () => {
    const normalized = answer.trim().toLowerCase();
    if (validAnswers.includes(normalized)) {
      navigate("/welcome");
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <section className="flex-1 flex flex-col px-8 pb-12">
      <Card>
        <FadeUp delay={0}>
          <h2 className="text-charcoal text-[1.5rem] font-semibold tracking-[-0.03em] text-center">
            ¿Qué recibiste hoy?
          </h2>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div className="mt-8 w-full max-w-xs">
            <input
              type="text"
              value={answer}
              onChange={(e) => {
                setAnswer(e.target.value);
                setError(false);
              }}
              onKeyDown={handleKeyDown}
              placeholder="Escribe tu respuesta..."
              className={`w-full p-4 rounded-xl border text-center text-charcoal placeholder:text-mist-gray outline-none transition-all ${
                shake ? "animate-shake" : ""
              } ${
                error
                  ? "border-error-red"
                  : "border-mist-gray focus:border-sage-green"
              }`}
            />
            {error && (
              <p className="text-error-red text-sm mt-3 text-center">
                Nombre de las flores...
              </p>
            )}
          </div>
        </FadeUp>

        <FadeUp delay={0.8}>
          <div className="mt-8 w-full max-w-xs">
            <Button onClick={handleSubmit} text="Entrar" />
          </div>
        </FadeUp>
      </Card>
    </section>
  );
}

export default Login;
