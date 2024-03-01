import { useState } from "react";
import { Component2 } from "./Component2";
import { Component3 } from "./Component3";

export const Component1 = () => {

    console.log("helllooo");

  return (
    <div>
      <Component3 />
      <Component2 />
    </div>
  );
};
