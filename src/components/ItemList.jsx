import React from "react";
import Item from "./Item";
import webApiDemo from "../apis/webApiDemo";
import { useHistory } from "react-router-dom";
const ItemList = () => {
  const [students, setStudents] = React.useState([]);
  const history = useHistory();

  React.useEffect(() => {
    webApiDemo
      .get("/products")
      .then((res) => {
        console.log(res);
        setStudents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [students.length]);

  const handleAddClick = () => {
    history.push("/create");
  };

  const handleDelete = (id) => {
    webApiDemo.delete("/products/" + id).then((res) => {
      console.log(res);
      setStudents((pre) => {
        return pre.filter((product) => {
          if (product.id !== id) return true;
          else return false;
        });
      });
    });
  };

  const renderListPlaceholder = () => (
    <div className="ui four column stackable grid">
      <div className="column">
        <div className="ui raised segment">
          <div className="ui placeholder">
            <div className="image header">
              <div className="line"></div>
              <div className="line"></div>
            </div>
            <div className="paragraph">
              <div className="medium line"></div>
              <div className="short line"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="ui raised segment">
          <div className="ui placeholder">
            <div className="image header">
              <div className="line"></div>
              <div className="line"></div>
            </div>
            <div className="paragraph">
              <div className="medium line"></div>
              <div className="short line"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="ui raised segment">
          <div className="ui placeholder">
            <div className="image header">
              <div className="line"></div>
              <div className="line"></div>
            </div>
            <div className="paragraph">
              <div className="medium line"></div>
              <div className="short line"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="ui raised segment">
          <div className="ui placeholder">
            <div className="image header">
              <div className="line"></div>
              <div className="line"></div>
            </div>
            <div className="paragraph">
              <div className="medium line"></div>
              <div className="short line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const renderListOfProducts = () => (
    <div>
      <button className="ui button primary" onClick={handleAddClick}>
        Add Product
      </button>
      <br />
      <br />
      <div className="ui four cards">
        {students.map((student, index) => (
          <Item
            id={student.id}
            key={index}
            name={student.name}
            price={student.price}
            stocks={student.numberInStock}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <h4 className="ui dividing header">All Product</h4>

      {students.length > 0 ? renderListOfProducts() : renderListPlaceholder()}
    </div>
  );
};

export default ItemList;
