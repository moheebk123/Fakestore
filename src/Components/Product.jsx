/*The React component named `Product` displays product information such as title, image, and price in a Material-UI Card component and allows users to add the product to the cart.
Additionaly, It calls the handleProductPage function to open Product Detail Page
 */
import React, { useContext } from "react";
import propTypes from "prop-types";
import ProductFunctionsContext from "../store/ProductFunctionsContext";
import {
  Card,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";

const Product = ({ title, image, price }) => {
  const { addCartProduct, changeProductDetails, showProduct, hideCart } =
    useContext(ProductFunctionsContext);

  const handleProductPage = () => {
    showProduct();
    hideCart();
    changeProductDetails(title);
  };

  const handleAddCartProduct = () => {
    addCartProduct(title);
  };

  return (
    <Card
      className=" min-w-72 w-72 basis-1/2 md:basis-1/3"
      sx={{
        paddingBlock: "1em",
        boxShadow:
          "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 10px 0px",
      }}
    >
      <CardActionArea onClick={handleProductPage}>
        <img
          src={image}
          alt="product image"
          className="h-40 w-full object-contain"
        />
        <div className="flex flex-col gap-y-2" style={{ padding: "1em" }}>
          <Typography className="w-max" variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            ₹ {price}
          </Typography>
        </div>
      </CardActionArea>
      <CardActions>
        <Button
          color="primary"
          sx={{ marginInline: "auto" }}
          variant="contained"
          onClick={handleAddCartProduct}
        >
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
};

Product.propTypes = {
  title: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
};

export default Product;
