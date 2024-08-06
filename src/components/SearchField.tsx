import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";

export const SearchFiled = () => {
  const [city, setCity] = useState("");

  return (
    <div className="search-field">
      <input
        placeholder="Search for a city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Link to={city ? `weather/${city}` : "#"}>
        <IoSearch />
      </Link>
    </div>
  );
};
