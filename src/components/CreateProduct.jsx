import React, { useEffect, useState, useContext } from "react";
import webApiDemo from "../apis/webApiDemo";
import { useHistory } from "react-router-dom";
import UserContext from "../Contexts/UserContext";

const CreateProduct = (props) => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [numberInStock, setNumberInStock] = useState(0);
  const [categoryId, setCategoryId] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const { user } = useContext(UserContext);
  if (!user || user.role !== "admin") {
    history.push("/");
  }

  useEffect(() => {
    if (props.product) {
      const product = props.product;
      setIsEdit(true);
      setName(product.name);
      setPrice(product.price);
      setNumberInStock(product.numberInStock);
      setCategoryId(product.categoryId);
    }
  }, [props.product]);

  const handleSubmit = () => {
    const formData = {
      Name: name,
      Price: price,
      NumberInStock: numberInStock,
      CategoryId: categoryId,
    };
    if (isEdit) {
      webApiDemo.put("/products/" + props.product.id, formData).then((res) => {
        console.log("updated product ", res.data);
        history.push("/");
      });
    } else {
      webApiDemo.post("/products", formData).then((res) => {
        console.log(res);
        history.push("/");
      });
    }
  };

  return (
    <div className="ui form">
      <div className="ui field">
        <label>Name</label>
        <div className="six wide field">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(evt) => setName(evt.target.value)}
          />
        </div>
      </div>
      <div className="two fields">
        <div className="field">
          <label>Price</label>
          <input
            type="number"
            value={price}
            placeholder="Enter Price"
            onChange={(evt) => setPrice(evt.target.value)}
          />
        </div>
        <div className="field">
          <label>Quantity</label>
          <input
            type="number"
            value={numberInStock}
            placeholder="Enter Quantity"
            onChange={(evt) => setNumberInStock(evt.target.value)}
          />
        </div>
        <div className="ui field">
          <label>CatagoryId</label>
          <div className="six wide field">
            <input
              type="number"
              placeholder="Enter CatergoryId"
              value={categoryId}
              onChange={(evt) => setCategoryId(evt.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="ui submit primary button" onClick={handleSubmit}>
        Submit
      </div>
    </div>
  );
};

export default CreateProduct;
