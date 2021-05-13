import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import notificationsReducer from "./data/data-reducer";

const middleware = [...getDefaultMiddleware()];

const store = configureStore({
  reducer: {
    data: notificationsReducer,
  },
  middleware,
});

export default store;
