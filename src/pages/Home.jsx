import { products } from '../data/products';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map(product => (
        <div key={product.id} className="border rounded-lg shadow-md p-3 bg-white">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
          <h2 className="text-lg font-bold mt-2">{product.name}</h2>
          <p className="text-sm text-gray-600">{product.description}</p>
          <p className="text-green-700 font-semibold mt-1">₹{product.price}</p>
          <Link to={`/product/${product.id}`} className="inline-block mt-2 text-blue-500 hover:underline">View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
