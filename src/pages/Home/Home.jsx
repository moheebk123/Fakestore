import { useEffect, useState } from "react";
import axios from "axios";
import propTypes from "prop-types";
import Search from "./Search";
import Category from "./Category";
import ProductList from "./ProductList";

const Home = ({ defaultProducts }) => {
  const [products, setProducts] = useState(defaultProducts);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get("https://fakestoreapi.com/products/");
      setProducts(res.data);
    };
    getProducts();
  }, [defaultProducts]);

  const searchProduct = (searchedName) => {
    searchedName = searchedName.toLowerCase();
    const searchedProducts = products.filter((product) => {
      const title = product.title.toLowerCase();
      return title.includes(searchedName);
    });
    setProducts(searchedProducts);
  };

  const changeProductCategory = (category) => {
    if (category !== "all") {
      const categoryProducts = defaultProducts.filter(
        (product) => product.category === category
      );
      setProducts(categoryProducts);
    } else {
      setProducts(defaultProducts);
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center w-full h-max">
      <Search searchProduct={searchProduct} />

      <Category changeProductCategory={changeProductCategory} />

      <ProductList products={products} />
    </div>
  );
};

Home.propTypes = {
  defaultProducts: propTypes.array.isRequired,
};

export default Home;
