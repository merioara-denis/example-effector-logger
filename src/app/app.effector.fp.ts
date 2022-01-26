import { createStore, createEvent, createEffect } from "effector";

const increment = createEvent();
const decrement = createEvent();
const random = createEffect(
  (): Promise<number> => Promise.resolve(Math.round(Math.random() * 10))
);

const store = createStore(0);

store
  .on(increment, (state) => state + 1)
  .on(decrement, (state) => state - 1)
  .on(random.doneData, (state, payload) => payload);

export const fp = {
  store,
  actions: {
    increment: () => increment(),
    decrement: () => decrement(),
    random: () => random(),
  },
};
