import { useNavigate } from "react-router-dom";
import FadeUp from "../components/FadeUp";
import Button from "../components/Button";
import Text from "../components/Text";

function Message() {
  const navigate = useNavigate();

  return (
    <section className="flex-1 flex flex-col px-8 pb-12">
      <div className="flex-1 flex items-center justify-start">
        <div className="max-w-sm">
          <div className="mt-12 flex flex-col gap-8">
            <Text
              delay={0}
              text={"Mientras tanto..."}
              style={{ fontWeight: 500 }}
            />
            <Text delay={0.4} text={"Hazme un favor."} />
            <Text delay={0.8} text={"No le des demasiadas vueltas."} />
            <Text delay={1.2} text={"No intentes resolverlo."} />
            <Text delay={1.6} text={"No intentes encontrar pistas."} />
            <Text
              delay={2}
              text={"Porque esta noche todo va a tener sentido."}
            />
          </div>
        </div>
      </div>

      <FadeUp delay={2.4}>
        <Button
          onClick={() => navigate("/goodbye")}
          text={"Está bien, esperaré"}
        />
      </FadeUp>
    </section>
  );
}

export default Message;
