import React from "react";
import AuthGoogleProvider from "./contexts/authGoogle";
import { AppRoutes } from "./routes/routes";
import "./styles/global.scss"

function App() {
  return (
    <AuthGoogleProvider>
      <AppRoutes/>
    </AuthGoogleProvider>
  )
}

export default App;
