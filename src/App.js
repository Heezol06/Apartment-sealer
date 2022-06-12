import { Routes } from 'react-router-dom';
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
import ProductsPage from './component/ProductsPage/ProductsPage';
import BookingApartment from './component/BookingApartment/BookingApartment';
import Payment from './component/Payment/Payment';
import MyOrders from './component/MyOrders/MyOrders';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/Register" element={<Register />} />

          <Route path="/contactUS" element={<PrivetRoute> <ContactUs />  </PrivetRoute>} />
          <Route path="/myOrder" element={<PrivetRoute> <MyOrders />  </PrivetRoute>} />
          <Route path="/orders/:ordersId" element={<PrivetRoute> <Payment />  </PrivetRoute>} />
          <Route path="/apartments" element={<PrivetRoute> <ProductsPage />  </PrivetRoute>} />
          <Route path="/bookingApartment/:apartmentId" element={<PrivetRoute> <BookingApartment />  </PrivetRoute>} />
          <Route path="/sellHome" element={<PrivetRoute> <SellHome></SellHome>  </PrivetRoute>} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
