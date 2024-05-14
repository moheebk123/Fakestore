import { useContext } from "react";
import propTypes from "prop-types";
import Product from "../../Components/Product";
import ProductFunctionsContext from "../../store/ProductFunctionsContext";

const CartProducts = ({ cartProducts }) => {
  const { deleteCartProduct } = useContext(ProductFunctionsContext);

  return (
    <div>
      <div
        className="flex flex-col items-center justify-center gap-y-2.5"
        style={{ paddingBlock: "1em" }}
      >
        {cartProducts.map((product, index) => {
          const { title, image, price } = product;
          return (
            <Product
              key={index}
              title={title}
              image={image}
              price={price}
              buttonText="Remove"
              addRemoveCartProduct={deleteCartProduct}
            />
          );
        })}
      </div>
    </div>
  );
};

CartProducts.propTypes = {
  cartProducts: propTypes.array.isRequired,
};

export default CartProducts;
