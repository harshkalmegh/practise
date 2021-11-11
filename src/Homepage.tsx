import ButtonView from "./Button";
import React from "react";

function Homepage() {
  return (
    <div>
      <ButtonView label="Hello" radius="5px" />
      <ButtonView label="harsh" radius="10px" />
      <ButtonView label="how " radius="15px" />
      <ButtonView label="are" radius="20px" />
      <ButtonView label="you" radius="25px" />
    </div>
  );
}

export default Homepage;
