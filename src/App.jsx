import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import LoginForm from './components/LoginForm';
import SignUp from './components/SignUp';
import Claim from './pages/Claim/claim';


export default function App() {
  return (
    <div className=" bg-[url('../src/assets/img-8.jpg')] bg-cover bg-center flex-col overflow-y-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/claim" element={<Claim />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}