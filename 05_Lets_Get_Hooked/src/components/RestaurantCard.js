const RestaurantCard = ({ id, name, image, rating, deliveryTime }) => {
  console.log(id, name, image);
  return (
    <div className="restaurant-card">
      <img className="food-img" src={image} />
      <h3>{name}</h3>
      <h4>{rating}</h4>
      <h4>{deliveryTime} minute</h4>
    </div>
  );
};

export default RestaurantCard;
