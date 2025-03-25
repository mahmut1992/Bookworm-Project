import React, { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = inputRef.current.value.trim();
    if (text === "") return;
    searchParams.set("search", text);
    setSearchParams(searchParams);
    inputRef.current.value = "";
  };

  const handleChange = (e) => {
    const value = e.target.value;
    searchParams.set("sort", value);
    setSearchParams(searchParams);
  };

  return (
    <div className="d-flex justify-content-between mt-4">
      <select
        onChange={handleChange}
        defaultValue="sırala"
        className="form-select w-25"
      >
        <option disabled>sırala</option>
        <option value="a-z">a-z</option>
        <option value="z-a">z-a</option>
      </select>
      <form onSubmit={handleSubmit} className="d-flex gap-2 w-50">
        <input
          ref={inputRef}
          type="text"
          className="form-control"
          placeholder="Kitap ismi giriniz..."
        />
        <button className="btn btn-primary px-4">Ara</button>
      </form>
    </div>
  );
};

export default Filter;
