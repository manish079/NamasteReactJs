import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // const [restInfo, setRestInfo] = useState(null);

  const { resId } = useParams();

  const restInfo = useRestaurantMenu(resId);

  //we have used custom hook for get resMenu (to make code modular and testable)
  /* useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();

    console.log(json);

    setRestInfo(json?.data);
  }; */

  if (restInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwo, cloudinaryImageId } =
    restInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  // console.log(restInfo?.cards[4]?.groupedCard?.cardGroupMap);

  const resCategories = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.[
    "REGULAR"
  ]?.cards.filter(
    (category) =>
      category?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwo / 100} Rs.
      </p>
      {/* categories accordion */}
      {resCategories.map((category) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
