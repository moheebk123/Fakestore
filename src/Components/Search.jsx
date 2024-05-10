import SearchIcon from "@mui/icons-material/Search";
import propTypes from "prop-types";
import { Stack, Divider, Tooltip, IconButton } from "@mui/material";
import { useRef } from "react";

const Search = ({ searchProduct }) => {
  const productName = useRef();

  const handleProductSearch = () => {
    searchProduct(productName.current.value);
    productName.current.value = "";
  };

  return (
    <>
      <Stack
        className="flex items-center w-80 border rounded-full border-slate-400"
        direction="row"
        spacing={1}
      >
        <input
          type="text"
          placeholder="Search Product"
          className="border-none outline-none w-64"
          style={{ padding: "0.8em" }}
          ref={productName}
        />
        <Divider className=" bg-slate-400" orientation="vertical" flexItem />
        <Tooltip title="Seach Product by Name">
          <IconButton onClick={handleProductSearch}>
            <SearchIcon className="rounded-full cursor-pointer text-slate-500" />
          </IconButton>
        </Tooltip>
      </Stack>
    </>
  );
};

Search.propTypes = {
  searchProduct: propTypes.func.isRequired,
};

export default Search;
