import { useNavigate } from "react-router-dom";
import FadeUp from "../components/FadeUp";
import Button from "../components/Button";
import Text from "../components/Text";

function Welcome() {
  const navigate = useNavigate();

  return (
    <section className="flex-1 flex flex-col px-8 pb-12">
      <div className="flex-1 flex items-center justify-start">
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
              text={"Ningún repartidor resultó herido durante la entrega."}
            />
          </div>
        </div>
      </div>

      <FadeUp delay={1.6}>
        <Button onClick={() => navigate("/invitation")} text={"Continuar"} />
      </FadeUp>
    </section>
  );
}

export default Welcome;
