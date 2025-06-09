import React from "react";
import { useMsal } from "@azure/msal-react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { instance } = useMsal();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await instance.loginPopup({
        scopes: ["openid", "profile", "User.Read"],
      });
      console.log("Login Successful!", response);

      // Redirect to /home
      navigate("/home");
    } catch (error) {
      console.error("Login Failed!", error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to My App</h1>
      <p>Please log in to access your account.</p>
      <button
        onClick={handleLogin}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "5px",
          backgroundColor: "#0078D4",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Login with Azure AD
      </button>
    </div>
  );
};

export default LoginPage;
