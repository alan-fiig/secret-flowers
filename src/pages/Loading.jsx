import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FadeUp from "../components/FadeUp";
import Button from "../components/Button";
import Card from "../components/Card";
import Text from "../components/Text";

function Status() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/error"), 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section className="flex-1 flex flex-col px-8 pb-12">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-2xl p-10">
          <h2 className="text-center text-charcoal text-[1.5rem] font-semibold tracking-[-0.03em]">
            Verificando acceso
          </h2>
          <div className="flex gap-2 justify-center mt-8">
            <span
              className="h-3 w-3 rounded-full bg-forest-green animate-loading-dot"
              style={{ animationDelay: "0s" }}
            ></span>
            <span
              className="h-3 w-3 rounded-full bg-forest-green animate-loading-dot"
              style={{ animationDelay: "0.16s" }}
            ></span>
            <span
              className="h-3 w-3 rounded-full bg-forest-green animate-loading-dot"
              style={{ animationDelay: "0.32s" }}
            ></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Status;
