import { useState } from "react";
import propTypes from "prop-types";
import CartIcon from "./CartIcon";
import Heading from "./Heading";
import CartAmount from "./CartAmount";
import CartProducts from "./CartProducts";
import EmptyMessage from "../../Components/EmptyMessage";
import { MdCancel } from "react-icons/md";
import "./cart.css";

const Cart = ({ cartProducts }) => {
  const [showCart, setShowCart] = useState(false);
  const amount = cartProducts.reduce(
    (curAmount, product) => curAmount + product.price,
    0
  );

  if (showCart) {
    return (
      <div className="cart-box z-10 absolute border-l border-slate-300 overflow-y-scroll  inset-0 right-0 w-1/1 bg-white z-5">
        <MdCancel
          className="absolute top-2 right-1 text-3xl text-red-500 hover:text-red-600 cursor-pointer"
          onClick={() => {
            setShowCart(false);
          }}
        />

        <Heading />

        {cartProducts.length === 0 ? (
          <EmptyMessage message="Nothing Present In Cart." />
        ) : (
          <div>
            <CartAmount amount={amount} />
            <CartProducts cartProducts={cartProducts} />
          </div>
        )}
      </div>
    );
  } else {
    return (
      <CartIcon
        cartProductsLength={cartProducts.length}
        showCartBox={setShowCart}
      />
    );
  }
};

Cart.propTypes = {
  cartProducts: propTypes.array.isRequired,
};

export default Cart;
