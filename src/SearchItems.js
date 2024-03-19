import React from "react";

const SearchItems = ({ search, setSearch }) => {
  return (
    <form
      className="searchForm {
        "
      onSubmit={(e) => e.preventDefault()}
    >
      <lable htmlFor="search"></lable>
      <input
        id="search"
        type="text"
        role="searchbox"
        placeholder="Search Items"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchItems;
