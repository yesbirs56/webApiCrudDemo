import "./App.css";
import ItemList from "./components/ItemList";
import CreateProduct from "./components/CreateProduct";
import { Route, BrowserRouter } from "react-router-dom";
import Details from "./components/Details";
import EditProduct from "./components/EditProduct";

function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Route exact path="/" component={ItemList} />
        <Route exact path="/details/:id" component={Details} />
        <Route exact path="/create" component={CreateProduct} />
        <Route exact path="/edit/:id" component={EditProduct} />
      </BrowserRouter>
    </div>
  );
}

export default App;
