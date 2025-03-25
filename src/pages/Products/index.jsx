import React, { useEffect, useState } from "react";
import Filter from "../../components/Filter";
import api from "../../api";
import Card from "../../components/Card";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const [books, setBooks] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const params = {
      q: searchParams.get("search"),
      _sort: "title",
      _order: searchParams.get("sort") === "z-a" ? "desc" : "asc",
    };

    api.get("/books", { params }).then((res) => setBooks(res.data));
  }, [searchParams]);

  return (
    <div className="container my-5">
      {books.length === 0 ? (
        <h1>Kitap Bulunamadı</h1>
      ) : (
        <h1>{books.length} Kitap Bulundu</h1>
      )}

      <Filter />

      <div className="card-container">
        {books.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Products;
