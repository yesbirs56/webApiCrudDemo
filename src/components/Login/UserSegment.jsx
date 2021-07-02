import React from "react";
import Register from "./Register";
import Login from "./Login";

const UserSegment = ({ setBasicAuth }) => {
  const renderSegment = () => {
    return (
      <div className="ui placeholder segment">
        <div className="ui two column stackable center aligned grid">
          <div className="ui vertical divider">Or</div>
          <div className="middle aligned row">
            <div className="column">
              <div className="ui icon header">
                <i className="user icon"></i>
                Login
              </div>
              <Login setBasicAuth={setBasicAuth} />
            </div>

            <div className="column">
              <div className="ui icon header">
                <i className="user plus icon"></i>
                Register
              </div>
              <Register />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div>{renderSegment()}</div>
    </div>
  );
};

export default UserSegment;
