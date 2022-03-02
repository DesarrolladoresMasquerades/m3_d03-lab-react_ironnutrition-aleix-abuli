import { Input } from "antd";

const Search = ({ search, handleFilter }) => {
  return (
    <Input value={search} onChange={(e) => handleFilter(e.target.value)} />
  );
};

export default Search;
