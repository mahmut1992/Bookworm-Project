import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container my-5 d-flex flex-column align-items-center gap-5">
      <h1 className="welcome">Hoş Geldiniz</h1>
      <img className="img-fluid " src="/welcome.webp" alt="" />
      <p>Ürünler sayfasında Yeni çıkan Bütün Kitaplara Ulaşabilirsiniz...</p>
    </div>
  );
};

export default Home;
