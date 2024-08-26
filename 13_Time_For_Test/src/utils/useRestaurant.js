import { useEffect, useState } from "react";
import { SWIGGY_API } from "../../src/utils/constants";

const useRestaurant = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilterRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(SWIGGY_API); // Enable CORS extension to bypass CORS issue
      const jsonData = await response.json();

      const restaurants =
        jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      // console.log(
      //   jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      //     ?.restaurants
      // );

      setListOfRestaurants(restaurants);
      setFilterRestaurants(restaurants);
    } catch (error) {
      console.error("Failed to fetch restaurants", error);
    }
  };

  return { listOfRestaurants, filteredRestaurants, setFilterRestaurants };
};

export default useRestaurant;
