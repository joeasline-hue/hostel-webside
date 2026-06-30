import { Link } from "react-router-dom";

const Breadcrumb = ({ title, slug = [] }) => {
  return (
    <div className="bg-blue-900 text-white py-20 px-10">

      {/* Page Title */}
      <h1 className="text-5xl font-bold">
        {title}
      </h1>

      {/* Red Line */}
      <div className="w-20 h-1 bg-red-600 mt-2 mb-6"></div>

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-lg">

        <Link to="/" className="hover:text-red-400">
          Home
        </Link>

        {slug.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span>/</span>

            {index === slug.length - 1 ? (
              <span className="text-red-400">
                {item}
              </span>
            ) : (
              <Link
                to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="hover:text-red-400"
              >
                {item}
              </Link>
            )}
          </div>
        ))}

      </div>

    </div>
  );
};

export default Breadcrumb;