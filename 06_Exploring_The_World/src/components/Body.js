import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { SWIGGY_API } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(SWIGGY_API);

    const jsonData = await response.json();

    //Optional Chaining
    // console.log(jsonData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle);

    //API not correctly working So I am fetching res data from mockData SO here I am not set data
    // setListOfRestaurants( jsonData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant?.data?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
