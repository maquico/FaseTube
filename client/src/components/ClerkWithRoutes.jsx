// ClerkWithRoutes.jsx
import { ClerkProvider, RedirectToSignIn, SignIn, SignUp, SignedIn, SignedOut } from "@clerk/clerk-react";
import { useNavigate, Routes, Route } from "react-router-dom";
import ProtectedPage from "../ProtectedPage";
import App from "../App";


const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

const ClerkWithRoutes = () => {
    const navigate = useNavigate();
  
    return (
      <ClerkProvider
        publishableKey={clerkPubKey}
        navigate={(to) => navigate(to)}
      >
        <Routes>
          <Route path="/" element={<App />} />
          <Route
            path="/sign-in/*"
            element={<SignIn redirectUrl={'/protected'} routing="path" path="/sign-in" />}
          />
          <Route
            path="/sign-up/*"
            element={<SignUp redirectUrl={'/protected'} routing="path" path="/sign-up" />}
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
