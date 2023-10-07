import { BrowserRouter, Route, Routes } from "react-router-dom";

import Topbar from "./components/Topbar";
import PrincipalPage from "./pages/PrincipalPage";
import NotFoundPage from "./pages/NotFoundPage";

import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<PrincipalPage />} />
        <Route path="/suscripciones" element={<PrincipalPage />} />
        <Route path="/liked-videos" element={<PrincipalPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
