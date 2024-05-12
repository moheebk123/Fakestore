import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import Product from "./Product";
import EmptyProduct from "./EmptyProduct";
import { Stack, Pagination } from "@mui/material";

const ProductBox = ({ products }) => {
  const [page, setPage] = useState();
  const [productIndex, setProductIndex] = useState({
    startIndex: 0,
    endIndex: 3,
  });

  useEffect(() => {
    setPage(() => {
      return Math.ceil(products.length / 4);
    });
    setProductIndex({ startIndex: 0, endIndex: 3 });
  }, [products]);

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
      <Stack
        className="flex flex-wrap md:flex-col justify-center item-center gap-6"
        direction="row"
      >
        {products.length === 0 ? (
          <EmptyProduct />
        ) : (
          products.map((product, index) => {
            const { title, image, price } = product;
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
                />
              );
            }
          })
        )}
      </Stack>
    </Stack>
  );
};

ProductBox.propTypes = {
  products: propTypes.array.isRequired,
};

export default ProductBox;
