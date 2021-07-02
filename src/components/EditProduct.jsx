import React, { useEffect, useState, useContext } from "react";
import webApiDemo from "../apis/webApiDemo";
import CreateProduct from "./CreateProduct";
import UserContext from "../Contexts/UserContext";
import { useHistory } from "react-router-dom";

const EditProduct = (props) => {
  const [product, setProduct] = useState({});
  const id = props.match.params.id;
  const history = useHistory();

  const { user } = useContext(UserContext);
  if (!user || user.role !== "admin") {
    history.push("/");
  }

  useEffect(() => {
    webApiDemo.get("/products/" + id).then((res) => {
      setProduct(res.data);
      console.log(res.data);
    });
  }, [id]);
  return <div>{product.id && <CreateProduct product={product} />}</div>;
  // && <CreateProduct product={product} />
};

export default EditProduct;
