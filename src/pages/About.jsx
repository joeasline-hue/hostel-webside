import React from "react";
import Breadcrumb from "../components/Breadcrumb";

const About = () => {
  return (
    <div>

      {/* Common Breadcrumb */}
      <Breadcrumb
      title="About"
      slug={["About"]} />

      {/* White Section */}
      <div className="bg-white px-10 py-20">

        <h2 className="text-5xl font-bold text-blue-900">
          Know More About
        </h2>

        <div className="w-20 h-1 bg-red-600 mt-2 mb-8"></div>

        <div className="text-gray-700 leading-8 space-y-6">

          <p>
            National Profile Factory is one of the leading manufacturers of
            cold rolled sections and related profiles suitable for gypsum
            ceiling and partition works established since 2005.
          </p>

          <p>
            Our factory is located in the Kingdom of Bahrain. We are using
            the latest European technology for producing the profiles.
          </p>

          <p>
            We have well-trained staff, high and sophisticated machinery and
            equipment to meet the local and outside requirements of our customers.
          </p>

          <p>
            We have maintained a disciplined method of quality control. We are
            using tested raw materials with international standards.
          </p>

          <p>
            The integration of advanced research and development in the cold
            roll forming technology earned National Profile Factory its reputation.
          </p>

        </div>

      </div>

    </div>
  );
};

export default About;