import FadeUp from "../components/FadeUp";
import Button from "../components/Button";
import ProgressIndicator from "../components/ProgressIndicator";
import Text from "../components/Text";

function Reason() {
  return (
    <section className="min-h-screen flex flex-col justify-between px-8 py-12 bg-warm-white">
      <ProgressIndicator currentStep={2} totalSteps={6} />

      <div className="flex flex-col gap-8">
        <Text
          delay={0}
          text={"Hay una razón por la que te mandé estas flores."}
        />
        <Text delay={0.4} text={"Pero todavía no es momento de explicarla."} />
        <Text delay={0.8} text={"Y sí..."} />
        <Text delay={1.2} text={"Lo hice a propósito."} />
        <Text delay={1.6} text={"Oh, quizás no?"} />
      </div>

      <FadeUp delay={2}>
        <Button text={"Está bien"} />
      </FadeUp>
    </section>
  );
}

export default Reason;
