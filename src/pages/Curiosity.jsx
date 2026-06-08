import { useNavigate } from "react-router-dom";
import FadeUp from "../components/FadeUp";
import Button from "../components/Button";
import Text from "../components/Text";

function Curiosity() {
  const navigate = useNavigate();

  return (
    <section className="flex-1 flex flex-col px-8 pb-12">
      <div className="flex-1 flex items-center justify-start">
        <div className="flex flex-col gap-8">
          <Text delay={0} text={"No necesitas adivinar."} />
          <Text delay={0.4} text={"No necesitas preguntarme."} />
          <Text delay={0.8} text={"No necesitas intentar descubrirlo."} />
          <Text
            delay={1.2}
            text={"Solo guarda un poco de curiosidad para más tarde."}
          />
        </div>
      </div>

      <FadeUp delay={1.4}>
        <Button onClick={() => navigate("/")} text={"Continuar"} />
      </FadeUp>
    </section>
  );
}

export default Curiosity;
