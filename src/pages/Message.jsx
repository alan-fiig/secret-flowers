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
            <Text delay={0.4} text={"Disfruta tu día."} />
            <Text delay={0.8} text={"Sonríe un poco."} />
            <Text
              delay={1.2}
              text={
                "Y deja de intentar desbloquear cosas que claramente están bloqueadas, jejeje."
              }
            />
          </div>
        </div>
      </div>

      <FadeUp delay={1.6}>
        <Button onClick={() => navigate("/")} text={"Está bien, esperaré"} />
      </FadeUp>
    </section>
  );
}

export default Message;
