import { useParams, useLocation } from 'react-router-dom';
import { decorProducts } from '../data/roomDecorData';
import { kitchenProducts } from '../data/kitchenData';
import { electronicsProducts } from '../data/electronicsData';

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();

  let data = [];

  if (location.pathname.includes('/decor')) {
    data = decorProducts;
  } else if (location.pathname.includes('/kitchen')) {
    data = kitchenProducts;
  } else if (location.pathname.includes('/electronics')) {
    data = electronicsProducts;
  }

  const product = data.find((item) => item.id === parseInt(id));

  if (!product) return <div className="p-6 text-center">Product not found.</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded-lg mb-6" />
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-xl text-green-600 font-semibold mb-4">₹{product.price}</p>
      <p className="text-gray-700">{product.description}</p>
    </div>
  );
};

export default ProductDetail;



