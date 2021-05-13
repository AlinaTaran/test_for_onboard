import { createAsyncThunk } from "@reduxjs/toolkit";
import { dataApiRequest } from "../../services/dataApi";

export const fetchNotifications = createAsyncThunk(
  "fetchNotifications",
  async (_, { rejectedWithValue }) => {
    try {
      const response = await dataApiRequest();
      return response;
    } catch (e) {
      return rejectedWithValue(e);
    }
  }
);
