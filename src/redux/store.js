import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reports from "./modules/reports";

const middleware = [...getDefaultMiddleware()];

const store = configureStore({
  reducer: {
    reports,
  },
  middleware,
});

export default store;
