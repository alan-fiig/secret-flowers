import { useNavigate } from "react-router-dom";
import FadeUp from "../components/FadeUp";
import Button from "../components/Button";
import ProgressIndicator from "../components/ProgressIndicator";
import Text from "../components/Text";

function Reason() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex flex-col justify-between px-8 py-12 bg-warm-white">
      <ProgressIndicator currentStep={3} totalSteps={6} />

      <div className="flex flex-col gap-8">
        <Text delay={0} text={"No necesitas adivinar."} />
        <Text delay={0.4} text={"No necesitas preguntarme."} />
        <Text delay={0.8} text={"No necesitas intentar descubrirlo."} />
        <Text
          delay={1.2}
          text={"Solo guarda un poco de curiosidad para más tarde."}
        />
      </div>

      <FadeUp delay={1.4}>
        <Button onClick={() => navigate("/")} text={"Continuar"} />
      </FadeUp>
    </section>
  );
}

export default Reason;
