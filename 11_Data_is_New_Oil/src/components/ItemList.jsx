import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {
  console.log(items);

  return (
    <div>
      {items?.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
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
          <div className=" w-3/12 p-4 relative">
            <div className=" absolute bottom-0">
              <button className=" bg-black mx-10 text-white px-2 py-1 shadow-lg m-auto rounded-lg">
                Add +
              </button>
            </div>
            {console.log(item.card.info.imageId)}
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full"
              loading="lazy"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
