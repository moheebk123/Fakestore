import propTypes from "prop-types";
import { useState } from "react";
import { AppBar, Tabs, Tab } from "@mui/material";

const Category = ({ changeCategory }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCategoryChange = (event) => {
    const category = event.target.textContent;
    changeCategory(category);
  };

  return (
    <AppBar
      className="rounded-full overflow-hidden"
      position="static"
      color="default"
    >
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      >
        <Tab label="all" onClick={handleCategoryChange} />
        <Tab label="electronics" onClick={handleCategoryChange} />
        <Tab label="jewelery" onClick={handleCategoryChange} />
        <Tab label="men's clothing" onClick={handleCategoryChange} />
        <Tab label="women's clothing" onClick={handleCategoryChange} />
      </Tabs>
    </AppBar>
  );
};

Category.propTypes = {
  changeCategory: propTypes.func.isRequired,
};

export default Category;
