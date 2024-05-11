import axios from "axios";
import Category from "./Components/Category";
import Search from "./Components/Search";
import ProductBox from "./Components/ProductBox";
import { useEffect, useState } from "react";
import ProductDetail from "./Components/ProductDetail";

const App = () => {
  const [products, setProducts] = useState([]);
  const [defaultProducts, setDefaultProducts] = useState([]);
  const [productDetails, setProductDetails] = useState({
    title: "",
    description: "",
    image: "",
    price: 0,
    rating: {
      rate: 0,
      count: 0
    }
  });
  const [showProductDetails, setShowProductDetails] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get("https://fakestoreapi.com/products/");

      setProducts(res.data);
      setDefaultProducts(res.data);
    };

    getProducts();
  }, []);

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

  const searchProduct = (searchedName) => {
    searchedName = searchedName.toLowerCase();
    const searchedProducts = products.filter((product) => {
      const title = product.title.toLowerCase();
      return title.includes(searchedName);
    });
    setProducts(searchedProducts);
  };

  const showProduct = () => {
    setShowProductDetails(true);
  };

  const hideProduct = () => {
    setShowProductDetails(false);
  };

  const changeProductDetails = (title) => {
    const detailProduct = products.filter((product) =>
      product.title.includes(title)
    );
    const newProductDetail = detailProduct[0];
    setProductDetails(newProductDetail);
  };

  return (
    <>
      <Search searchProduct={searchProduct} />
      <Category changeCategory={changeCategory} />
      <ProductBox
        showProduct={showProduct}
        changeProductDetails={changeProductDetails}
        products={products}
      />
      {showProductDetails && (
        <ProductDetail
          productDetails={productDetails}
          hideProduct={hideProduct}
        />
      )}
    </>
  );
};

export default App;
