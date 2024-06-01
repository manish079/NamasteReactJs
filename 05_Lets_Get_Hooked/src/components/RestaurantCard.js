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

export default RestaurantCard;
