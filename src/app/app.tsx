import React from "react";
import { useStore } from "effector-react";
import { fp } from "./app.effector.fp";
import { oop } from "./app.effector.oop";

export const App = () => {
  const fpState = useStore(fp.store);
  const oopState = useStore(oop.store);

  return (
    <div>
      <div>
        <h3>Functional programming style</h3>
        <div>
          <button onClick={fp.actions.decrement}>decrement</button>{" "}
          <span>{fpState}</span>{" "}
          <button onClick={fp.actions.increment}>increment</button>{" "}
          <span>|</span>{" "}
          <button onClick={fp.actions.random}>random</button>
        </div>
      </div>
      <hr />
      <div>
        <h3>Object-oriented programming style</h3>
        <div>
          <button onClick={oop.actions.decrement}>decrement</button>{" "}
          <span>{oopState}</span>{" "}
          <button onClick={oop.actions.increment}>increment</button>{" "}
          <span>|</span>{" "}
          <button onClick={oop.actions.random}>random</button>
        </div>
      </div>
    </div>
  );
};
