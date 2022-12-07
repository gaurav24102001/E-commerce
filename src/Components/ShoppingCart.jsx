import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import "./ShoppingCart.css";
import { NavLink } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import img from "../images/cashew.webp";
import CloseIcon from "@mui/icons-material/Close";
import CardDetails from "./CardDetails";
import CartImage from "../images/cart.gif";
import { DLT } from "../redux/actions/action";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

const ShoppingCart = () => {
  const dispatch = useDispatch();

  const [price, setPrice] = useState(0);
  console.log(price);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const getdata = useSelector((state) => state.cartreducer.carts);
  // console.log(getdata);

  const dlt = (id) => {
    dispatch(DLT(id));
  };

  const total = () => {
    let price = 0;
    getdata.map((ele, k) => {
      price = ele.price * ele.qnty + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

  return (
    <>
      <div
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Badge badgeContent={getdata.length} color="primary">
          <ShoppingCartOutlinedIcon />
        </Badge>
        <div>
          <span>Cart</span>
        </div>
      </div>

      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {getdata.length ? (
          <div className="card_details" style={{ width: "24rem", padding: 10 }}>
            <table class="table">
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Restaurant Name</th>
                </tr>
              </thead>
              <tbody>
                {getdata.map((e) => {
                  return (
                    <>
                      <tr>
                        <td>
                          <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                            <img
                              src={e.image}
                              srcset=""
                              style={{ width: "5rem", height: "5rem" }}
                            />
                          </NavLink>
                        </td>
                        <td>
                          <p>{e.title}</p>
                          <p>price: ${e.price}</p>
                          <p>Qauntity: {e.qnty}</p>
                        </td>
                        <td>
                          <p
                            style={{
                              color: "red",
                              fontSize: 20,
                              cursor: "pointer",
                            }}
                            className="small-trash"
                          >
                            <DeleteIcon onClick={() => dlt(e.id)} />
                          </p>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
            <p className="text-center">Total: {price}</p>
          </div>
        ) : (
          <div
            className="card_details d-flex justify-content-center align-items-center"
            style={{ width: "24rem", padding: 10, position: "relative" }}
          >
            <CloseIcon
              className="close-icon"
              onClick={handleClose}
              style={{
                position: "absolute",
                top: 2,
                right: 20,
                fontSize: 23,
                cursor: "pointer",
              }}
            />
            <p style={{ fontSize: 22 }}>Your cart is Empty</p>
            <img
              src={CartImage}
              alt="cart-image"
              className="emptycart_img"
              style={{ width: "5rem", padding: 10 }}
            />
          </div>
        )}
      </Menu>
    </>
  );
};

export default ShoppingCart;
