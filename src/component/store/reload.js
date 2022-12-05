import { createStore } from "redux";

const reloading = (state = { reload: 1 }, action) => {
  if (action.type === "RELOAD") {
    return { reload: state.reload === 1 ? 2 : 1 };
  }
  return state;
};
const store = createStore(reloading);
export default store;
