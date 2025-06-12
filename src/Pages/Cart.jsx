import { useCart } from "../components/CartContext";
import { Trash2 } from "lucide-react";

const Cart = () => {
  const { cartItems, increaseQty, decreaseQty, removeFromCart } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const originalTotal = cartItems.reduce(
    (sum, item) => sum + (item.originalPrice || item.price) * item.quantity,
    0
  );
  const totalSavings = originalTotal - subtotal;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Products</h1>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center border-b py-4 justify-between"
        >
          <div className="flex gap-4 items-center">
            <img src={item.image} alt="" className="h-24 w-24 object-contain" />
            <div>
              <h2 className="text-lg font-medium">{item.title}</h2>
              <p className="text-sm text-gray-500">Size: 1Kg</p>
            </div>
          </div>

          <div className="flex items-center gap-10">
            <div>
              <p className="text-base font-semibold">₹{item.price}</p>
              {item.originalPrice && (
                <p className="text-sm line-through text-gray-400">
                  ₹{item.originalPrice}
                </p>
              )}
            </div>

            <div className="flex items-center border border-gray-300">
              <button
                onClick={() => decreaseQty(item.id)}
                className="px-3 text-lg"
              >
                -
              </button>
              <span className="px-4">{item.quantity}</span>
              <button
                onClick={() => increaseQty(item.id)}
                className="px-3 text-lg"
              >
                +
              </button>
            </div>

            <p className="font-semibold">₹{item.price * item.quantity}</p>

            <button onClick={() => removeFromCart(item.id)}>
              <Trash2 size={20} />
            </button>
          </div>
        </div>
      ))}

      <div className="bg-gray-100 mt-8 p-4 text-right">
        <h3 className="text-xl font-semibold">Subtotal: ₹{subtotal}</h3>
        <p className="text-sm">Total Savings: ₹{totalSavings}</p>
      </div>
    </div>
  );
};

export default Cart;
