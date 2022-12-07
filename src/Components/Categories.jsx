import React from "react";
import { CategoriesData } from "./CategoriesData";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";


const Categories = () => {
  return (
    <>
      <div className="navbar navbar-expand-lg bg-light d-flex flex-row justify-content-center">
        {CategoriesData.map((data) => {
          return (
            <NavLink to={`/products/${data.path}`} style={{textDecoration: "none", color:"black", }}>
              <div className="mx-4">{data.title}</div>
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
