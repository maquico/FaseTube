// ClerkWithRoutes.jsx
import {
  ClerkProvider,
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import { esES } from "@clerk/localizations";
import { useNavigate, Routes, Route } from "react-router-dom";
import ProtectedPage from "../ProtectedPage";
import PrincipalPage from "../pages/PrincipalPage";
import VisualizadorPage from "../pages/VisualizadorPage";
import NotFoundPage from "../pages/NotFoundPage";
import Topbar from "./Topbar";
import BusquedaPage from "../pages/BusquedaPage";
import CanalPage from "../pages/CanalPage";

import App from "../App";
import SubirVideoPage from "../pages/SubirVideoPage";
import SuscripcionesPage from "../pages/SuscripcionesPage";

const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;
App.clerkPubKey = clerkPubKey;

const ClerkWithRoutes = () => {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      localization={esES}
      publishableKey={clerkPubKey}
      navigate={(to) => navigate(to)}
    >
      <Topbar />
      <Routes>
        <Route path="/" element={<PrincipalPage />} />
        <Route path="/buscar/:busqueda" element={<BusquedaPage />} />
        <Route path="/ver/:video" element={<VisualizadorPage />} />
        <Route path="/canal/:canal" element={<CanalPage />} />
        <Route path="/subir-video" element={<SubirVideoPage />} />
        <Route path="/suscripciones" element={<SuscripcionesPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route
          path="/sign-in/*"
          element={
            <div className="flex justify-center items-center h-[80vh]">
              <SignIn
                redirectUrl={"/protected"}
                routing="path"
                path="/sign-in"
              />
            </div>
          }
        />
        <Route
          path="/sign-up/*"
          element={
            <div className="flex justify-center items-center h-[80vh]">
              <SignUp
                redirectUrl={"/protected"}
                routing="path"
                path="/sign-up"
              />
            </div>
          }
        />
        <Route
          path="/protected"
          element={
            <>
              <SignedIn>
                <ProtectedPage />
              </SignedIn>
              <SignedOut></SignedOut>
            </>
          }
        />
      </Routes>
    </ClerkProvider>
  );
};
export default ClerkWithRoutes;
