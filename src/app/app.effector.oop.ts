import { createStore, createEvent, createEffect } from "effector";

class OOP {
  private readonly increment = createEvent();
  private readonly decrement = createEvent();
  private readonly random = createEffect(
    (): Promise<number> => Promise.resolve(Math.round(Math.random() * 10))
  );

  public readonly store = createStore(0);

  constructor() {
    this.store
      .on(this.increment, (state) => state + 1)
      .on(this.decrement, (state) => state - 1)
      .on(this.random.doneData, (state, payload) => payload);
  }

  public readonly actions = {
    increment: () => this.increment(),
    decrement: () => this.decrement(),
    random: () => this.random(),
  };
}

export const oop = new OOP();
