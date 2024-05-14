import { useEffect, useState } from "react";
import axios from "axios";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import ProductDetail from "./pages/Product/ProductDetail";
import ProductFunctionsContext from "./store/ProductFunctionsContext";
import PreLoader from "./Components/PreLoader";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [defaultProducts, setDefaultProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [productDetails, setProductDetails] = useState({});
  const [showProductDetails, setShowProductDetails] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);

    const getProducts = async () => {
      const res = await axios.get("https://fakestoreapi.com/products/");
      setDefaultProducts(res.data);
    };
    getProducts();
  }, []);

  const hideProduct = () => {
    setShowProductDetails(false);
  };

  const changeProductDetails = (title) => {
    const detailProduct = defaultProducts.filter((product) =>
      product.title.includes(title)
    );
    const newProductDetail = detailProduct[0];
    setProductDetails(newProductDetail);
    setShowProductDetails(true);
  };

  const addCartProduct = (title) => {
    const updatedProduct = defaultProducts.filter((product) =>
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
      {loading ? (
        <PreLoader />
      ) : (
        <ProductFunctionsContext.Provider
          value={{
            addCartProduct,
            deleteCartProduct,
            changeProductDetails,
          }}
        >
          <Home defaultProducts={defaultProducts} />
          <Cart cartProducts={cartProducts} />
          {showProductDetails && (
            <ProductDetail
              productDetails={productDetails}
              hideProduct={hideProduct}
            />
          )}
        </ProductFunctionsContext.Provider>
      )}
    </>
  );
};

export default App;
