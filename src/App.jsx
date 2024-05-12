import React, { useEffect, useState } from "react";
import axios from "axios";
import Category from "./Components/Category";
import Search from "./Components/Search";
import ProductBox from "./Components/ProductBox";
import ProductDetail from "./Components/ProductDetail";
import Cart from "./Components/Cart";
import OpenCart from "./Components/OpenCart";
import ProductFunctionsContext from "./store/ProductFunctionsContext";

const App = () => {
  const [products, setProducts] = useState([]);
  const [defaultProducts, setDefaultProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [productDetails, setProductDetails] = useState({});
  const [showProductDetails, setShowProductDetails] = useState(false);
  const [showCartBox, setShowCartBox] = useState(false);

  /* The `useEffect` hook is making an HTTP GET request to
  "https://fakestoreapi.com/products/" to fetch a list of products when the component mounts for the
  first time. */
  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get("https://fakestoreapi.com/products/");
      setProducts(res.data);
      setDefaultProducts(res.data);
    };
    getProducts();
  }, []);

  /*The `showProduct` function shows the product details page by setting the state variable `showProductDetails` to true.*/
  const showProduct = () => {
    setShowProductDetails(true);
  };

  /* The `hideProduct` function hides the product details page by setting the state of `showProductDetails` to false.*/
  const hideProduct = () => {
    setShowProductDetails(false);
  };

  /*The `showCart` function shows the cart by setting the state of `showCartBox` to true.*/
  const showCart = () => {
    setShowCartBox(true);
  };

  /* The `hideCart` function hides the cart by setting the `showCartBox` state to `false`.*/
  const hideCart = () => {
    setShowCartBox(false);
  };

  /*The `searchProduct` function filters products based on a searched name and updates the products state with the filtered results.*/
  const searchProduct = (searchedName) => {
    searchedName = searchedName.toLowerCase();
    const searchedProducts = products.filter((product) => {
      const title = product.title.toLowerCase();
      return title.includes(searchedName);
    });
    setProducts(searchedProducts);
  };

  /*The function `changeCategory` filters products based on a specified category and updates the displayed products accordingly.*/
  const changeCategory = (category) => {
    if (category !== "all") {
      const categoryProducts = defaultProducts.filter(
        (product) => product.category === category
      );
      setProducts(categoryProducts);
    } else {
      setProducts(defaultProducts);
    }
  };

  /* The function `changeProductDetails` filters products based on a given title and sets the product details to the first matching product*/
  const changeProductDetails = (title) => {
    const detailProduct = products.filter((product) =>
      product.title.includes(title)
    );
    const newProductDetail = detailProduct[0];
    setProductDetails(newProductDetail);
  };

  /*The `addCartProduct` function filters products by title and adds the first matching product to the cart.*/
  const addCartProduct = (title) => {
    const updatedProduct = products.filter((product) =>
      product.title.includes(title)
    );
    const newCartProduct = updatedProduct[0];
    setCartProducts((prev) => [newCartProduct, ...prev]);
  };

  /*The function `deleteCartProduct` removes a product from the cart based on its title.*/
  const deleteCartProduct = (title) => {
    const newCartProduct = cartProducts.filter(
      (product) => !product.title.includes(title)
    );
    setCartProducts(newCartProduct);
  };

  return (
    <>
      <OpenCart cartProductsLength={cartProducts.length} showCart={showCart} />
      <Search searchProduct={searchProduct} />
      <Category changeCategory={changeCategory} />
      <ProductFunctionsContext.Provider
        value={{
          addCartProduct,
          deleteCartProduct,
          changeProductDetails,
          showProduct,
          hideCart,
        }}
      >
        <ProductBox products={products} />
        {showProductDetails && (
          <ProductDetail
            productDetails={productDetails}
            hideProduct={hideProduct}
          />
        )}
        {showCartBox && <Cart cartProducts={cartProducts} />}
      </ProductFunctionsContext.Provider>
    </>
  );
};

export default App;
