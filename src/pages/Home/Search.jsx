import { useRef } from "react";
import propTypes from "prop-types";
import { IoSearch } from "react-icons/io5";

const Search = ({ searchProduct }) => {
  const productName = useRef();

  const handleProductSearch = () => {
    searchProduct(productName.current.value);
    productName.current.value = "";
  };

  return (
    <div
      className="flex items-center justify-between w-80 border rounded-full border-slate-400"
      style={{ padding: "0.8em 1em" }}
    >
      <input
        className="border-l-0 border-t-0 border-b-0 border-slate-400 border-r outline-none w-64"
        type="text"
        placeholder="Search Product"
        ref={productName}
      />
      <IoSearch
        className="rounded-full cursor-pointer text-slate-500"
        onClick={handleProductSearch}
      />
    </div>
  );
};

Search.propTypes = {
  searchProduct: propTypes.func.isRequired,
};

export default Search;
