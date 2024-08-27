import { CDN_URL, BASE_CDN_URL_PATH_STRUCTURE } from "../utils/constants";
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

  const isPathStructure = cloudinaryImageId.includes("/");
  const imageUrl = isPathStructure
    ? `${BASE_CDN_URL_PATH_STRUCTURE}${cloudinaryImageId}`
    : `${CDN_URL}${cloudinaryImageId}`;

  return (
    <div
      data-testid="resCard"
      className="flex flex-col gap-2 p-2 bg-gray-100 rounded-lg shadow-md w-48
       border-solid border-[1.5px] transition-transform transition-colors duration-300 hover:bg-gray-200 hover:scale-105 h-64"
    >
      <img
        className="rounded-lg h-24 w-full object-cover shadow-lg"
        alt="res-logo"
        src={imageUrl}
        loading="lazy"
      />
      <div className="flex flex-col justify-between h-full mt-2">
        <div className="flex flex-col gap-2">
          <h3 className="mb-1 font-medium text-sm truncate font-sans">
            {name}
          </h3>
          <h4 className="text-xs truncate font-sans">{cuisines?.join(", ")}</h4>
          <h4 className="text-xs font-sans">{avgRating} stars</h4>
          <h4 className="text-xs font-sans">{costForTwo}</h4>
        </div>
        <h4 className="mt-auto text-xs font-sans">
          {sla?.deliveryTime} minutes
        </h4>
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
