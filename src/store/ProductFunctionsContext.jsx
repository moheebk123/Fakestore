import { createContext } from "react";

const ProductFunctionsContext = createContext({
  addCartProduct: () => {},
  deleteCartProduct: () => {},
  changeProductDetails: () => {},
  showProduct: () => {},
  hideCart: () => {},
});

export default ProductFunctionsContext;
