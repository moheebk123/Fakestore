import { useContext } from "react";
import propTypes from "prop-types";
import Product from "../../Components/Product";
import EmptyMessage from "../../Components/EmptyMessage";
import ProductFunctionsContext from "../../store/ProductFunctionsContext";

const ProductList = ({ products }) => {
  const { addCartProduct } = useContext(ProductFunctionsContext);

  return (
    <div className="flex flex-wrap justify-center items-center gap-10">
      {products.length === 0 ? (
        <EmptyMessage message="Product Not Present in this Category" />
      ) : (
        products.map((product, index) => {
          const { title, image, price } = product;
          return (
            <Product
              key={index}
              title={title}
              image={image}
              price={price}
              buttonText="Add to Cart"
              addRemoveCartProduct={addCartProduct}
            />
          );
        })
      )}
    </div>
  );
};

ProductList.propTypes = {
  products: propTypes.array.isRequired,
};

export default ProductList;
