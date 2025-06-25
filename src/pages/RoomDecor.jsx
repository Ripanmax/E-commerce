import { decorProducts } from '../data/RoomDecorData';
import { Link } from 'react-router-dom';

const RoomDecor = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Room Decor Collection</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {decorProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <Link to={`/decor/${product.id}`} className="block">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                <p className="text-green-600 font-semibold mb-1">₹{product.price}</p>
                <p className="text-sm text-gray-600">{product.description.slice(0, 60)}...</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomDecor;




