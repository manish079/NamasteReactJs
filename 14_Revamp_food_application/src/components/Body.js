import { useEffect, useState } from "react";
import { RestaurantCard, RestaurantCardWithPromoted } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import userOnlineStatus from "../utils/userOnlineStatus";
import InfiniteScroll from "react-infinite-scroll-component";
import { RestaurantCardPromoted } from "./RestaurantCard";
import Footer from "./Footer";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const { listOfRestaurants, filteredRestaurants, setFilterRestaurants } =
    useRestaurant();

  const RestaurantCardPromoted = RestaurantCardWithPromoted(RestaurantCard);

  const onlineStatus = userOnlineStatus();

  // check user is online or offline
  if (onlineStatus === false) return <h1>Please check your Internet</h1>;

  useEffect(() => {
    // Filter restaurants based on search text
    const filterRest = listOfRestaurants?.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterRestaurants(filterRest);
  }, [searchText, listOfRestaurants, setFilterRestaurants]);

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="pt-2 font-sans">
      <div className="mx-10 mt-5">
        <div className="flex justify-evenly mb-5">
          <div>
            <input
              type="text"
              data-testid="searchInput"
              className="border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-1 focus:ring-button-search-btn"
              placeholder="Search"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="bg-button-search-btn px-5 py-1 ml-2 rounded-lg text-white"
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
            className="bg-button-search-btn px-5 rounded-lg text-white"
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
              {/* <RestaurantCard resData={restaurant} /> */}
              {/* if the restaurant is promoted then add a promoted label component else normal */}
              {restaurant?.data?.promoted ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
