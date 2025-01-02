import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import Dashboard2 from "../component/dashboardEmpresa";
import { useLocalStorage } from "../hooks/hooks";

const PrivateEmpresa = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(store.token);
    !store.token && navigate("/loginEmpresa");
  }, [store.token]);
  console.log(store.profile);

  return (
    <>
      {store?.token ? <Dashboard2 name={store.profile?.name} /> : navigate("/")}
      {/*navigate("/")*/}
    </>
  );
};

export default PrivateEmpresa;
