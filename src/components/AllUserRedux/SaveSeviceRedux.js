import { createSlice } from "@reduxjs/toolkit";

const serviceRedux = createSlice({
  name: "items",
  initialState: { items: [{ title: "Hello", description: "Hello my desc" }] },
  reducers: {
    addService: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addService } = serviceRedux.actions;
