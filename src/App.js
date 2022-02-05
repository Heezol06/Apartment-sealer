import { Navigate, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import { ContactUs } from './component/ContactUs/ContactUs';
import SellHome from './component/SellHome/SellHome';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Register from './component/Login/Register/Register';
import Navbar from './component/Navbar/Navbar';
import AuthProvider from './component/Context/AuthProvider';
import PrivetRoute from './component/Login/PrivetRoute/PrivetRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/Register" element={<Register />} />

          <Route path="/contactUS" element={<PrivetRoute> <ContactUs />  </PrivetRoute>} />
          <Route path="/sellHome" element={<PrivetRoute> <SellHome></SellHome>  </PrivetRoute>} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
