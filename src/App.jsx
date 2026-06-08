import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Invitation from "./pages/Invitation";
import Reason from "./pages/Reason";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/invitation" element={<Invitation />} />
        <Route path="/reason" element={<Reason />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
