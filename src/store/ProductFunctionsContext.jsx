/* This code is creating a context in a React application using the `createContext` function from the React library. */
import { createContext } from "react";

const ProductFunctionsContext = createContext({
  addCartProduct: () => {},
  deleteCartProduct: () => {},
  changeProductDetails: () => {},
  showProduct: () => {},
  hideCart: () => {},
});

export default ProductFunctionsContext;
