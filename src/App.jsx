import { Route, Routes } from 'react-router-dom';
import './App.css';

// Only import the one LoginPage component
import LoginPage from './Pages/Login';
import HomePage from './Pages/HomePage';

// MSAL React
import { MsalAuthenticationTemplate } from "@azure/msal-react";

function App() {
  return (
    <Routes>
      {/* Public login page */}
      <Route path="/" element={<LoginPage />} />

      {/* Protected home page */}
      <Route
        path="/home"
        element={
          <MsalAuthenticationTemplate>
            <HomePage />
          </MsalAuthenticationTemplate>
        }
      />
    </Routes>
  );
}

export default App;
