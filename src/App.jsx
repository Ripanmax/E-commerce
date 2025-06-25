import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Cart from './pages/Cart.jsx';
import Navbar from './components/Navbar.jsx';
import { CartProvider } from './context/CartContext.jsx';
import Login from './pages/Login';         // ✅ REQUIRED
import Register from './pages/Register';
import RoomDecor from './pages/RoomDecor';
import Kitchen from './pages/Kitchen';
import Electronics from './pages/Electronics';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />       {/* ✅ Route config */}
            <Route path="/register" element={<Register />} /> 
          <Route path="/room-decor" element={<RoomDecor />} />


            <Route path="/kitchen" element={<Kitchen />} />
<Route path="/electronics" element={<Electronics />} />


        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
