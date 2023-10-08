// ClerkWithRoutes.jsx
import {
  ClerkProvider,
  RedirectToSignIn,
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import { useNavigate, Routes, Route } from "react-router-dom";
import ProtectedPage from "../ProtectedPage";

import App from "../App";

import PrincipalPage from "../pages/PrincipalPage";
import VisualizadorPage from "../pages/VisualizadorPage";
import NotFoundPage from "../pages/NotFoundPage";
import Topbar from "./Topbar";

const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

const ClerkWithRoutes = () => {
  const navigate = useNavigate();

  return (
    <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
      <Topbar />
      <Routes>
        <Route path="/" element={<PrincipalPage />} />
        {/* <Route path="/suscripciones" element={<PrincipalPage />} /> */}
        <Route path="/ver/:video" element={<VisualizadorPage />} />
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
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
      </Routes>
    </ClerkProvider>
  );
};
export default ClerkWithRoutes;
