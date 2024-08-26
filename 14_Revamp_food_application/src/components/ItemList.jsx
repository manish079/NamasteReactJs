import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    // Customize the toast message
    toast.success(`Item "${item?.card?.info?.name}" added to cart!`, {
      autoClose: 2000,
      className: " p-2 rounded-lg shadow-lg border-t-4 border-white ",
      bodyClassName: "text-sm font-semibold",
      theme: "light",
      progressClassName: "toast-progress-bar",
    });

    // Dispatch an action to add the item to the cart
    dispatch(addItem(item));
  };

  return (
    <div className="font-sans">
      <ToastContainer
        position="top-right"
        autoClose={2000} // Match autoClose duration
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        className="fixed top-4 right-4 z-50"
      />
      {items?.map((item) => (
        <div
          data-testid="foodItems"
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between h-30"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span>
                {" "}
                - ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice}{" "}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-4/12 p-4 relative">
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full h-20 shadow-lg"
              alt="image not exist"
              loading="lazy"
            />
            <div className="absolute bottom-[0px] left-1/2 transform -translate-x-1/2 w-full flex justify-center">
              <button
                className="bg-black text-white px-4 py-2 shadow-lg rounded-lg text-xs"
                onClick={() => handleAddToCart(item)}
              >
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
