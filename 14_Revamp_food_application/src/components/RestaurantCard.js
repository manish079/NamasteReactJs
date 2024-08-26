import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
export const RestaurantCard = (props) => {
  const { resData } = props;

  // console.log(resData);

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;

  // const {
  //   cloudinaryImageId = "",
  //   name = "Restaurant Name",
  //   avgRating = "N/A",
  //   cuisines = [],
  //   costForTwo = "N/A",
  //   sla = { deliveryTime: "N/A" },
  // } = resData?.info || {};

  return (
    <div
      data-testid="resCard"
      className="flex flex-col gap-2 p-2 bg-gray-100 rounded-lg shadow-md w-64 
       border-solid border-[1.5px] transition-transform transition-colors duration-300 hover:bg-gray-200 hover:scale-105 h-80"
    >
      <img
        className="rounded-lg h-40 w-full object-cover"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="flex flex-col justify-between h-full mt-2">
        <div>
          <h3 className="mb-2 font-medium truncate">{name}</h3>
          <h4 className="truncate">{cuisines?.join(", ")}</h4>
          <h4>{avgRating} stars</h4>
          <h4>{costForTwo}</h4>
        </div>
        <h4 className="mt-auto">{sla?.deliveryTime} minutes</h4>
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
