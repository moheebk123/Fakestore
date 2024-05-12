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

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get("https://fakestoreapi.com/products/");

      setProducts(res.data);
      setDefaultProducts(res.data);
    };

    getProducts();
  }, []);

  const showProduct = () => {
    setShowProductDetails(true);
  };

  const hideProduct = () => {
    setShowProductDetails(false);
  };

  const showCart = () => {
    setShowCartBox(true);
  };

  const hideCart = () => {
    setShowCartBox(false);
  };

  const searchProduct = (searchedName) => {
    searchedName = searchedName.toLowerCase();
    const searchedProducts = products.filter((product) => {
      const title = product.title.toLowerCase();
      return title.includes(searchedName);
    });
    setProducts(searchedProducts);
  };

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

  const changeProductDetails = (title) => {
    const detailProduct = products.filter((product) =>
      product.title.includes(title)
    );
    const newProductDetail = detailProduct[0];
    setProductDetails(newProductDetail);
  };

  const addCartProduct = (title) => {
    const updatedProduct = products.filter((product) =>
      product.title.includes(title)
    );
    const newCartProduct = updatedProduct[0];
    setCartProducts((prev) => [newCartProduct, ...prev]);
  };

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
