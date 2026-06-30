import { useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import products from "../common/products";

const ProductDetails = () => {
  const { slug } = useParams();

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <div>
      <Breadcrumb
        title={product.title}
        slug={["Products", product.title]}
      />

      <div className="px-10 py-20">
        <img
          src={product.image}
          alt={product.title}
          className="w-96 mx-auto"
        />

        <h1 className="text-4xl font-bold text-center mt-8">
          {product.title}
        </h1>

        <p className="text-center text-gray-600 mt-4">
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;