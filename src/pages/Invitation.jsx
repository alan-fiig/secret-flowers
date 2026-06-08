import { useNavigate } from "react-router-dom";
import FadeUp from "../components/FadeUp";
import Button from "../components/Button";
import Text from "../components/Text";

function Invitation() {
  const navigate = useNavigate();

  return (
    <section className="flex-1 flex flex-col px-8 pb-12">
      <div className="flex-1 flex items-center justify-start">
        <div className="flex flex-col gap-8">
          <Text delay={0} text={"Más tarde estaremos lejos del ruido."} />
          <Text delay={0.4} text={"Lejos de la rutina."} />
          <Text delay={0.8} text={"Con aire fresco."} />
          <Text delay={1.2} text={"Con buena música de fondo."} />
          <Text delay={1.6} text={"Y con unas cuantas horas por delante."} />
        </div>
      </div>

      <FadeUp delay={2}>
        <Button onClick={() => navigate("/reason")} text={"Seguir"} />
      </FadeUp>
    </section>
  );
}

export default Invitation;
