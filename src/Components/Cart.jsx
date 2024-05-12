/*
The React component named `Cart` that represents a shopping cart interface.
It shows the total price of the products present in cart and  a list of products present in cart.
If cart is empty it shows the empty cart message.
*/
import React, { useContext } from "react";
import propTypes from "prop-types";
import CartProduct from "./CartProduct";
import EmptyCart from "./EmptyCart";
import ProductFunctionsContext from "../store/ProductFunctionsContext";
import { Stack, Typography } from "@mui/material";
import { Cancel } from "@mui/icons-material";

const Cart = ({ cartProducts }) => {
  const { hideCart } = useContext(ProductFunctionsContext);

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
      className="cart-box z-20 absolute overflow-y-scroll inset-y-0 right-0 w-1/1 sm:w-1/2 md:w-1/3 bg-white z-5"
    >
      <Cancel
        className="absolute top-2 right-2 cursor-pointer"
        color="error"
        fontSize="large"
        onClick={handleCloseCart}
      />
      <h1 className="text-2xl border-b text-center">Shopping Cart</h1>
      {cartProducts.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <Stack direction="row" spacing={2} color="text.secondary">
            <Typography sx={{ fontSize: "1.3em" }}>Total Amount :</Typography>
            <Typography sx={{ fontSize: "1.3em" }}>
              ₹
              {cartProducts
                .reduce((curPrice, product) => curPrice + product.price, 0)
                .toFixed(2)}
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
  cartProducts: propTypes.array.isRequired,
};

export default Cart;
