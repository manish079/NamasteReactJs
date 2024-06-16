import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import userOnlineStatus from "../utils/userOnlineStatus";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const { listOfRestaurants, filteredRestaurants, setFilterRestaurants } =
    useRestaurant();

  const onlineStatus = userOnlineStatus();

  // check user is online or offline
  if (onlineStatus === false) return <h1>Please check your Internet</h1>;

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mx-10 mt-5">
      <div className="flex justify-evenly mb-5">
        <div>
          <input
            type="text"
            className="border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-teal-200"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-teal-100 px-5 py-1 ml-2 rounded-lg"
            onClick={() => {
              const filterRest = listOfRestaurants?.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilterRestaurants(filterRest);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="bg-gray-200 px-5 rounded-lg"
          onClick={() => {
            const filteredList = filteredRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilterRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex gap-5 flex-wrap justify-center">
        {filteredRestaurants?.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
