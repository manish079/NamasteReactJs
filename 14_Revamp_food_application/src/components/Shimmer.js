import { shimmer_card_unit } from "../utils/constants.js";
const CardShimmer = () => {
  return (
    <div className="flex flex-col gap-2 p-4 bg-gray-100 rounded-lg shadow-md w-48 ">
      <div className="h-32 bg-gray-300 animate-pulse rounded"></div>
      <div className="h-6 bg-gray-300 animate-pulse rounded w-3/4"></div>
      <div className="h-4 bg-gray-300 animate-pulse rounded w-1/2"></div>
      <div className="h-4 bg-gray-300 animate-pulse rounded w-full"></div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center  mt-5">
      {new Array(shimmer_card_unit).fill(0).map((element, index) => {
        return <CardShimmer key={index} />;
      })}
    </div>
  );
};
export default Shimmer;
