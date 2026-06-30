import Breadcrumb from "../components/Breadcrumb";

const Contact = () => {
  return (
    <div>
      {/* Common Breadcrumbs Component */}
      <Breadcrumb
       title="Contact"
       slug={["Contact"]} />

      {/* Content Section */}
      <div className="bg-white px-10 py-20">
        <h2 className="text-5xl font-bold text-blue-900">
          Our Location
        </h2>

        <div className="w-20 h-1 bg-red-600 mt-2 mb-8"></div>

        <p className="text-gray-700 leading-8 mb-10">
          National Profile Factory is one of the leading manufacturers of cold
          rolled sections and related profiles suitable for the gypsum ceiling
          and partition works established since 2005. Our factory is located
          in the Kingdom of Bahrain.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Location Card */}
          <div className="shadow-lg p-8 rounded-lg">
            <h3 className="text-3xl font-bold text-blue-900">
              Our Location
            </h3>

            <div className="w-16 h-1 bg-red-600 mt-2 mb-6"></div>

            <p className="text-gray-600 leading-8">
              Building No 1393,
              <br />
              Road - 5138,
              <br />
              Block - 951,
              <br />
              P.O Box 33278,
              <br />
              Askar, Kingdom of Bahrain.
            </p>
          </div>

          {/* Contact Card */}
          <div className="shadow-lg p-8 rounded-lg">
            <h3 className="text-3xl font-bold text-blue-900">
              Contact Us
            </h3>

            <div className="w-16 h-1 bg-red-600 mt-2 mb-6"></div>

            <p className="text-gray-600 mb-4">
              📧 info@nationalprofile.com
            </p>

            <p className="text-gray-600">
              📞 +973 17 641 999
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;