import { createReducer } from "@reduxjs/toolkit";
import { fetchNotifications } from "./data-operations";

const notificationsReducer = createReducer([], {
  [fetchNotifications.fulfilled]: (state, { payload }) => payload,
});

export default notificationsReducer;
