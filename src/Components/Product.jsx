import { useContext } from "react";
import propTypes from "prop-types";
import ProductFunctionsContext from "../store/ProductFunctionsContext";

const Product = ({ title, image, price, buttonText, addRemoveCartProduct }) => {
  const { changeProductDetails } = useContext(ProductFunctionsContext);

  return (
    <div
      className="flex flex-col items-center justify-center gap-y-1.5 w-72 h-80 shadow-lg rounded-lg"
      style={{ padding: "1em" }}
    >
      <div
        className="w-full h-32 cursor-pointer"
        onClick={() => changeProductDetails(title)}
      >
        <img className="object-contain w-full h-full" src={image} />
      </div>
      <p className="text-center">{title}</p>
      <p className="text-center font-bold">₹ {price}</p>
      <button
        type="button"
        className={`cursor-pointer font-bold text-white rounded-md ${
          buttonText === "Remove"
            ? "bg-red-500 hover:bg-red-600"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
        style={{ padding: "0.5em 1em" }}
        onClick={() => addRemoveCartProduct(title)}
      >
        {buttonText}
      </button>
    </div>
  );
};

Product.propTypes = {
  title: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  buttonText: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  addRemoveCartProduct: propTypes.func.isRequired,
};

export default Product;
