import {
  Card,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";
import propTypes from "prop-types";

const Product = ({
  title,
  image,
  price,
  showProduct,
  changeProductDetails,
}) => {
  const handleProductPage = () => {
    showProduct();
    changeProductDetails(title);
  };

  return (
    <Card
      className="basis-1/3"
      sx={{
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
  showProduct: propTypes.func.isRequired,
  changeProductDetails: propTypes.func.isRequired,
};

export default Product;
