import { useNavigate } from "react-router-dom";
import FadeUp from "../components/FadeUp";
import Button from "../components/Button";
import ProgressIndicator from "../components/ProgressIndicator";
import Text from "../components/Text";

function Welcome() {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen flex flex-col justify-between px-8 py-12 bg-warm-white">
      <ProgressIndicator currentStep={0} totalSteps={6} />

      <div className="max-w-sm">
        <FadeUp delay={0}>
          <h1 className="text-charcoal text-[2.5rem] font-semibold tracking-[-0.03em]">
            Hola.
          </h1>
        </FadeUp>

        <div className="mt-12 flex flex-col gap-8">
          <Text
            delay={0.4}
            text={
              "Si estás leyendo esto significa que las flores llegaron a su destino."
            }
          />

          <Text delay={0.8} text={"La operación fue un éxito."} />

          <Text
            delay={1.2}
            text={"Ningún repartidor resultó herido durante la misión."}
          />
        </div>
      </div>

      <FadeUp delay={1.6}>
        <Button onClick={() => navigate("/invitation")} />
      </FadeUp>
    </section>
  );
}

export default Welcome;
