import React, { useEffect, useState } from "react";
import webApiDemo from "../apis/webApiDemo";
import CreateProduct from "./CreateProduct";

const EditProduct = (props) => {
  const [product, setProduct] = useState({});
  const id = props.match.params.id;
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
