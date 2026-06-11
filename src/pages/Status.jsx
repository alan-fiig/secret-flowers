import { useNavigate } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import AccessTime from "@mui/icons-material/AccessTime";
import LocationOn from "@mui/icons-material/LocationOn";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FadeUp from "../components/FadeUp";
import Button from "../components/Button";
import Card from "../components/Card";

const items = [
  { label: "Estado actual", icon: null, border: true },
  { label: "Flores entregadas", icon: CheckIcon, border: true },
  { label: "Mensaje enviado", icon: CheckIcon, border: true },
  { label: "Asunto pendiente", icon: AccessTime, border: true },
  {
    label: "Próxima actualización:",
    sub: "Esta noche",
    icon: LocationOn,
    border: false,
  },
];

function Status() {
  const navigate = useNavigate();

  return (
    <section className="flex-1 flex flex-col px-8 pb-12">
      <Card>
        <ul className="space-y-5 w-full">
          {items.map(({ label, sub, icon: Icon, border }, i) => (
            <FadeUp key={label} delay={i * 0.4}>
              {Icon ? (
                <li
                  className={`flex items-center${border ? " border-b border-mist-gray pb-5" : ""}`}
                >
                  <Icon className="text-sage-green" />
                  <span className="text-gray-500 ml-2">
                    {label}
                    {sub && (
                      <>
                        <br />
                        {sub}
                      </>
                    )}
                  </span>
                </li>
              ) : (
                <li
                  className="flex justify-between items-center border-b border-mist-gray pb-5 text-lg"
                  style={{ fontWeight: 500 }}
                >
                  {label}
                  <MoreHorizIcon className="text-sage-green" />
                </li>
              )}
            </FadeUp>
          ))}
        </ul>
      </Card>

      <FadeUp delay={2}>
        <Button
          onClick={() => navigate("/tonight")}
          text="Ver mensaje de esta noche"
        />
      </FadeUp>
    </section>
  );
}

export default Status;
