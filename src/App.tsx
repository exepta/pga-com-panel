import {Route, Routes} from "react-router-dom";
import React, {createContext, useState} from "react";
import OutletPage from "./pages/OutletPage.tsx";
import LoadingPage from "./pages/loading-page/LoadingPage.tsx";
import DashboardPage from "./pages/dashboard-page/DashboardPage.tsx";
import AuthenticationPage from "./pages/authentication-page/AuthenticationPage.tsx";

const ThemeContext = createContext({
  theme: '',
  func: () => {}
});

function App() {

  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((current) => current === "dark" ? "light" : "dark");
  }

  return (
    <ThemeContext.Provider value={{theme: theme, func: toggleTheme}}>
      <div className={`app-router ${theme}`}>
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
    </ThemeContext.Provider>
  )
}

export default App
