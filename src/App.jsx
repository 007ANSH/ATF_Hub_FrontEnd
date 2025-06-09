import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Pages/Login'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/Login'
// import { MsalAuthenticationTemplate } from "@azure/msal-react";
// const ProtectedPage = () => {
//     return (
//         <MsalAuthenticationTemplate>
//             <div>
//                 <h1>Protected Content</h1>
//             </div>
//         </MsalAuthenticationTemplate>
//     );
// };
function App() {
  return(
    <>
     <Routes>
            <Route path="/" element={<LoginPage />} />
            {/* <Route path="/protected" element={<ProtectedPage />} /> */}
            <Route path="/home" element={<HomePage />} />

        </Routes> 
    </>
  )
}

export default App
