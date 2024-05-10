import axios from "axios";
import Category from "./Components/Category";
import Search from "./Components/Search";
import ProductBox from "./Components/ProductBox";
import { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [defaultProducts, setDefaultProducts] = useState([]);

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
    setProducts(searchedProducts)
  };

  return (
    <>
      <Search searchProduct={searchProduct} />
      <Category changeCategory={changeCategory} />
      <ProductBox products={products} />
    </>
  );
};

export default App;
