import React, { useEffect, useState } from "react";
import "./Main.css";
import Fade from "react-reveal/Fade";
import axios from "axios";
import { useCart } from "../../context/cart";
import { useSearch } from "../../context/search";
import Loader from "./Loader/Loader";

const Main = () => {
  const [cart, setCart] = useCart();
  // const [search] = useSearch()

  // console.log(search)

  let [loading, setLoading] = useState(false);
  let [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  let fetchData = async () => {
    setLoading(!loading);
    let { data } = await axios.get("https://dummyjson.com/products");
    console.log(data.products);
    setItems(data.products);
    setLoading(false);
  };

  let addToCart = () => {
    setCart(cart + 1);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="main">
      {loading && (
        <div className="loader-container">
          <Loader className="loader" />
        </div>
      )}
      <Fade right>
        <div className="row card-top-margin ">
          {currentItems.map((item) => (
            <div className="col-md-3 mt-5" key={item.id}>
              <div
                className="card"
                style={{ width: "18rem", minHeight: "300px", zIndex: "0" }}
              >
                <img
                  src={item.images[0]}
                  className="card-img-top card-image"
                  alt={item.title}
                />
                <div className="card-body">
                  <h5 className="card-title">Name:{item.title}</h5>
                  <p className="card-text">
                    Description: {item.description.substring(0, 60)}...
                  </p>
                  <button className="btn btn-warning" onClick={addToCart}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Fade>

      <nav className="page">
        <ul className="pagination">
          {Array.from({ length: Math.ceil(items.length / itemsPerPage) }).map(
            (_, index) => (
              <li
                key={index}
                className={`page-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                <button
                  className="page-link "
                  onClick={() => changePage(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            )
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Main;
