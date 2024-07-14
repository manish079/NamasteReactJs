import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

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

  console.log("cards: " + itemCards);

  return (
    <div className="menu">
      <img style={{ width: "200px" }} src={CDN_URL + cloudinaryImageId} />
      <h1>{name}</h1>
      <h2 style={{ marginBottom: "30px" }}>
        {cuisines.join(", ")} - {costForTwo / 100} Rs.
      </h2>
      <ul>
        <h3 style={{ margin: "0 0 20px 10px", color: "red" }}>Menu:- </h3>
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id} style={{ margin: "0 0 20px 40px" }}>
            {item?.card?.info?.name} - {"Rs."}
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
