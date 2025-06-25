import { useParams, useLocation } from 'react-router-dom';
import { decorProducts } from '../data/RoomDecorData';
import { kitchenProducts } from '../data/kitchenData';
import { electronicsProducts } from '../data/electronicsData';

const fallbackProduct = {
  name: 'Product Coming Soon',
  price: 'product prices are not fixed to be announced',
  description: 'This product detail is being updated.',
  images: [
    'https://www.nilkamalfurniture.com/cdn/shop/files/Rippon3STRLS2_756a75cd-c346-4aab-b307-5389b62093e5.jpg?v=1724991082&width=720',
  
    'https://housely.com/wp-content/uploads/2017/04/GM-OTTO-01-2-large.jpg',
    'https://tse2.mm.bing.net/th?id=OIP.E8kJ3U6irs1MqiERjKUWVAHaHa&pid=Api&P=0&h=180',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
  ]
};

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

  const product = data.find((item) => item.id === parseInt(id)) || fallbackProduct;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-xl text-green-600 font-semibold mb-4">₹{product.price}</p>

      {/* Show multiple images */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {product.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${product.name} ${index + 1}`}
            className="w-full h-48 object-cover rounded-md shadow"
          />
        ))}
      </div>

      <p className="text-gray-700 text-lg">{product.description}</p>
    </div>
  );
};

export default ProductDetail;





