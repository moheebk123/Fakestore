import { Stack, Typography } from "@mui/material";
import { Cancel } from "@mui/icons-material";
import propTypes from "prop-types";
import CartProduct from "./CartProduct";

const Cart = ({ deleteCartProduct, cartProducts, hideCart }) => {
  const handleCloseCart = () => {
    hideCart();
  };
  return (
    <Stack
      spacing={2}
      sx={{
        padding: "1em",
        boxShadow:
          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;",
      }}
      className="absolute overflow-y-scroll inset-y-0 right-0 w-1/3 bg-white"
    >
      <Cancel
        className="absolute top-2 right-2 cursor-pointer"
        color="error"
        fontSize="large"
        onClick={handleCloseCart}
      />
      <h1 className="text-2xl border-b text-center">Shopping Cart</h1>
      {cartProducts.length === 0 ? (
        <h1 className="text-center text-xl h-full flex justify-center items-center">
          Nothing Present In Cart <br />
          Start Adding Product in Cart
        </h1>
      ) : (
        <>
          <Stack direction="row" spacing={2} color="text.secondary">
            <Typography sx={{ fontWeight: "600", fontSize: "1.5em" }}>
              Total Amount :
            </Typography>
            <Typography sx={{ fontWeight: "600", fontSize: "1.5em" }}>
              ₹
              {(cartProducts.reduce(
                (curPrice, product) => curPrice + product.price,
                0
              )).toFixed(2)}
            </Typography>
          </Stack>
          <Stack spacing={2}>
            {cartProducts.map((product, index) => {
              const { title, image, price } = product;
              return (
                <CartProduct
                  key={index}
                  title={title}
                  image={image}
                  price={price}
                  deleteCartProduct={deleteCartProduct}
                />
              );
            })}
          </Stack>
        </>
      )}
    </Stack>
  );
};

Cart.propTypes = {
  hideCart: propTypes.func.isRequired,
  deleteCartProduct: propTypes.func.isRequired,
  cartProducts: propTypes.array.isRequired,
};

export default Cart;
