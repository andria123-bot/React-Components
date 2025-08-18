import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const UseContexts = () => {
  const user = useContext(UserContext)
  return <h1>Hello, {user.name}!</h1>
};

export default UseContexts;