import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Outlet,
} from "react-router-dom";
import ProgressIndicator from "./components/ProgressIndicator";
import Welcome from "./pages/Welcome";
import Invitation from "./pages/Invitation";
import Reason from "./pages/Reason";
import Curiosity from "./pages/Curiosity";
import Status from "./pages/Status";

const stepMap = {
  "/": 0,
  "/invitation": 1,
  "/reason": 2,
  "/curiosity": 3,
  "/status": 4,
};

function Layout() {
  const location = useLocation();

  return (
    <div className="h-screen flex flex-col bg-warm-white">
      <div className="pt-12 px-8 shrink-0">
        <ProgressIndicator
          currentStep={stepMap[location.pathname] ?? 0}
          totalSteps={12}
        />
      </div>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Welcome />} />
          <Route path="/invitation" element={<Invitation />} />
          <Route path="/reason" element={<Reason />} />
          <Route path="/curiosity" element={<Curiosity />} />
          <Route path="/status" element={<Status />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
