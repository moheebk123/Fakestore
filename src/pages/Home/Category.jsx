import { useState } from "react";
import propTypes from "prop-types";
import "./category.css";

const CategoryItem = ({ title, active, handleCategoryChange }) => {
  return (
    <button
      onClick={() => handleCategoryChange(title.toLowerCase())}
      className={`min-w-10 cursor-pointer transition-all text-lg font-bold hover:border-b-4 hover:border-slate-300 ${
        active ? "border-b-4 border-blue-500" : ""
      }`}
    >
      {title}
    </button>
  );
};

const Category = ({ changeProductCategory }) => {
  const [curCategory, setCurCategory] = useState("all");

  const handleCategoryChange = (category) => {
    setCurCategory(category);
    changeProductCategory(category);
  };

  return (
    <div
      className="category-box w-fit h-max overflow-x-auto border border-slate-300 flex justify-center items-center gap-x-5 rounded-full"
      style={{ padding: "1em" }}
    >
      <CategoryItem
        title="All"
        active={curCategory === "all"}
        handleCategoryChange={handleCategoryChange}
      />
      <CategoryItem
        title="Electronics"
        active={curCategory === "electronics"}
        handleCategoryChange={handleCategoryChange}
      />
      <CategoryItem
        title="Men's Clothing"
        active={curCategory === "men's clothing"}
        handleCategoryChange={handleCategoryChange}
      />
      <CategoryItem
        title="Women's Clothing"
        active={curCategory === "women's clothing"}
        handleCategoryChange={handleCategoryChange}
      />
    </div>
  );
};

Category.propTypes = {
  changeProductCategory: propTypes.func.isRequired,
};

CategoryItem.propTypes = {
  title: propTypes.string.isRequired,
  active: propTypes.bool.isRequired,
  handleCategoryChange: propTypes.func.isRequired,
};

export default Category;
