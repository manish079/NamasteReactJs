const Contact = () => {
  return (
    <div className="font-sans shadow-lg w-4/12 p-5 mx-auto my-auto">
      <div className="min-h-40">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <form>
          <div className="relative mb-4">
            <label
              className="absolute top-1 left-9 text-gray-700 text-sm font-bold bg-white px-1 transition-transform transform -translate-y-1/2 -translate-x-1/2 duration-300 ease-in-out"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white placeholder-transparent"
              id="name"
              type="text"
              placeholder=" "
            />
          </div>
          <div className="relative mb-4">
            <label
              className="absolute top-1 left-9 text-gray-700 text-sm font-bold bg-white px-1 transition-transform transform -translate-y-1/2 -translate-x-1/2 duration-300 ease-in-out"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white placeholder-transparent"
              id="email"
              type="email"
              placeholder=" "
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
