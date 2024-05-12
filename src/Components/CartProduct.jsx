import React, { useContext } from "react";
import propTypes from "prop-types";
import ProductFunctionsContext from "../store/ProductFunctionsContext";
import { Button, Stack, Typography } from "@mui/material";

const CartProduct = ({ title, image, price }) => {
  const { deleteCartProduct } = useContext(ProductFunctionsContext);

  const handleDeleteCartProduct = () => {
    deleteCartProduct(title);
  };

  return (
    <Stack
      spacing={1}
      sx={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", padding: "1em" }}
    >
      <div className="w-full h-20">
        <img className="object-contain w-full h-full" src={image} />
      </div>
      <Typography className="text-center">{title}</Typography>
      <Typography className="text-center" sx={{ fontWeight: "600" }}>
        ₹ {price}
      </Typography>
      <Button onClick={handleDeleteCartProduct} variant="contained">
        Remove
      </Button>
    </Stack>
  );
};

CartProduct.propTypes = {
  title: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
};

export default CartProduct;
