import goalImage from "../assets/goal.png";

const Goal = () => {
  return (
    <div className="bg-white flex flex-col md:flex-row items-center justify-between px-10 py-20">

      {/* Left Side Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={goalImage}
          alt="Goal"
          className="w-[400px] md:w-[500px]"
        />
      </div>

      {/* Right Side Content */}
      <div className="md:w-1/2 mt-10 md:mt-0">
        <h1 className="text-5xl font-bold text-blue-900 mb-6">
          Our Goal
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed">
          National Profile Factory complies with requirements of ISO 9001:2015
          and covers the manufacturing, supply, sales and marketing of False
          Ceiling Suspension Systems, Drywall Partition Systems, GI Lintels,
          Roofing Sheets, C-Truss Channels and related accessories.
        </p>

        <button className="bg-red-600 text-white px-6 py-3 rounded-full mt-8 hover:bg-red-700">
          Read More
        </button>
      </div>

    </div>
  );
};

export default Goal;