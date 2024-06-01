import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body-container">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {/* restaurant card */}
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
};

export default Body;
