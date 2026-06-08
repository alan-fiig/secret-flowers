import { useNavigate } from "react-router-dom";
import FadeUp from "../components/FadeUp";
import Button from "../components/Button";
import Text from "../components/Text";

function Reason() {
  const navigate = useNavigate();

  return (
    <section className="flex-1 flex flex-col px-8 pb-12">
      <div className="flex-1 flex items-center justify-start">
        <div className="flex flex-col gap-8">
          <Text
            delay={0}
            text={"Hay una razón por la que te mandé estas flores."}
          />
          <Text
            delay={0.4}
            text={"Pero todavía no es momento de explicarla."}
          />
          <Text delay={0.8} text={"Y sí..."} />
          <Text delay={1.2} text={"Lo hice a propósito."} />
          <Text delay={1.6} text={"Oh, quizás no?"} />
        </div>
      </div>

      <FadeUp delay={2}>
        <Button onClick={() => navigate("/curiosity")} text={"Está bien"} />
      </FadeUp>
    </section>
  );
}

export default Reason;
