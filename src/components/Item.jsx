import "./Item.css";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Item = ({ id, name, price, stocks, ...restProps }) => {
  const history = useHistory();
  useEffect(() => {});
  const handleDelete = () => {
    restProps.handleDelete(id);
    history.push("/");
  };

  const handleEditClick = () => {
    history.push("/edit/" + id);
  };
  const handleContentClick = () => {
    history.push("/details/" + id);
  };
  return (
    <div className="card">
      <div className="item item-hover content" onClick={handleContentClick}>
        <div className="header">{name}</div>
        <div className="description">
          <p> Price: {price}</p>
          <p> Number In Stocks: {stocks}</p>
        </div>
      </div>
      <div className="ui bottom attached button" onClick={handleEditClick}>
        <i className="edit icon"></i>
        Edit
      </div>
      <div className="ui bottom attached button" onClick={handleDelete}>
        <i className="trash icon"></i>
        Delete
      </div>
    </div>
  );
};

export default Item;
