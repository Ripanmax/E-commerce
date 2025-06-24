import { electronicsProducts } from '../data/electronicsData';
import { Link } from 'react-router-dom';

const Electronics = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Electronics</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {electronicsProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <Link to={`/electronics/${product.id}`}>
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                <p className="text-gray-600">₹{product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Electronics;

