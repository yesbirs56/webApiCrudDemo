import "./Item.css";
import React, { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../Contexts/UserContext";
import AlertDialog from "./Dialogs/AlertDialog";

const Item = ({ id, name, price, stocks, ...restProps }) => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const { user } = useContext(UserContext);
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
  const renderButtons = () => (
    <>
      <div className="ui bottom attached button" onClick={handleEditClick}>
        <i className="edit icon"></i>
        Edit
      </div>
      <div
        className="ui bottom attached button"
        onClick={() => {
          setIsOpenDialog(true);
        }}
      >
        <i className="trash icon"></i>
        Delete
      </div>
    </>
  );
  return (
    <>
      <AlertDialog
        text={`Are You Sure You Want to Delete Product ${name} with id : ${id}`}
        title={"Confirm Delete"}
        action={handleDelete}
        open={isOpenDialog}
        setOpen={setIsOpenDialog}
      />
      <div className="card">
        <div className="item item-hover content" onClick={handleContentClick}>
          <div className="header">{name}</div>
          <div className="description">
            <p> Price: {price}</p>
            <p> Number In Stocks: {stocks}</p>
          </div>
        </div>
        {user.role === "admin" ? renderButtons() : null}
      </div>
    </>
  );
};

export default Item;
