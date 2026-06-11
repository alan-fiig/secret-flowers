import { useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FadeUp from "../components/FadeUp";
import Button from "../components/Button";
import Card from "../components/Card";
import Text from "../components/Text";

function Status() {
  const navigate = useNavigate();

  return (
    <section className="flex-1 flex flex-col px-8 pb-12">
      <Card>
        <div className="space-y-10 flex flex-col items-center justify-center w-full text-center">
          <FadeUp delay={0}>
            <h2 className="text-charcoal text-[1.5rem] font-semibold tracking-[-0.03em]">
              Mensaje para esta noche
            </h2>
          </FadeUp>
          <FadeUp delay={0.4}>
            <div className="flex items-center justify-center h-22 w-22 bg-mist-gray rounded-full">
              <LockOutlinedIcon
                className="text-sage-green"
                style={{ fontSize: "2rem" }}
              />
            </div>
          </FadeUp>
          <Text delay={0.8} text={"Contenido protegido."} />
        </div>
      </Card>

      <FadeUp delay={2}>
        <Button onClick={() => navigate("/status")} text="Intentar abrir" />
      </FadeUp>
    </section>
  );
}

export default Status;
