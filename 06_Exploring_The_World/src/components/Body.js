import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { SWIGGY_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [filteredRestaurants, setFilterRestaurants] = useState(resList);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  console.log("Body Rendered");
  const fetchData = async () => {
    const response = await fetch(SWIGGY_API);

    const jsonData = await response.json();

    //Optional Chaining
    // console.log(jsonData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle);

    //API not correctly working So I am fetching res data from mockData SO here I am not set data
    // setListOfRestaurants( jsonData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
    // setFilteredRestaurants( jsonData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
  };

  //Shimmer UI
  /**
   * If listOfRestaurants has no cards then we show SHIMMER
   */

  // listOfRestaurants.length = 0;

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
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
              const filterRest = listOfRestaurants.filter((res) => {
                return res.data.name
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
            //If iterate over filterRestaurants then it give filter on visible cards but if I am do iterate over listOfRestaurants then it give filter on whole list of cards.

            const filteredList = filteredRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setFilterRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant?.data?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
