import { Button, Stack, Typography } from "@mui/material";
import propTypes from "prop-types";

const CartProduct = ({ title, image, price, deleteCartProduct }) => {
  const handleRemoveCartProduct = () => {
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
      <Button onClick={handleRemoveCartProduct} variant="contained">
        Remove
      </Button>
    </Stack>
  );
};

CartProduct.propTypes = {
  title: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  deleteCartProduct: propTypes.func.isRequired,
};

export default CartProduct;
