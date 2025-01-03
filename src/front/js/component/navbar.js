import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Navbar");
  }, [store.token, store.token1] );

  const handleClick = () => {
    !store.token && navigate("/login");
    actions.logOut();
  };
  
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Home</span>
        </Link>
        {store?.token && (
          <Link to="/private">
            <span className="navbar-brand mb-0 h1">User Control Panel </span>
          </Link>
        )}
        {store?.token1 && (
          <Link to="/privateEmpresa">
            <span className="navbar-brand mb-0 h1">Company Control Panel</span>
          </Link>
        )}
        <div className="ml-auto">
          <Link to="/login">
            <button className="btn btn-secondary" onClick={handleClick}>
              {store?.token ? "Logout (Usuario)" : "Login / Registro (Usuario)"}
            </button>
          </Link>
        </div>
        <div className="ml-auto">
          <Link to="/loginEmpresa">
            <button className="btn btn-success" onClick={handleClick}>
              {store?.token1 ? "Logout (Empresa)" : "Login / Registro (Empresa)"}
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
