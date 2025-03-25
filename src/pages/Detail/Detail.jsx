import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import Info from "../../components/Info";

const Detail = () => {
  const { id } = useParams();

  const [book, setBook] = useState(null);

  useEffect(() => {
    api.get(`/books/${id}`).then((res) => setBook(res.data));
  }, []);

  console.log(book);

  return (
    <div className="row container my-5 p-5 mx-auto">
      <div className="col-md-6 d-flex align-items-center justify-content-center">
        <img
          className="raunded img-fluid shadow"
          src={book?.image}
          alt={book?.title}
        />
      </div>

      <div className="col-md-6 d-flex flex-column my-3 justify-content-center align-items-center">
        <h1 className="text-center py-5">{book?.title} </h1>
        <div>
          <Info title="Yazar" value={book?.author} />
          <Info title="Yıl" value={book?.year} />
          <Info title="Sayfa Sayısı" value={book?.page} />
          <Info title="Ücret" value={book?.price} />
          <Info title="Açıklama" value={book?.description} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
