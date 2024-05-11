import propTypes from "prop-types";
import Product from "./Product";
import { Stack, Pagination } from "@mui/material";
import { useEffect, useState } from "react";

const ProductBox = ({
  addCartProduct,
  changeProductDetails,
  showProduct,
  products,
}) => {
  useEffect(() => {
    setPage(() => {
      return Math.ceil(products.length / 4);
    });
    setProductIndex({ startIndex: 0, endIndex: 3 });
  }, [products]);

  const [page, setPage] = useState();
  const [productIndex, setProductIndex] = useState({
    startIndex: 0,
    endIndex: 3,
  });

  const handlePageChange = (event) => {
    if (event.target.tagName === "BUTTON") {
      const label = event.target.ariaLabel;
      const startIndex = Number(label[label.length - 1]) * 4 - 1 - 3;
      const endIndex = Number(label[label.length - 1]) * 4 - 1;
      setProductIndex({ startIndex: startIndex, endIndex: endIndex });
    }
  };

  return (
    <Stack className="flex flex-col gap-y-5 items-center">
      <Stack
        className="flex flex-wrap justify-center item-center gap-6"
        direction="row"
      >
        {products.length === 0 ? (
          <h1 className="text-2xl">Product Not Present In This Category</h1>
        ) : (
          products.map((product, index) => {
            const { title, image, price, rating } = product;
            if (
              productIndex.startIndex <= index &&
              productIndex.endIndex >= index
            ) {
              return (
                <Product
                  key={index}
                  title={title}
                  image={image}
                  price={price}
                  rating={rating}
                  showProduct={showProduct}
                  addCartProduct={addCartProduct}
                  changeProductDetails={changeProductDetails}
                />
              );
            }
          })
        )}
      </Stack>
      <Pagination
        className="border border-slate-400 rounded-full"
        sx={{ padding: "5px 10px" }}
        count={page}
        defaultPage={1}
        hideNextButton
        hidePrevButton
        onClick={handlePageChange}
        variant="outlined"
        color="primary"
      />
    </Stack>
  );
};

ProductBox.propTypes = {
  products: propTypes.array.isRequired,
  showProduct: propTypes.func.isRequired,
  changeProductDetails: propTypes.func.isRequired,
  addCartProduct: propTypes.func.isRequired,
};

export default ProductBox;
