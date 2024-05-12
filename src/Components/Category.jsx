/*
The `Category` component renders a tab-based category selection interface and
calls the `changeCategory` function when a tab is clicked to show products based on category.
*/
import React, { useState } from "react";
import propTypes from "prop-types";
import { Tabs, Tab } from "@mui/material";

const Category = ({ changeCategory }) => {
  const [value, setValue] = useState(0);

  const handleCategoryChange = (event, newValue) => {
    changeCategory(event.target.textContent);
    setValue(newValue);
  };

  return (
      <Tabs
        value={value}
        onChange={handleCategoryChange}
        indicatorColor="primary"
        textColor="primary"
      variant="scrollable"
      sx={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}
      className="w-full md:w-fit bg-gray-100 rounded-full"
      >
        <Tab label="all" />
        <Tab label="electronics" />
        <Tab label="jewelery" />
        <Tab label="men's clothing" />
        <Tab label="women's clothing" />
      </Tabs>
  );
};

Category.propTypes = {
  changeCategory: propTypes.func.isRequired,
};

export default Category;
