import React from "react";
import image from "../images/hazelnut.webp";
import DeleteIcon from "@mui/icons-material/Delete";
import { useParams, useNavigate } from "react-router-dom";
import "./ShoppingCart.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { DLT, ADD, REMOVE } from "../redux/actions/action";
import { useState } from "react";

const CardDetails = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();
  console.log(id);

  const dispatch = useDispatch();

  // /to add more qntity of the item
  const send = (e) => {
    dispatch(ADD(e));
  };

  //to delete item from redux store and got to the home page
  const dlt = (id) => {
    dispatch(DLT(id));
    //for navigating to home page after deleting it from redux store
    history("/");
  };

  const remove = (item) => {
    dispatch(REMOVE(item));
  };

  //redirect to home page
  const history = useNavigate();

  // getting all the data from redux store
  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);

  //to search for the cards with id === id in parameter and get the data from it of that particular data and setting that data in data and showing only that data;
  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id;
    });
    console.log(comparedata);
    setData(comparedata);
  };

  useEffect(() => {
    compare();
  }, [id]);

  return (
    <div className="container mt-2">
      <h2 className="text-center">Item's Detail Page</h2>
      <section className="container mt-3">
        <div className="itemsdetails">
          {data.map((ele) => {
            return (
              <>
                <div className="items_img">
                  <img src={ele.image} alt="" />
                </div>
                <div className="details">
                  <table class="table table-borderless">
                    <tr>
                      <td>
                        <p>
                          <strong>Restaurant</strong> :{ele.title}
                        </p>
                        <p>
                          <strong>Price</strong> : ${ele.price}
                        </p>
                        <p>
                          <strong>SubCategory</strong> : {ele.category}
                        </p>
                        <p>
                          <strong>Total</strong> : ${ele.price * ele.qnty}
                        </p>
                        <div
                          className="mt-5 d-flex justify-content-between align-items-center"
                          style={{
                            width: 100,
                            cursor: "pointer",
                            background: "#ddd",
                            color: "#111",
                          }}
                        >
                          <span
                            style={{ fontSize: 24 }}
                            onClick={
                              ele.qnty <= 1
                                ? () => dlt(ele.id)
                                : () => remove(ele)
                            }
                          >
                            -
                          </span>
                          <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                          <span
                            style={{ fontSize: 24 }}
                            onClick={() => send(ele)}
                          >
                            +
                          </span>
                        </div>
                      </td>
                      <td>
                        <p>
                          <br />
                        </p>
                        <p>
                          <strong>Rating :</strong>{" "}
                          <span
                            style={{
                              background: "green",
                              color: "#fff",
                              padding: "2px 5px",
                              borderRadius: "5px",
                            }}
                          >
                            3.5 ★{" "}
                          </span>
                        </p>
                        <p>
                          <strong>Order Review :</strong> {ele.category_id}
                        </p>
                        <p>
                          <strong>Remove : </strong>{" "}
                          <DeleteIcon
                            style={{
                              color: "red",
                              fontSize: 20,
                              cursor: "pointer",
                            }}
                            onClick={() => dlt(ele.category_id)}
                          />
                        </p>
                      </td>
                    </tr>
                  </table>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
};
export default CardDetails;
