import React from "react";
import ReactDOM from "React-dom/client";

const Header = () => {
  return (
    <div className="heder-container">
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsRDkQoLVDDilFi-J1TbbGr5Xf3YCRP3UjKg&s"
          />
        </div>

        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  console.log(props);
  return (
    <div className="restaurant-card">
      <img className="food-img" src={props.image} />
      <h3>{props.name}</h3>
      <h4>Biryani, South Indian, Asian</h4>
      <h4>4.4 stars</h4>
      <h4>20 minutes</h4>
    </div>
  );
};
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
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
