import { useNavigate } from "react-router-dom";
import NotInterestedRoundedIcon from "@mui/icons-material/NotInterestedRounded";
import FadeUp from "../components/FadeUp";
import Button from "../components/Button";
import Card from "../components/Card";
import Text from "../components/Text";

function Surrender() {
  const navigate = useNavigate();

  return (
    <section className="flex-1 flex flex-col px-8 pb-12">
      <Card>
        <div className="space-y-5 flex flex-col items-center justify-center w-full text-center">
          <FadeUp delay={0}>
            <div className="flex items-center justify-center">
              <NotInterestedRoundedIcon
                className="text-error-red"
                style={{ fontSize: "4rem" }}
              />
            </div>
          </FadeUp>
          <Text
            delay={0.4}
            text={"Resultado inesperado:"}
            style={{ fontWeight: 500 }}
          />
          <Text delay={0.8} text={"Sigue siendo no."} />
        </div>
      </Card>

      <FadeUp delay={1.2}>
        <Button
          onClick={() => navigate("/message")}
          text="Aceptar mi derrota"
        />
      </FadeUp>
    </section>
  );
}

export default Surrender;
