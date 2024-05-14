import { IoMdCart } from "react-icons/io";
import propTypes from "prop-types";

const CartIcon = ({ cartProductsLength, showCartBox }) => {
  return (
    <div
      className="z-10 text-5xl cursor-pointer h-fit bg-orange-500 rounded-full fixed bottom-3 md:absolute md:top-2 right-3"
      onClick={() => showCartBox(true)}
    >
      <span
        className="text-sm text-white absolute right-[-5px] top-[-5px] rounded-full h-7 w-6 flex justify-center items-center bg-blue-500"
        style={{ padding: "2px" }}
      >
        {cartProductsLength}
      </span>

      <IoMdCart style={{ padding: "8px" }} />
    </div>
  );
};

CartIcon.propTypes = {
  showCartBox: propTypes.func.isRequired,
  cartProductsLength: propTypes.number.isRequired,
};

export default CartIcon;
