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
    <div className="body">
      <div className="filter">
        <div className="search-bar">
          <input
            type="text"
            className="search-text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
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
          className="filter-btn"
          onClick={() => {
            const filteredList = filteredRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilterRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
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
