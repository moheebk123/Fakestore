import propTypes from "prop-types";

const CartAmount = ({ amount }) => {
  return (
    <div
      className="sub-total flex justify-center gap-x-2"
      style={{ padding: "1em" }}
    >
      <p className="font-semibold text-xl">Total Amount :</p>
      <p className="text-xl">₹ {amount}</p>
    </div>
  );
};

CartAmount.propTypes = {
  amount: propTypes.number.isRequired,
};

export default CartAmount;
