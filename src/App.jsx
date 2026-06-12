import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Outlet,
} from "react-router-dom";
import ProgressIndicator from "./components/ProgressIndicator";
import FloralPattern from "./components/FloralPattern";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Invitation from "./pages/Invitation";
import Reason from "./pages/Reason";
import Curiosity from "./pages/Curiosity";
import Status from "./pages/Status";
import Tonight from "./pages/Tonight";
import Loading from "./pages/Loading";
import Error from "./pages/Error";
import Surrender from "./pages/Surrender";
import Message from "./pages/Message";
import GoodBye from "./pages/GoodBye";

const stepMap = {
  "/login": 0,
  "/welcome": 0,
  "/invitation": 1,
  "/reason": 2,
  "/curiosity": 3,
  "/status": 4,
  "/tonight": 5,
  "/loading": 6,
  "/error": 7,
  "/surrender": 8,
  "/message": 9,
  "/goodbye": 10,
};

function Layout() {
  const location = useLocation();
  const isLogin = location.pathname === "/";
  const [isNight, setIsNight] = useState(false);

  return (
    <div
      className={`h-screen flex flex-col relative transition-colors duration-1500 ${isNight ? "bg-linear-to-b from-[#0f172a] to-[#1e293b]" : "bg-warm-white"}`}
    >
      <FloralPattern isNight={isNight} />
      {!isLogin && (
        <div
          className={`pt-12 px-8 shrink-0 z-10 transition-colors duration-1500 ${isNight ? "bg-transparent" : ""}`}
        >
          <ProgressIndicator
            currentStep={stepMap[location.pathname] ?? 0}
            totalSteps={11}
            isNight={isNight}
          />
        </div>
      )}
      <div className="flex-1 flex flex-col z-10">
        <Outlet context={{ setIsNight }} />
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/invitation" element={<Invitation />} />
          <Route path="/reason" element={<Reason />} />
          <Route path="/curiosity" element={<Curiosity />} />
          <Route path="/status" element={<Status />} />
          <Route path="/tonight" element={<Tonight />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/error" element={<Error />} />
          <Route path="/surrender" element={<Surrender />} />
          <Route path="/message" element={<Message />} />
          <Route path="/goodbye" element={<GoodBye />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
