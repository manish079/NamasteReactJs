import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
export const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;

  return (
    <div className="w-60 bg-gray-100 p-2 rounded-lg border-solid border-[1.5px] transition-transform transition-colors duration-300 hover:bg-gray-200 hover:scale-105">
      <img
        className="rounded-lg h-40 w-full"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="mt-2">
        <h3 className="mb-5  font-medium">{name}</h3>
        <h4>{cuisines?.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

//Higher order components
//input-> RestaurantCard ==> RestaurantCardPromoted
export const RestaurantCardWithPromoted = (RestaurantCard) => {
  return (props) => {
    //this function will return JSX
    return (
      <>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </>
    );
  };
};
