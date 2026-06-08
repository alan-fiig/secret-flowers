import FadeUp from "../components/FadeUp";
import Button from "../components/Button";
import ProgressIndicator from "../components/ProgressIndicator";
import Text from "../components/Text";

function Invitation() {
  return (
    <section className="min-h-screen flex flex-col justify-between px-8 py-12 bg-warm-white">
      <ProgressIndicator currentStep={0} totalSteps={6} />

      <div className="flex flex-col gap-8">
        <Text delay={0} text={"Más tarde estaremos lejos del ruido."} />
        <Text delay={0.4} text={"Lejos de la rutina."} />
        <Text delay={0.8} text={"Con aire fresco."} />
        <Text delay={1.2} text={"Con buena música de fondo."} />
        <Text delay={1.6} text={"Y con unas cuantas horas por delante."} />
      </div>

      <FadeUp delay={2}>
        <Button />
      </FadeUp>
    </section>
  );
}

export default Invitation;
