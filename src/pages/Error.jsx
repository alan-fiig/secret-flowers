import { useNavigate } from "react-router-dom";
import NotInterestedRoundedIcon from "@mui/icons-material/NotInterestedRounded";
import FadeUp from "../components/FadeUp";
import Button from "../components/Button";
import Card from "../components/Card";
import Text from "../components/Text";

function Error() {
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
          <FadeUp delay={0.4}>
            <h2 className="text-charcoal text-[1.5rem] font-semibold tracking-[-0.03em]">
              Acceso denegado
            </h2>
          </FadeUp>
          <Text
            delay={0.8}
            text={
              <>
                Bonito intento.
                <br />
                Todavía no.
              </>
            }
          />
        </div>
      </Card>

      <FadeUp delay={1.2}>
        <Button
          onClick={() => navigate("/surrender")}
          text="Intentar otra vez"
        />
      </FadeUp>
    </section>
  );
}

export default Error;
