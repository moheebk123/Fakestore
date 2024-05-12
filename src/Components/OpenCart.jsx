import React from "react";
import propTypes from "prop-types";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";

/*The OpenCart component is a React component that displays a shopping cart icon with a badge showing
  the number of products in the cart and allows the user to open the cart when clicked.
*/
const OpenCart = ({ showCart, cartProductsLength }) => {
  const theme = useTheme();

  const handleOpenCart = () => {
    showCart();
  };

  return (
    <IconButton
      className="cursor-pointer z-15 h-fit md:top-1 right-1 bottom-3"
      sx={{
        position: "fixed",
        [theme.breakpoints.up("sm")]: { position: "absolute" },
      }}
      aria-label="cart"
      onClick={handleOpenCart}
    >
      <Badge badgeContent={cartProductsLength} color="primary">
        <ShoppingCartIcon
          className="rounded-full bg-orange-300 border-orange-400"
          fontSize="large"
          sx={{
            padding: "5px",
            fontSize: "40px",
          }}
        />
      </Badge>
    </IconButton>
  );
};

OpenCart.propTypes = {
  cartProductsLength: propTypes.number.isRequired,
  showCart: propTypes.func.isRequired,
};

export default OpenCart;
