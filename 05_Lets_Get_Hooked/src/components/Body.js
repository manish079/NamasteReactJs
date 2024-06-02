import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

/* const Body = () => {
  return (
    <div className="body-container">
      <div className="search">Search</div>
      <div className="restaurant-container">
        
        <RestaurantCard
          name="Shinde Dairy"
          image="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8fDA%3D"
        />
        <RestaurantCard
          name="Ghasitaram"
          image="https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBpenphfGVufDB8fDB8fHww"
        />
        <RestaurantCard
          name="Irani Cafe"
          image="https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBpenphfGVufDB8fDB8fHww"
        />
      </div>
    </div>
  );
}; */

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);

  return (
    <div className="body-container">
      <button
        className="search"
        onClick={() => {
          const filteredRes = restaurantList.filter((restaurant) => {
            restaurant.data.avgRating > 4.0;
          });
          setRestaurantList(filteredRes);
        }}
      >
        Top Rated Restaurant
      </button>
      <div className="restaurant-container">
        {restaurantList.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.data.id}
              id={restaurant.data.id}
              name={restaurant.data.name}
              image={`https://media-assets.swiggy.com/swiggy/image/upload/z/${restaurant.data.cloudinaryImageId}`}
              rating={restaurant.data.avgRating}
              deliveryTime={restaurant.data.deliveryTime}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Body;
