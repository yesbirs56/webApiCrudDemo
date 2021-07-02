import React, { useState } from "react";
import webApiDemo from "../../apis/webApiDemo";

const Register = () => {
  const [rUsername, setRUsername] = useState("");
  const [rPassword, setRPassword] = useState("");
  const [hidden, setHidden] = useState("hidden");
  const [isAdmin, setIsAdmin] = useState(false);

  const handleRegisterSubmit = () => {
    const formData = {
      Username: rUsername,
      Password: rPassword,
      Role: isAdmin ? "admin" : "guest",
    };
    webApiDemo
      .post("/users/register", formData)
      .then((res) => {
        const data = res.data;
        setHidden("");
        console.log(data.id);
        setIsAdmin(false);
        setRPassword("");
        setRUsername("");
      })
      .catch((err) => {
        const data = err.response.data;
        console.log(data);
      });
  };

  const renderRegisterForm = () => (
    <div className="ui form">
      <div className="field">
        <label>Username</label>
        <input
          type="text"
          placeholder="Username"
          value={rUsername}
          onChange={(e) => setRUsername(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={rPassword}
          onChange={(e) => setRPassword(e.target.value)}
        />
      </div>
      <div className="ui checkbox field">
        <input
          type="checkbox"
          checked={isAdmin}
          onChange={() => setIsAdmin(!isAdmin)}
        />
        <label>Is Admin</label>
      </div>
      <button
        className="ui primary button"
        type="submit"
        onClick={handleRegisterSubmit}
      >
        Register
      </button>
    </div>
  );

  return (
    <>
      {renderRegisterForm()}
      <div className={`ui success message transition ${hidden}`}>
        <i className="close icon" onClick={() => setHidden("hidden")}></i>
        <div className="header">Your user registration was successful.</div>
        <p>You may now log-in with the username you have chosen</p>
      </div>
    </>
  );
};

export default Register;
