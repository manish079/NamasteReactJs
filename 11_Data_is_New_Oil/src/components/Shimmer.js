const Shimmer = () => {
  return (
    <>
      <div className="flex justify-center mt-3 flex-wrap gap-5">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="w-60 h-[300px] bg-gray-100 p-2 rounded-lg border-solid border-2 transition duration-300 ease-in-out"
          >
            <div className="shimmer-content space-y-2">
              <div className="rounded-lg h-40 w-full  bg-gray-300 rounded"></div>
              <div className="shimmer-line h-4 bg-gray-300 rounded w-5/6"></div>
              <div className="shimmer-line h-4 bg-gray-300 rounded"></div>
              <div className="shimmer-line h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Shimmer;
