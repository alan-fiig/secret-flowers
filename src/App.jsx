import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Invitation from "./pages/Invitation";
import Reason from "./pages/Reason";
import Curiosity from "./pages/Curiosity";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/invitation" element={<Invitation />} />
        <Route path="/reason" element={<Reason />} />
        <Route path="/curiosity" element={<Curiosity />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
