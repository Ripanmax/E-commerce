import { Menu, X, GraduationCap } from 'lucide-react'; // <-- new icon added
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);

  return (
    <nav className="bg-lime-500 shadow-md px-4 py-3">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        
        {/* CampusConnect + Icon */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-black">
          <GraduationCap size={24} /> {/* icon */}
          CampusConnect
        </Link>

        {/* Hamburger menu */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu items */}
        <div className={`flex-col md:flex md:flex-row md:items-center gap-6 ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
          <Link to="/" className="text-black">Home</Link>
          <Link to="#" className="text-black">Services</Link>
          <Link to="/hostel-items" className="block px-4 py-2 hover:bg-gray-100">Hostel Items</Link>
<Link to="/books" className="block px-4 py-2 hover:bg-gray-100">Books</Link>
<Link to="/room-decor" className="block px-4 py-2 hover:bg-gray-100">Room Decor</Link>
<Link to="/kitchen" className="block px-4 py-2 hover:bg-gray-100">Kitchen Essentials</Link>
<Link to="/electronics" className="block px-4 py-2 hover:bg-gray-100">Electronics</Link>


          <div className="relative">
            <button onClick={() => setAboutDropdown(!aboutDropdown)} className="text-black">About us</button>
            {aboutDropdown && (
              <div className="absolute mt-2 bg-white border shadow-lg p-2 z-10 rounded-md">
                <Link to="/login" className="block px-2 py-1 hover:bg-gray-100">Login</Link>
                <Link to="/register" className="block px-2 py-1 hover:bg-gray-100">Register</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


