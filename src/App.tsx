import {Route, Routes} from "react-router-dom";
import OutletPage from "./pages/OutletPage.tsx";
import LoadingPage from "./pages/loading-page/LoadingPage.tsx";
import AuthenticationPage from "./pages/authentication-page/AuthenticationPage.tsx";
import {ThemeProvider} from "@mui/material";
import React, {lazy} from "react";
import {theme} from "./services/ThemeService.ts";
import LeagueMainPage from "./pages/league-page/LeagueMainPage.tsx";
import {AuthProvider} from "./context/AuthContext.tsx";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

const ProtectedRoute = lazy(() => import("./pages/ProtectedRoute.tsx"));
const DashboardPage = lazy(() => import("./pages/dashboard-page/DashboardPage.tsx"));

function App() {

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
              <div className={`app-router`}>
                  <Routes>
                      {/* PUBLIC */}
                      <Route path="auth" element={<AuthenticationPage />} />

                      {/* PROTECTED */}
                      <Route path="/" element={<ProtectedRoute>
                          <React.Suspense fallback={<LoadingPage />}>
                              <OutletPage />
                          </React.Suspense>
                      </ProtectedRoute>
                      }>
                          <Route index element={<DashboardPage />} />
                          <Route path="/league-of-legends" element={<LeagueMainPage />} />
                      </Route>

                      {/* CATCH OTHERS */}
                  </Routes>
              </div>
          </LocalizationProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
