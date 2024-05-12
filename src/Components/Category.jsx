/*
The `Category` component renders a tab-based category selection interface and
calls the `changeCategory` function when a tab is clicked to show products based on category.
*/
import React, { useState } from "react";
import propTypes from "prop-types";
import { AppBar, Tabs, Tab } from "@mui/material";

const Category = ({ changeCategory }) => {
  const [value, setValue] = useState(0);

  const handleCategoryChange = (event, newValue) => {
    changeCategory(event.target.textContent);
    setValue(newValue);
  };

  return (
    <AppBar
      className="rounded-full overflow-hidden"
      position="static"
      color="default"
    >
      <Tabs
        value={value}
        onChange={handleCategoryChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      >
        <Tab label="all" />
        <Tab label="electronics" />
        <Tab label="jewelery" />
        <Tab label="men's clothing" />
        <Tab label="women's clothing" />
      </Tabs>
    </AppBar>
  );
};

Category.propTypes = {
  changeCategory: propTypes.func.isRequired,
};

export default Category;
