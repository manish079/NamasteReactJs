import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    //   dispatch an action to clear cart items
    dispatch(clearCart());
  };
  //Subscribing the store
  return (
    <div className="text-center m-4 p-4 font-sans">
      <h1 className="text-2xl font-bold">Carts</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Carts
        </button>
        {cartItems.length === 0 && <h1>Add Items to the cart!</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
