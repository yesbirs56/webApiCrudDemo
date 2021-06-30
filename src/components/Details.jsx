import React, { useEffect, useState } from "react";
import webApiDemo from "../apis/webApiDemo";

const Details = (props) => {
  const [product, setProduct] = useState({});
  const id = props.match.params.id;
  useEffect(() => {
    webApiDemo.get("/products/" + id).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  const placeholder = () => (
    <div className="ui placeholder">
      <div className="header">
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );

  const dataSegment = () => (
    <div className="ui padded segment">
      <div>
        <h5>Name </h5> {product.name}
      </div>
      <div>
        <h5>Price </h5> {product.price}
      </div>
      <div>
        <h5>Quantity </h5> {product.numberInStock}
      </div>
      <div>
        <h5>Category </h5> {product.categoryName}
      </div>
    </div>
  );
  return product.id ? dataSegment() : placeholder();
};

export default Details;
