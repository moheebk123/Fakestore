import { Stack, ButtonBase, Typography, Button } from "@mui/material";
import { Star, PeopleAlt, AddShoppingCart, Cancel } from "@mui/icons-material";
import propTypes from "prop-types";

const ProductDetail = ({ addCartProduct, productDetails, hideProduct }) => {
  const { title, description, category, price, image, rating } = productDetails;

  const handleChangeCartProduct = () => {
    addCartProduct(title)
    hideProduct();
  }

  const handleHideProduct = () => {
    hideProduct();
  };
  return (
    <>
      <Stack
        className="absolute flex items-center inset-0 bg-white z-10"
        spacing={2}
        direction="row"
        sx={{ padding: "1em" }}
      >
        <Cancel
          className="absolute top-2 right-2 cursor-pointer"
          color="error"
          fontSize="large"
          onClick={handleHideProduct}
        />
        <a className="basis-1/2" href={image} target="blank">
          <ButtonBase
            className="w-full"
            sx={{
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
              paddingBlock: "1em",
            }}
          >
            <img className="h-80" alt="Product Image" src={image} />
          </ButtonBase>
        </a>
        <Stack
          className="basis-1/2 h-max border-y border-slate-400"
          sx={{ padding: "1em" }}
          spacing={2}
        >
          <Typography sx={{ fontWeight: "600", fontSize: "1.3em" }}>
            {title}
          </Typography>
          <Typography sx={{ fontSize: "1em" }}>{description}</Typography>
          <Typography sx={{ fontWeight: "600", fontSize: "1.7em" }}>
            ₹ {price}
          </Typography>
          <Typography
            className="capitalize"
            color="text.secondary"
            sx={{ fontWeight: "600" }}
          >
            Category : {category}
          </Typography>
          <Stack
            className="flex items-center"
            color="text.secondary"
            direction="row"
            spacing={1}
          >
            <Typography sx={{ fontWeight: "600" }}>Rating : </Typography>
            <Typography sx={{ fontSize: "1.7em", fontWeight: "600" }}>
              {rating.rate}
            </Typography>
            <Star className="text-orange-400" />
          </Stack>
          <Typography
            variant="body2"
            sx={{ fontWeight: "600" }}
            color="text.secondary"
          >
            <PeopleAlt /> Rated: {rating.count}
          </Typography>
          <Button variant="contained" onClick={handleChangeCartProduct}>
            <AddShoppingCart sx={{ marginRight: "1em" }} />
            Add to Cart
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

ProductDetail.propTypes = {
  hideProduct: propTypes.func.isRequired,
  addCartProduct: propTypes.func.isRequired,
  productDetails: propTypes.shape({
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    image: propTypes.string.isRequired,
    category: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    rating: propTypes.shape({
      rate: propTypes.number.isRequired,
      count: propTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetail;
