import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./Auth";
// import { createStore } from "redux";

// const initialCounterState = { counter: 0, showCounter: false };
// const counterSlice = createSlice({
//   name: "counter",
//   initialState: initialCounterState,
//   reducers: {
//     increment(state) {
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     incrementby5(state) {
//       state.counter += 5;
//     },
//     toggleCounter(state) {
//       state.showCounter = !state.showCounter;
//     },
//   },
// });

// const initialAuthState = {
//   isAuthenticated: false,
// };

// const authSlice = createSlice({
//   name: "authentication",
//   initialState: initialAuthState,
//   reducers: {
//     login(state) {
//       state.isAuthenticated = true;
//     },
//     logout(state) {
//       state.isAuthenticated = false;
//     },
//   },
// });

// const counterReducer = (state = initialState, action) => {
// if we have big application so that there have more and more state to manage in your application then some problem will identify in this method. the 1st problem is this action types. these identifiers, if you dispatch action, you have to make sure that you don't mistype the identifier here otherwise it won't be handled by the reducre
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 2,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 2,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "incrementby5") {
//     return {
//       counter: state.counter + 5,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };

// const store = createStore(counterSlice.reducer);

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;

console.log("initial state - ", store.getState());
export default store;
