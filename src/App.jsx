import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Invitation from "./pages/Invitation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/invitation" element={<Invitation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
