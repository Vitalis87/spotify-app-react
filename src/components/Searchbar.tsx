import React, { FC, useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Searchbar: FC = () => {
  const divRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState<string>('')
  
  
  useEffect(() => {
    divRef.current?.scrollIntoView({ behavior: "smooth" });
  });
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate(`/search/${searchTerm}`)
  }
  
  return (
    <form 
      ref={divRef}
      onSubmit={handleSubmit}
      autoComplete="off"
      className="p-2 text-gray-400 focus-within:text-gray-600"
    >
      <label htmlFor="search-field" className="sr-only">
        Search all songs
      </label>
      <div className="flex justify-start items-center">
        <FiSearch className="w-5 h-5 ml-4" />
        <input
          name="search-field"
          id="search-field"
          autoComplete="off"
          placeholder="Search"
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-base text-white p-4"
        />
      </div>
    </form>
  );
};

export default Searchbar;
