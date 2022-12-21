import React from "react";
import { UserConsumer } from "./context/userContext";

const Comp4 = () => {
  return (
    <div>
      <UserConsumer>
        {(userName) => {
          return <h1>hello , {userName}</h1>;
        }}
      </UserConsumer>
    </div>
  );
};

export default Comp4;
