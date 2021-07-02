import "./App.css";
import React, { useEffect } from "react";
import CreateProduct from "./components/CreateProduct";
import { Route, BrowserRouter } from "react-router-dom";
import Details from "./components/Details";
import EditProduct from "./components/EditProduct";
import Landing from "./components/Landing/Landing";
import { UserProvider } from "./Contexts/UserContext";
import { useState } from "react";
import webApiDemo from "./apis/webApiDemo";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [user, setUser] = useState({});
  const authenticatedUser = (authUser) => {
    setUser(authUser);
  };
  const key = "basicAuth";
  const basicAuthToken = localStorage.getItem(key);
  useEffect(() => {
    if (basicAuthToken) {
      webApiDemo
        .get("/Users/AuthenticateUser")
        .then((res) => {
          const data = res.data;
          authenticatedUser(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [basicAuthToken]);

  return (
    <UserProvider value={{ user, authenticatedUser }}>
      <div className="ui container">
        <BrowserRouter>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/details/:id" component={Details} />
          <Route exact path="/create" component={CreateProduct} />
          <Route exact path="/edit/:id" component={EditProduct} />
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;
