import { useContext } from "react";
import propTypes from "prop-types";
import "./product.css";
import { MdCancel } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import ProductFunctionsContext from "../../store/ProductFunctionsContext";

const ProductDetail = ({ productDetails, hideProduct }) => {
  const { title, description, category, price, image, rating } = productDetails;
  const { addCartProduct } = useContext(ProductFunctionsContext);

  return (
    <div className="product-detail-box z-10 absolute border-l border-slate-300 overflow-y-scroll inset-0 w-1/1 bg-white z-5">
      <MdCancel
        className="absolute top-2 left-1 text-3xl text-red-500 hover:text-red-600 cursor-pointer"
        onClick={hideProduct}
      />

      <div className="w-1/1 flex justify-center">
        <img src={image} className="h-96 object-fit" />
      </div>
      <div className="flex flex-col md:flex-row w-full h-max border border-slate-300">
        <div
          className="basis-2/3 border-b md:border-r md:border-b-0 border-slate-300"
          style={{ padding: "1em" }}
        >
          <h1 className="font-bold text-2xl">{title}</h1>
          <p className="text-lg">{description}</p>
          <br />
          <p className="font-bold text-xl text-slate-500">
            Category: {category}
          </p>
        </div>
        <div
          className="basis-1/3 flex flex-col gap-3"
          style={{ padding: "1em" }}
        >
          <h1 className="text-2xl">₹ {price}</h1>
          <p className="font-bold text-xl text-slate-500 flex gap-1 items-center">
            Ratings: {rating.rate}
            <FaStar className="text-yellow-500" />
          </p>
          <p className="font-bold text-xl text-slate-500 flex gap-1 items-center">
            Rated:
            <IoMdPeople />
            {rating.count}
          </p>
          <button
            type="button"
            style={{ padding: "0.5em 1em" }}
            className="cursor-pointer bg-blue-500 text-white hover:bg-blue-600 rounded-lg"
            onClick={() => {
              addCartProduct(title);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

ProductDetail.propTypes = {
  productDetails: propTypes.shape().isRequired,
  hideProduct: propTypes.func.isRequired,
};

export default ProductDetail;
