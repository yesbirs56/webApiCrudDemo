import React, { useState, useContext } from "react";
import webApiDemo from "../../apis/webApiDemo";
import UserContext from "../../Contexts/UserContext";

const Login = ({ setBasicAuth }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { authenticatedUser } = useContext(UserContext);

  const key = "basicAuth";
  const handleLoginSubmit = () => {
    const formData = { Username: username, Password: password };

    webApiDemo
      .post("/users", formData)
      .then((res) => {
        const data = res.data;
        const basicAuthToken = data.basicAuthToken;
        localStorage.setItem(key, basicAuthToken);
        setBasicAuth(basicAuthToken);
        authenticatedUser(data);
        //window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderLoginForm = () => (
    <div className="ui form">
      <div className="field">
        <label>Username</label>
        <input
          type="text"
          name="first-name"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Password</label>
        <input
          type="password"
          name="last-name"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        className="ui primary button"
        type="submit"
        onClick={handleLoginSubmit}
      >
        Login
      </button>
    </div>
  );
  return <>{renderLoginForm()}</>;
};

export default Login;
