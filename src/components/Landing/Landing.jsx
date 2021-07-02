import React, { useEffect, useState } from "react";
import ItemList from "../ItemList";
import UserSegment from "../Login/UserSegment";

const Landing = () => {
  const [basicAuth, setBasicAuth] = useState("");
  const key = "basicAuth";
  useEffect(() => {
    const token = localStorage.getItem(key);
    setBasicAuth(token);
  }, []);
  return (
    <div>
      {basicAuth ? <ItemList /> : <UserSegment setBasicAuth={setBasicAuth} />}
    </div>
  );
};

export default Landing;
