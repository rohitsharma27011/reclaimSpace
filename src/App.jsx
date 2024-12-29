import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/home";
import LoginForm from "./components/LoginForm";
import SignUp from "./components/SignUp";
import Claim from "./pages/Claim/claim";
import Profile from "./pages/Profile/profile";
import YourFindings from "./pages/YourFindings/YourFindings";
import YourClaims from "./pages/YourClaims/YourClaims";
import RecievedRequests from "./pages/RecievedRequests/RecievedRequests";

export default function App() {
  return (
    <div className=" bg-[url('../src/assets/img-8.jpg')] bg-cover bg-center flex-col overflow-y-hidden min-h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/claim" element={<Claim />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/yourFindings" element={<YourFindings/>}/>
          <Route path="/profile/yourClaims" element={<YourClaims/>} />
          <Route path="/profile/recievedRequests" element={<RecievedRequests/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
