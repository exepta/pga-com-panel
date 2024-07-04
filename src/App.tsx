import {Route, Routes} from "react-router-dom";
import React from "react";
import OutletPage from "./pages/OutletPage.tsx";
import LoadingPage from "./pages/loading-page/LoadingPage.tsx";
import DashboardPage from "./pages/dashboard-page/DashboardPage.tsx";
import AuthenticationPage from "./pages/authentication-page/AuthenticationPage.tsx";

function App() {

  return (
    <>
      <div className={`app-router`}>
        <Routes>
          <Route path="/" element={
            <React.Suspense fallback={<LoadingPage />}>
              <OutletPage />
            </React.Suspense>
          }>
            <Route path="/" element={<DashboardPage />} />
          </Route>
          <Route path="auth" element={<AuthenticationPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
