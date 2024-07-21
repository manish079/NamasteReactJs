import { useState } from "react";
import ItemList from "./ItemList.jsx";

const RestaurantCategory = ({ data }) => {
  // console.log(data);

  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    showItems ? setShowItems(false) : setShowItems(true);
  };

  return (
    <div>
      {/* accordion header */}
      <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-2 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data?.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* accordion body */}
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
