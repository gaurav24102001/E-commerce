import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import FakeStore from "../Components/FakeStore";
import { ADD } from "../redux/actions/action";

function Home() {
  const [products, setProducts] = useState(FakeStore);

  const dispatch = useDispatch();
  const send = (e) => {
    dispatch(ADD(e));
  };



  return (
    <div className="container mt-3">
    <div className="row d-flex justify-content-center align-items-center">
      {products.map((data, id) => {
        return (
          <>
            <div
              class="card mx-4 mt-4 card_style"
              style={{ width: "22rem", border: "none" }}
            >
              <img
                class="card-img-top mt-3"
                src={data.image}
                alt="Card image cap"
                style={{ height: "16rem" }}
              />
              <div class="card-body">
                <h5 class="card-title">{data.title}</h5>
                <p class="card-text">Price: ${data.price}</p>
                <div className="button_div" onClick={() => send(data)}>
                  <div class="btn btn-primary d-flex justify-content-center">
                    Add To Cart
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  </div>
  );
}

export default Home;
